import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import contactHero from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "اتصل بنا | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "تواصل مع مركز الخبرة القضائية والبحوث - العنوان، أرقام الهاتف، البريد الإلكتروني ونموذج التواصل الرسمي." },
      { property: "og:title", content: "اتصل بنا - مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "للتواصل الرسمي مع المركز عبر الهاتف، البريد الإلكتروني أو نموذج التواصل." },
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
        title="قنوات التواصل الرسمية"
        subtitle="يمكن للجهات القضائية والرسمية والأفراد التواصل مع المركز خلال أوقات العمل الرسمية."
        image={contactHero}
      />

      <section className="bg-[var(--gradient-hero)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Info */}
            <aside className="space-y-4 lg:col-span-2">
              <InfoCard icon={MapPin} title="المقر الرسمي">
                الظهرة — طرابلس<br />بجانب فندق الودان
              </InfoCard>
              <InfoCard icon={Phone} title="الهاتف">
                <span dir="ltr">+218 21 000 0000</span><br />
                <span dir="ltr">+218 91 000 0000</span>
              </InfoCard>
              <InfoCard icon={Mail} title="البريد الإلكتروني">
                <span dir="ltr">info@jerc.ly</span><br />
                <span dir="ltr">contact@jerc.ly</span>
              </InfoCard>
              <InfoCard icon={Clock} title="أوقات العمل الرسمية">
                الأحد - الخميس: 8:00 ص — 3:00 م<br />الجمعة - السبت: مغلق
              </InfoCard>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gold/30 bg-primary-foreground/5 p-6 backdrop-blur-sm sm:p-8">
                <h2 className="text-2xl font-bold text-primary-foreground">نموذج التواصل الرسمي</h2>
                <div className="mt-2 h-1 w-16 rounded-full bg-gold" />
                <p className="mt-3 text-sm text-primary-foreground/80">
                  املأ النموذج أدناه وسيتم الردّ خلال أوقات العمل الرسمية.
                </p>

                {sent ? (
                  <div className="mt-6 rounded-xl border border-gold/40 bg-gold/10 p-6 text-center">
                    <div className="text-3xl text-gold">✓</div>
                    <p className="mt-2 font-bold text-primary-foreground">تم استلام رسالتكم</p>
                    <p className="mt-1 text-sm text-primary-foreground/80">سيتم الردّ في أقرب وقت ممكن.</p>
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
                      <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-primary-foreground">
                        الرسالة <span className="text-gold">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        maxLength={1000}
                        className="w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-lg transition-transform hover:-translate-y-0.5 sm:col-span-2"
                    >
                      <Send className="h-4 w-4" /> إرسال الرسالة
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-gold/25 bg-primary-foreground/5 p-5 backdrop-blur-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold text-gold-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-bold text-primary-foreground">{title}</h3>
        <div className="mt-1 text-sm leading-relaxed text-primary-foreground/85">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-primary-foreground">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}
