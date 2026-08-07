import { Mail } from "lucide-react";
import{ FaGithub, FaLinkedin ,FaTwitter } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fay Kiplagat. Crafted with care.
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: FaGithub, href: "https://github.com/Imanikiplagat", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/faith-kiplagat-35b455293/", label: "LinkedIn" },
            { icon: FaTwitter, href: "https://x.com/kiplagat2307", label: "Twitter" },
            { icon: Mail, href: "mailto:kiplagatfaith88@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-full glass grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/40 transition"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
