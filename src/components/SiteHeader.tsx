import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";

const nav = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/departments", label: "الإدارات والمكاتب" },
  { to: "/services", label: "الخدمات" },
  { to: "/news", label: "الأخبار" },
  { to: "/contact", label: "اتصل بنا" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-primary text-primary-foreground lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-gold" /> 21800 0000 218+</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-gold" /> info@jerc.ly</span>
          </div>
          <div className="text-primary-foreground/80">دولة ليبيا — وزارة العدل</div>
        </div>
      </div>
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="شعار مركز الخبرة القضائية والبحوث" width={56} height={56} className="h-14 w-14 rounded-full object-contain ring-1 ring-border" />
            <div className="leading-tight">
              <div className="text-base font-bold text-foreground sm:text-lg">مركز الخبرة القضائية والبحوث</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">Judicial Expertise &amp; Research Center</div>
            </div>
          </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
              activeProps={{ className: "bg-primary-soft text-primary font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label="القائمة"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary"
                activeProps={{ className: "bg-primary-soft text-primary font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
