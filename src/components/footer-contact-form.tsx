"use client";

import { FileText, Mail, MessageSquareText, Send, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedSubject = values.subject.trim();
  const trimmedMessage = values.message.trim();

  if (!trimmedName) errors.name = "Please enter your name.";
  else if (trimmedName.length < 2) errors.name = "Name must be at least 2 characters.";

  if (!trimmedEmail) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = "Enter a valid email address.";
  }

  if (!trimmedSubject) errors.subject = "Please add a subject.";
  else if (trimmedSubject.length < 3) errors.subject = "Subject must be at least 3 characters.";

  if (!trimmedMessage) errors.message = "Please write your message.";
  else if (trimmedMessage.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export function FooterContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const showError = (field: keyof FormValues) => touched[field] && errors[field];

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field] || submitted) setErrors(validate(next));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTouched({ name: true, email: true, subject: true, message: true });

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSuccess(true);
    setValues(initialValues);
    setTouched({});
    setSubmitted(false);
    setErrors({});
  };

  return (
    <form className="footer-form footer-panel" aria-label="Send a message" onSubmit={handleSubmit} noValidate>
      <div className="footer-form-row">
        <label className={`footer-field${showError("name") ? " invalid" : ""}`}>
          <span className="footer-field-label">Your Name</span>
          <UserRound aria-hidden="true" />
          <input
            name="name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            placeholder="Your Name"
            autoComplete="name"
            aria-invalid={!!showError("name")}
            aria-describedby={showError("name") ? "footer-name-error" : undefined}
          />
          {showError("name") && (
            <span id="footer-name-error" className="footer-field-error" role="alert">
              {errors.name}
            </span>
          )}
        </label>

        <label className={`footer-field${showError("email") ? " invalid" : ""}`}>
          <span className="footer-field-label">Your Email</span>
          <Mail aria-hidden="true" />
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            placeholder="Your Email"
            autoComplete="email"
            aria-invalid={!!showError("email")}
            aria-describedby={showError("email") ? "footer-email-error" : undefined}
          />
          {showError("email") && (
            <span id="footer-email-error" className="footer-field-error" role="alert">
              {errors.email}
            </span>
          )}
        </label>
      </div>

      <label className={`footer-field${showError("subject") ? " invalid" : ""}`}>
        <span className="footer-field-label">Subject</span>
        <FileText aria-hidden="true" />
        <input
          name="subject"
          value={values.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          onBlur={() => handleBlur("subject")}
          placeholder="Subject"
          aria-invalid={!!showError("subject")}
          aria-describedby={showError("subject") ? "footer-subject-error" : undefined}
        />
        {showError("subject") && (
          <span id="footer-subject-error" className="footer-field-error" role="alert">
            {errors.subject}
          </span>
        )}
      </label>

      <label className={`footer-field footer-message-field${showError("message") ? " invalid" : ""}`}>
        <span className="footer-field-label">Your Message</span>
        <MessageSquareText aria-hidden="true" />
        <textarea
          name="message"
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          placeholder="Your Message"
          rows={2}
          aria-invalid={!!showError("message")}
          aria-describedby={showError("message") ? "footer-message-error" : undefined}
        />
        {showError("message") && (
          <span id="footer-message-error" className="footer-field-error" role="alert">
            {errors.message}
          </span>
        )}
      </label>

      <button className="button" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Message"} <Send />
      </button>

      {success && (
        <p className="footer-form-success" role="status">
          Thank you — your message looks good and is ready to send.
        </p>
      )}

      <p className="footer-form-note">
        All fields are required. Email delivery will be connected before launch.
      </p>
    </form>
  );
}
