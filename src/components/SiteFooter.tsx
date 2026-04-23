import { Link } from "@tanstack/react-router";
import { Scale, Mail, Phone, MapPin, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-gold-foreground">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-bold">مركز الخبرة القضائية والبحوث</div>
              <div className="text-xs text-primary-foreground/70">جهة علمية متخصصة في الخبرة القضائية</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            يقدم المركز خدمات الخبرة القضائية والتحاليل العلمية والترجمة المعتمدة بأعلى معايير الجودة والمصداقية،
            دعماً للعدالة وخدمةً للمجتمع.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gold">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-primary-foreground/80 hover:text-gold">من نحن</Link></li>
            <li><Link to="/departments" className="text-primary-foreground/80 hover:text-gold">الإدارات والمكاتب</Link></li>
            <li><Link to="/services" className="text-primary-foreground/80 hover:text-gold">الخدمات</Link></li>
            <li><Link to="/news" className="text-primary-foreground/80 hover:text-gold">الأخبار</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 hover:text-gold">اتصل بنا</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gold">تواصل معنا</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>الظهرة — طرابلس، بجانب فندق الودان</span></li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span dir="ltr">+218 21 000 0000</span></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span dir="ltr">info@jerc.ly</span></li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>الأحد - الخميس: 8:00 ص — 3:00 م</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/70 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} مركز الخبرة القضائية والبحوث. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
