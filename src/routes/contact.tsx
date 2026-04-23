import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "اتصل بنا | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "تواصل مع مركز الخبرة القضائية والبحوث - العنوان، أرقام الهاتف، البريد الإلكتروني ونموذج التواصل." },
      { property: "og:title", content: "اتصل بنا - مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "للتواصل مع المركز عبر الهاتف، البريد الإلكتروني أو نموذج التواصل." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="اتصل بنا"
        title="نحن هنا للإجابة عن استفساراتكم"
        subtitle="يمكنكم التواصل معنا عبر القنوات التالية أو من خلال نموذج التواصل المباشر."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <aside className="space-y-4 lg:col-span-2">
            <InfoCard icon={MapPin} title="العنوان">
              مركز الخبرة القضائية والبحوث<br />طرابلس - ليبيا
            </InfoCard>
            <InfoCard icon={Phone} title="الهاتف">
              <span dir="ltr">+218 21 000 0000</span><br />
              <span dir="ltr">+218 91 000 0000</span>
            </InfoCard>
            <InfoCard icon={Mail} title="البريد الإلكتروني">
              <span dir="ltr">info@jerc.ly</span><br />
              <span dir="ltr">contact@jerc.ly</span>
            </InfoCard>
            <InfoCard icon={Clock} title="ساعات العمل">
              الأحد - الخميس: 8:00 ص - 4:00 م<br />الجمعة - السبت: مغلق
            </InfoCard>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <h2 className="text-2xl font-bold text-foreground">نموذج التواصل</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                املأ النموذج أدناه وسيقوم فريقنا بالتواصل معكم في أقرب وقت ممكن.
              </p>

              {sent ? (
                <div className="mt-6 rounded-xl border border-gold/40 bg-gold/10 p-5 text-center">
                  <div className="text-2xl">✓</div>
                  <p className="mt-2 font-bold text-foreground">تم إرسال رسالتكم بنجاح</p>
                  <p className="mt-1 text-sm text-muted-foreground">سنتواصل معكم قريباً.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="mt-6 grid gap-4 sm:grid-cols-2"
                >
                  <Field label="الاسم الكامل" id="name" required />
                  <Field label="البريد الإلكتروني" id="email" type="email" required />
                  <Field label="رقم الهاتف" id="phone" type="tel" />
                  <Field label="الموضوع" id="subject" required />
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
                      الرسالة <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      maxLength={1000}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 sm:col-span-2"
                  >
                    <Send className="h-4 w-4" /> إرسال الرسالة
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
