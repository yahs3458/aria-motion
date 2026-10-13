"use client";

import { useState } from "react";

const TYPES = ["Brand animation", "Product explainer", "Social motion kit", "Title sequence", "Something else"];
const BUDGETS = ["< $2k", "$2–5k", "$5–10k", "$10k+"];

// Concept demo: nothing is sent. On a client build this posts to their inbox or CRM.
export default function Inquiry() {
  const [type, setType] = useState(TYPES[0]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="rounded-3xl border border-line bg-ink-2 p-8 sm:p-10">
        <p className="font-display text-5xl uppercase text-coral">Got it.</p>
        <p className="mt-4 max-w-md text-dim">
          This is a concept site, so nothing was sent. On a real build, Aria gets this brief in her inbox and replies within a day.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold underline underline-offset-4">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-line bg-ink-2 p-6 sm:p-10"
    >
      <fieldset>
        <legend className="text-sm text-dim">What are we making?</legend>
        <Chips options={TYPES} value={type} onChange={setType} name="type" />
      </fieldset>
      <fieldset className="mt-6">
        <legend className="text-sm text-dim">Budget</legend>
        <Chips options={BUDGETS} value={budget} onChange={setBudget} name="budget" />
      </fieldset>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" />
        <Field label="Email" name="email" type="email" autoComplete="email" />
      </div>
      <label className="mt-4 block">
        <span className="text-sm text-dim">Tell me about it</span>
        <textarea
          name="brief"
          required
          rows={4}
          placeholder="A 30-second launch film for our app, due mid-November…"
          className="mt-2 w-full resize-none rounded-2xl border border-line bg-ink px-4 py-3 placeholder:text-dim/60 focus:border-coral focus:outline-none"
        />
      </label>

      <button type="submit" className="mt-6 w-full rounded-full bg-coral px-6 py-4 font-display text-xl uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5 sm:w-auto">
        Send inquiry ✦
      </button>
    </form>
  );
}

function Chips({ options, value, onChange, name }: { options: string[]; value: string; onChange: (v: string) => void; name: string }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => (
        <label key={o} className="cursor-pointer">
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="peer sr-only" />
          <span className="block rounded-full border border-line px-4 py-2 text-sm transition-colors peer-checked:border-coral peer-checked:bg-coral peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-coral hover:border-cream">
            {o}
          </span>
        </label>
      ))}
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm text-dim">{label}</span>
      <input required {...props} className="mt-2 w-full rounded-2xl border border-line bg-ink px-4 py-3 focus:border-coral focus:outline-none" />
    </label>
  );
}
