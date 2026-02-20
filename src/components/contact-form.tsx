"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Noe gikk galt. Prøv igjen.");
      }

      setStatus("success");
      setFeedback("Takk! Vi tar kontakt innen 24 timer.");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Noe gikk galt. Prøv igjen."
      );
    }
  };

  return (
    <form
      className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-navy">
          Navn
          <input
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            name="name"
            placeholder="Ditt navn"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-navy">
          E-post
          <input
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            name="email"
            type="email"
            placeholder="din@epost.no"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-navy">
        Melding
        <textarea
          className="min-h-[140px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          name="message"
          placeholder="Fortell kort om prosjektet ditt"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sender..." : "Send henvendelse"}
        </button>
        {feedback && (
          <p
            className={`text-sm ${
              status === "success" ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}
