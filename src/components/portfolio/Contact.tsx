import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSending(true);
  setError("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  console.log("Access key exists:", !!accessKey);

  if (!accessKey) {
    setError("Web3Forms access key is missing.");
    setSending(false);
    return;
  }

  formData.append("access_key", accessKey);
  formData.append("from_name", "Faith Kiplagat Portfolio");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log("Web3Forms response:", data);

    if (data.success) {
      setSent(true);
      form.reset();

      setTimeout(() => {
        setSent(false);
      }, 4000);
    } else {
      setError(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setError("Unable to send your message. Please try again.");
  } finally {
    setSending(false);
  }
};

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project, opportunity, or idea? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass rounded-2xl p-7 flex flex-col gap-5"
          >
            <div>
              <h3 className="text-xl font-semibold">
                Contact details
              </h3>

              <p className="text-sm text-muted-foreground mt-2">
                Prefer email? Drop a line. I usually reply within 24 hours.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <a
                href="mailto:kiplagatfaith88@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition group"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/15 text-primary grid place-items-center group-hover:scale-110 transition">
                  <Mail size={16} />
                </span>

                kiplagatfaith88@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/faith-kiplagat-35b455293/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition group"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/15 text-primary grid place-items-center group-hover:scale-110 transition">
                  <FaLinkedin size={16} />
                </span>

                linkedin.com/in/faith-kiplagat
              </a>

              <a
                href="https://github.com/Imanikiplagat"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition group"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/15 text-primary grid place-items-center group-hover:scale-110 transition">
                  <FaGithub size={16} />
                </span>

                github.com/faykiplagat
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="w-9 h-9 rounded-lg bg-primary/15 text-primary grid place-items-center">
                  <MapPin size={16} />
                </span>

                Nairobi, Kenya · Remote-friendly
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-2xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Name"
                name="name"
                placeholder="Your name"
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@email.com"
              />
            </div>

            <Field
              label="Subject"
              name="subject"
              placeholder="What's this about?"
            />

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                Message
              </label>

              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me a bit about your project..."
                className="mt-2 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium glow-primary hover:scale-[1.02] transition w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending
                ? "Sending..."
                : sent
                ? "Message sent ✓"
                : "Send message"}

              {!sending && !sent && <Send size={15} />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-wider text-muted-foreground font-mono"
      >
        {label}
      </label>

      <input
        id={name}
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}