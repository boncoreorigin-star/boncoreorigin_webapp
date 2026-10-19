"use client";

import { useState, type FormEvent } from "react";
import { EMAIL_FORM_ENDPOINT } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!EMAIL_FORM_ENDPOINT) {
      setStatus("done");
      setMessage("Coming soon — follow us on Instagram for launch news.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(EMAIL_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      setMessage("You're in. Welcome to Boncore Origin.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong — please try again.");
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h2 className="font-serif text-2xl font-medium text-charcoal md:text-3xl">
        New products and routines, first.
      </h2>
      <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-3">
        <label htmlFor="signup-email" className="sr-only">
          Email address
        </label>
        <input
          id="signup-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="min-w-0 flex-1 rounded-full border border-charcoal/15 bg-cream px-5 py-3 font-sans text-sm text-charcoal placeholder-charcoal/35 outline-none transition-all duration-300 focus:border-charcoal/40"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-charcoal px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-cream transition-all duration-300 ease-in-out hover:bg-earth disabled:opacity-60"
        >
          Join
        </button>
      </form>
      <p aria-live="polite" className="min-h-5 font-sans text-sm text-charcoal/60">
        {message}
      </p>
    </div>
  );
}
