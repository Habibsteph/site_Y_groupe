import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ygroupe/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ygroupestudiodecreation",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/111301915/admin/dashboard/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@YGroupe",
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="relative h-16 w-[220px]">
              <Image
                src="/logos/logo-ygroupe.png"
                alt="Y Groupe"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Studio créatif premium basé à Abidjan, spécialisé en branding,
              production, digital et stratégie.
            </p>

            
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>
                <Link href="/" className="transition hover:text-amber-400">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-amber-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition hover:text-amber-400"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-amber-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>Abidjan, Côte d’Ivoire</li>
              <li>
                <a
                  href="tel:+2250702921625"
                  className="transition hover:text-amber-400"
                >
                  +225 07 02 92 16 25
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@y-groupe.com"
                  className="transition hover:text-amber-400"
                >
                  contact@y-groupe.com
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Suivez-nous
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:-translate-y-[2px] hover:border-amber-400/40 hover:text-amber-300 hover:shadow-[0_10px_30px_rgba(245,158,11,0.08)]"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} Y Groupe — Tous droits réservés</p>

          <div className="flex gap-6">
            <span className="cursor-pointer transition hover:text-white">
              Mentions légales
            </span>
            <span className="cursor-pointer transition hover:text-white">
              Politique de confidentialité
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}