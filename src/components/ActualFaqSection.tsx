"use client";

import * as React from "react";
import { FaqSection } from "./faq";

const DEMO_FAQS = [
  {
    question: "What types of paint does Acme Paints offer for different surfaces?",
    answer: "Acme Paints provides a wide range of paints designed for various surfaces, including interior walls, exterior walls, wood, and metal. From durable weather-proof options to high-sheen finishes and eco-friendly choices, we have the perfect product to meet your needs.",
  },
  {
    question: "How can I schedule a consultation with an Acme Paints expert?",
    answer: "You can easily book a consultation by filling out our online form. Our customer care team will reach out to arrange an appointment at your convenience, ensuring you get personalized advice on colours, finishes, and application techniques.",
  },
  {
    question: "What are the steps involved in getting a painting quote with Acme Paints?",
    answer: "Simply fill out the form above, and we’ll get in touch with you to provide a personalized estimate for your project, including paint and labor if required.",
  },
  {
    question: "What eco-friendly paint options does Acme Paints offer?",
    answer: "Acme Paints offers a variety of eco-friendly paints that prioritize indoor air quality and minimize environmental impact. Explore our low-VOC and water-based paints, designed to be both sustainable and high-performing. Book a consultation to learn more about our eco-friendly range!",
  },
  {
    question: "Are Acme Paints durable?",
    answer: "Yes, Acme Paints are known for their long-lasting durability, retaining their finish and appearance even in high-traffic areas. Book a consultation to discover how Acme Paints can deliver lasting results for your home.",
  },
  {
    question: "Can I see samples of Acme Paints colours before making a decision?",
    answer: "Yes, you can order colour swatches or sample pots through our website, allowing you to try out colours in your own space before committing. This way, you can see how lighting and surroundings influence your chosen shade.",
  },
];

function ActualFaqSection() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  return (
    <>
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our platform"
        items={DEMO_FAQS}
        contactInfo={{
          title: "Still have questions?",
          description: "We're here to help you",
          buttonText: "Contact Support",
          onContact: () => setIsContactOpen(true),
        }}
      />

      {isContactOpen && (
        <ContactSupportModal onClose={() => setIsContactOpen(false)} />)
      }
    </>
  );
}
export default ActualFaqSection;

function ContactSupportModal({ onClose }: { onClose: () => void }) {
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // In a real app, send this to your backend/email service
    console.log("Contact request", Object.fromEntries(formData.entries()));
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-lg border border-border bg-background p-6 shadow-lg"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-md px-2 py-1 text-foreground/70 hover:text-foreground hover:bg-muted/40"
        >
          ×
        </button>
        <h3 className="text-xl font-semibold mb-1">Contact Support</h3>
        <p className="text-sm text-foreground/70 mb-4">
          Fill the form and our team will reach out shortly.
        </p>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              placeholder="How can we help?"
            />
          </div>
          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md px-4 py-2 text-sm bg-muted/40 hover:bg-muted/60"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md px-4 py-2 text-sm bg-primary text-primary-foreground hover:opacity-90"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}