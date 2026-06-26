"use client";

import * as React from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function AskForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-light3/10 bg-dark2 p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-5 w-5 text-accent" />
        </div>
        <h2 className="font-heading font-semibold text-light1 mb-2">Question sent</h2>
        <p className="text-xs text-muted">I&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      name="ask"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-light3/10 bg-dark2 p-6"
    >
      <input type="hidden" name="form-name" value="ask" />

      <div className="space-y-1.5">
        <label htmlFor="ask-name" className="text-xs font-medium text-light2">
          Name <span className="text-accent">*</span>
        </label>
        <Input id="ask-name" name="name" placeholder="Your name" required />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="ask-email" className="text-xs font-medium text-light2">
          Email <span className="text-accent">*</span>
        </label>
        <Input id="ask-email" name="email" type="email" placeholder="you@example.com" required />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="ask-question" className="text-xs font-medium text-light2">
          Your question <span className="text-accent">*</span>
        </label>
        <Textarea
          id="ask-question"
          name="question"
          placeholder="What would you like to know?"
          rows={4}
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Ask your question"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
