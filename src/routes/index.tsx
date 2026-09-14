import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  PhoneCall,
  Globe,
  Mail,
  UserPlus,
  ChevronRight,
  Flame,
  Snowflake,
} from "lucide-react";
import {
  WhatsAppIcon,
  InstagramIcon,
  GoogleMapsIcon,
} from "@/components/BrandIcons";
import logoAsset from "@/assets/mg-logo.png";
import backgroundAsset from "@/assets/mg-background.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MG İklimlendirme | Dijital Kartvizit" },
      {
        name: "description",
        content:
          "MG İklimlendirme — Isıtma • Soğutma • İklimlendirme Sistemleri. Tek dokunuşla arayın, WhatsApp'tan yazın, rehberinize kaydedin.",
      },
      { property: "og:title", content: "MG İklimlendirme | Dijital Kartvizit" },
      {
        property: "og:description",
        content:
          "Isıtma • Soğutma • İklimlendirme Sistemleri — MG İklimlendirme dijital kartviziti.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "theme-color", content: "#101b33" },
    ],
  }),
  component: Index,
});

const MOBILE = "+905365043067";
const OFFICE = "+902424105507";

type Action = {
  label: string;
  detail: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  tone: "whatsapp" | "heat" | "cold" | "instagram" | "maps" | "neutral";
  external?: boolean;
};

const actions: Action[] = [
  {
    label: "WhatsApp",
    detail: "Hızlı mesaj gönderin",
    href: "https://wa.me/905365043067",
    icon: WhatsAppIcon,
    tone: "whatsapp",
    external: true,
  },
  {
    label: "Mobil Ara",
    detail: "0536 504 30 67",
    href: `tel:${MOBILE}`,
    icon: Phone,
    tone: "heat",
  },
  {
    label: "Ofisi Ara",
    detail: "0242 410 55 07",
    href: `tel:${OFFICE}`,
    icon: PhoneCall,
    tone: "cold",
  },
  {
    label: "Instagram",
    detail: "@mg.iklimlendirme",
    href: "https://instagram.com/mg.iklimlendirme",
    icon: InstagramIcon,
    tone: "instagram",
    external: true,
  },
  {
    label: "Web Sitesi",
    detail: "mgiklimlendirme.com",
    href: "https://mgiklimlendirme.com",
    icon: Globe,
    tone: "neutral",
    external: true,
  },
  {
    label: "E-Posta",
    detail: "info@mgiklimlendirme.com",
    href: "mailto:info@mgiklimlendirme.com",
    icon: Mail,
    tone: "neutral",
  },
  {
    label: "Yol Tarifi Al",
    detail: "Google Haritalar'da aç",
    href: "https://www.google.com/maps/dir/?api=1&destination=MG+%C4%B0klimlendirme",
    icon: GoogleMapsIcon,
    tone: "maps",
    external: true,
  },
];

const toneIcon: Record<Action["tone"], string> = {
  whatsapp: "bg-[#25D366] text-white shadow-md shadow-[#25D366]/25",
  instagram:
    "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-md shadow-[#dc2743]/25",
  maps: "bg-white text-foreground ring-1 ring-slate-200 dark:ring-slate-800 shadow-md shadow-slate-200/50 p-2",
  heat: "bg-heat text-white shadow-md shadow-heat/25",
  cold: "bg-cold text-white shadow-md shadow-cold/25",
  neutral: "bg-navy-deep text-white shadow-md shadow-navy-deep/25",
};

function downloadVCard() {
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:MG İklimlendirme",
    "ORG:MG İklimlendirme;Isıtma Soğutma Sistemleri",
    `TEL;TYPE=CELL:${MOBILE}`,
    `TEL;TYPE=WORK,VOICE:${OFFICE}`,
    "EMAIL;TYPE=WORK:info@mgiklimlendirme.com",
    "URL:https://mgiklimlendirme.com",
    "NOTE:Isıtma • Soğutma • İklimlendirme Sistemleri | Instagram: @mg.iklimlendirme",
    "END:VCARD",
  ].join("\r\n");
  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "MG-Iklimlendirme.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function Index() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* Subtle hot-cold background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${backgroundAsset})` }}
      />

      {/* Ambient hot-cold glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-heat/15 blur-3xl animate-glow-drift" />
        <div
          className="absolute -top-16 -right-20 size-72 rounded-full bg-cold/15 blur-3xl animate-glow-drift"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-10">
        {/* Hero */}
        <header className="relative overflow-hidden rounded-b-[2rem] bg-navy-deep px-6 pt-12 pb-10 text-center shadow-[0_24px_60px_-24px_oklch(0.26_0.07_260/0.55)] -mx-5 sm:mx-0 sm:mt-6 sm:rounded-[2rem]">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-heat via-card to-cold"
          />
          <div
            aria-hidden
            className="absolute -right-16 -top-16 size-48 rounded-full bg-cold/20 blur-3xl animate-glow-drift"
          />
          <div
            aria-hidden
            className="absolute -left-16 -bottom-16 size-48 rounded-full bg-heat/20 blur-3xl animate-glow-drift"
            style={{ animationDelay: "-5s" }}
          />

          <div className="relative animate-rise">
            <div className="mx-auto flex size-28 items-center justify-center rounded-3xl bg-card p-3 shadow-[0_16px_40px_-12px_oklch(0.1_0.05_260/0.5)] ring-1 ring-card/40">
              <img
                src={logoAsset}
                alt="MG İklimlendirme logosu"
                className="h-full w-full object-contain"
              />
            </div>

            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-card">
              MG İklimlendirme
            </h1>
            <p className="mt-2 text-sm font-medium text-card/70">
              Isıtma • Soğutma • İklimlendirme Sistemleri
            </p>

            <div className="mt-5 flex items-center justify-center gap-5 text-[11px] font-semibold uppercase tracking-widest">
              <span className="flex items-center gap-1.5 text-heat">
                <Flame className="size-3.5" /> Isıtma
              </span>
              <span aria-hidden className="h-3 w-px bg-card/25" />
              <span className="flex items-center gap-1.5 text-cold">
                <Snowflake className="size-3.5" /> Soğutma
              </span>
            </div>
          </div>
        </header>

        {/* Actions */}
        <section aria-label="İletişim" className="mt-6 flex flex-1 flex-col gap-3">
          {actions.map((a, i) => (
            <a
              key={a.label}
              href={a.href}
              {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex min-h-16 items-center gap-4 rounded-2xl bg-card p-4 shadow-[0_8px_24px_-14px_oklch(0.26_0.07_260/0.35)] ring-1 ring-border transition-all duration-200 active:scale-[0.98] active:shadow-sm hover:ring-primary/25 animate-rise"
              style={{ animationDelay: `${120 + i * 70}ms` }}
            >
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-active:scale-95 ${toneIcon[a.tone]}`}
              >
                <a.icon
                  className={a.tone === "maps" ? "h-6 w-auto" : "size-5"}
                  strokeWidth={2.2}
                />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[15px] font-bold leading-tight">{a.label}</span>
                <span className="truncate text-xs text-muted-foreground">{a.detail}</span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-muted-foreground/50 transition-transform duration-200 group-active:translate-x-0.5" />
            </a>
          ))}

          {/* Save contact */}
          <button
            type="button"
            onClick={downloadVCard}
            className="mt-2 flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-heat via-primary to-cold p-[1.5px] shadow-[0_16px_36px_-14px_oklch(0.3_0.12_250/0.5)] transition-transform duration-200 active:scale-[0.98] animate-rise"
            style={{ animationDelay: `${120 + actions.length * 70}ms` }}
          >
            <span className="flex h-full w-full items-center justify-center gap-2.5 rounded-[calc(1rem-1.5px)] bg-primary px-4 py-4 text-[15px] font-extrabold text-primary-foreground">
              <UserPlus className="size-5" strokeWidth={2.2} />
              Rehbere Kaydet
            </span>
          </button>
        </section>

        <footer
          className="mt-8 text-center text-[11px] text-muted-foreground animate-rise"
          style={{ animationDelay: "700ms" }}
        >
          MG İklimlendirme © {new Date().getFullYear()} —{" "}
          <a
            href="https://grainzdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground/70 underline-offset-4 hover:underline"
          >
            Grainz Digital
          </a>
        </footer>
      </div>
    </main>
  );
}
