"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
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
      <div className="rounded-xl border border-border bg-light2 dark:bg-dark2 p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-4">
          <Send className="h-5 w-5 text-accent" />
        </div>
        <h2 className="font-semibold text-fore mb-2">Message sent!</h2>
        <p className="text-sm text-muted">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-fore">
            Name <span className="text-accent">*</span>
          </label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="business" className="text-xs font-medium text-fore">
            Business Name
          </label>
          <Input id="business" name="business" placeholder="Your business (optional)" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-fore">
            Email <span className="text-accent">*</span>
          </label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-medium text-fore">
            Phone
          </label>
          <Input id="phone" name="phone" type="tel" placeholder="07..." />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="budget" className="text-xs font-medium text-fore">
            Budget Range
          </label>
          <Select name="budget">
            <SelectTrigger>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-200">Under £200</SelectItem>
              <SelectItem value="200-600">£200–£600</SelectItem>
              <SelectItem value="600-1000">£600–£1,000</SelectItem>
              <SelectItem value="1000-2500">£1,000–£2,500</SelectItem>
              <SelectItem value="2500-5000">£2,500–£5,000</SelectItem>
              <SelectItem value="5000-plus">£5,000+</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="service" className="text-xs font-medium text-fore">
            Service Interested In
          </label>
          <Select name="service">
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="starter">Starter Website</SelectItem>
              <SelectItem value="business">Business Website</SelectItem>
              <SelectItem value="presence">Internet Presence Package</SelectItem>
              <SelectItem value="custom">Custom Software</SelectItem>
              <SelectItem value="other">Something else</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium text-fore">
          Message <span className="text-accent">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, what you need, and any deadlines..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Send message"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
