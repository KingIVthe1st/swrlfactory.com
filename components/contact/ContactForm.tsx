"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  validateContactForm,
  type ContactFormData,
  type ValidationError,
} from "@/lib/validation";

const SUBJECTS = [
  "General Inquiry",
  "Catering Request",
  "Franchise Question",
  "Feedback",
  "Press / Media",
  "Other",
];

const inputClass =
  "w-full bg-white rounded-xl border border-gray-200 px-4 py-3 font-body text-swrl-black placeholder:text-gray-400 focus:outline-none focus:border-swrl-pink focus:ring-2 focus:ring-swrl-pink/20 transition-colors duration-200";

const errorClass = "text-red-500 text-xs mt-1";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");

  function getError(field: string): string | null {
    const err = errors.find((e) => e.field === field);
    return err ? err.message : null;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => prev.filter((err) => err.field !== name));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-swrl-pink/10 text-swrl-pink text-3xl font-bold mb-6"
        >
          ✓
        </motion.div>
        <p className="font-display text-2xl md:text-3xl text-swrl-black mb-2">
          Message Sent!
        </p>
        <p className="font-body text-swrl-black/60">
          We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label className="block font-body text-sm text-swrl-black/70 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          className={inputClass}
        />
        {getError("name") && (
          <p className={errorClass}>{getError("name")}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block font-body text-sm text-swrl-black/70 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          className={inputClass}
        />
        {getError("email") && (
          <p className={errorClass}>{getError("email")}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label className="block font-body text-sm text-swrl-black/70 mb-1">
          Subject
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a subject...</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {getError("subject") && (
          <p className={errorClass}>{getError("subject")}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block font-body text-sm text-swrl-black/70 mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={5}
          className={inputClass}
        />
        {getError("message") && (
          <p className={errorClass}>{getError("message")}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
