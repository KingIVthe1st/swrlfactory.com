"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { INVESTMENT_BUDGETS } from "@/lib/constants";
import {
  validateFranchiseForm,
  type FranchiseFormData,
  type ValidationError,
} from "@/lib/validation";

const inputClass =
  "w-full bg-white rounded-xl border border-gray-200 px-4 py-3 font-body text-swrl-black placeholder:text-gray-400 focus:outline-none focus:border-swrl-pink focus:ring-2 focus:ring-swrl-pink/20 transition-colors duration-200";

const errorClass = "text-red-500 text-xs mt-1";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function FranchiseForm() {
  const [formData, setFormData] = useState<FranchiseFormData>({
    name: "",
    email: "",
    phone: "",
    cityState: "",
    budget: "",
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
    // Clear the error for this field
    setErrors((prev) => prev.filter((err) => err.field !== name));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateFranchiseForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/franchise", {
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
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="inline-block text-6xl mb-6"
          style={{ display: "inline-block" }}
        >
          🍥
        </motion.span>
        <p className="font-display text-2xl md:text-3xl text-swrl-black">
          We&apos;ll be in touch. Get ready to SWRL.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* 2x2 grid: Full Name, Email, Phone, City/State */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <div>
          <label className="block font-body text-sm text-swrl-black/70 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
          {getError("phone") && (
            <p className={errorClass}>{getError("phone")}</p>
          )}
        </div>

        <div>
          <label className="block font-body text-sm text-swrl-black/70 mb-1">
            City / State
          </label>
          <input
            type="text"
            name="cityState"
            value={formData.cityState}
            onChange={handleChange}
            placeholder="Charlotte, NC"
            className={inputClass}
          />
          {getError("cityState") && (
            <p className={errorClass}>{getError("cityState")}</p>
          )}
        </div>
      </div>

      {/* Investment Budget */}
      <div>
        <label className="block font-body text-sm text-swrl-black/70 mb-1">
          Investment Budget
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a range...</option>
          {INVESTMENT_BUDGETS.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
        {getError("budget") && (
          <p className={errorClass}>{getError("budget")}</p>
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
          placeholder="Tell us about yourself and why you want to own a SWRL..."
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

      <div className="flex justify-center">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Let's Talk"}
        </Button>
      </div>
    </form>
  );
}
