import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  Stethoscope,
  Languages,
  FlaskConical,
  TestTubes,
  ArrowLeft,
  ShieldCheck,
  Clock,
  Building2,
  MapPin,
  BookOpen,
  Sparkles,
  Gavel,
} from "lucide-react";
import heroImg from "@/assets/hero-forensic.jpg";
import logo from "@/assets/logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الرئيسية | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "الجهة الرسمية الوحيدة المخوّلة قانوناً في ليبيا بتقديم أعمال الخبرة القضائية والطب الشرعي والتحاليل، دعماً للسلطة القضائية." },
      { property: "og:title", content: "مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "الجهة الرسمية الوحيدة في ليبيا للخبرة القضائية والطب الشرعي." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Scale,
    title: "الخبرة الجنائية",
    desc: "تقديم الخبرة الفنية في القضايا الجنائية، بما في ذلك فحص الأدلة وتحليلها ودعم الجهات القضائية بالتقارير الفنية الدقيقة.",
  },
  {
    icon: Stethoscope,
    title: "الطب الشرعي",
    desc: "إجراء الفحوصات الطبية الشرعية لتحديد أسباب الوفاة والإصابات، وتقديم تقارير طبية معتمدة للجهات القضائية.",
  },
  {
    icon: Languages,
    title: "الترجمة المعتمدة",
    desc: "ترجمة المستندات الرسمية والتصديق على الوثائق الموجهة للسفارات والجهات الخارجية.",
  },
  {
    icon: FlaskConical,
    title: "مكاتب التحاليل",
    desc: "إجراء التحاليل المخبرية المختلفة لدعم التحقيقات، باستخدام أحدث التقنيات والأجهزة العلمية.",
  },
  {
    icon: TestTubes,
    title: "التحاليل الكيميائية",
    desc: "تحليل العينات الكيميائية من المواد المخدرة والسموم والمواد المجهولة، وإصدار تقارير دقيقة تدعم الجهات القضائية.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/50 to-primary/85" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:px-8 lg:py-36">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-sm font-medium text-gold">
              <ShieldCheck className="h-4 w-4" /> دولة ليبيا — جهة رسمية
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              مركز الخبرة القضائية والبحوث
            </h1>
            <div className="mt-3 h-1 w-24 rounded-full bg-gold" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              الجهة الرسمية المعتمدة لدى المحاكم والنيابة العامة في تنفيذ المأموريات القضائية وأعمال الخبرة
              والطب الشرعي وفقاً للتشريعات النافذة في ليبيا.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                خدماتنا الرسمية <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
              >
                تعرّف على المركز
              </Link>
            </div>
          </div>

          <div className="hidden justify-self-center lg:block">
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-full bg-gold/15 blur-2xl" />
              <div className="relative rounded-full border border-gold/40 bg-primary-foreground/5 p-6 backdrop-blur-sm">
                <img src={logo} alt="شعار المركز" width={260} height={260} className="h-64 w-64 rounded-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-1 w-full bg-[var(--gradient-gold)]" />
      </section>

      {/* Working hours & location quick strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 rounded-xl border border-border bg-primary-soft/40 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground">أوقات العمل الرسمية</div>
              <div className="text-sm font-bold text-foreground sm:text-base">
                من الأحد إلى الخميس — 8:00 ص إلى 3:00 م
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-border bg-primary-soft/40 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold text-gold-foreground">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-muted-foreground">المقر الرسمي</div>
              <div className="text-sm font-bold text-foreground sm:text-base">
                الظهرة — طرابلس، بجانب فندق الودان
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="text-sm font-bold uppercase tracking-wider text-primary">الخدمات الرسمية</div>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">اختصاصات المركز</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gold" />
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            يتولى المركز تنفيذ أعمال الخبرة القضائية والطب الشرعي وإجراء التحاليل الفنية المتخصصة،
            وتقديم التقارير المعتمدة لدعم أعمال المحاكم والنيابة العامة وفقًا للتشريعات النافذة.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-[var(--gradient-gold)] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <div className="mb-2 text-xs font-bold text-muted-foreground">{`0${i + 1}`}</div>
              <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-gold"
              >
                تفاصيل أكثر <ArrowLeft className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Highlighted Research Office */}
      <section className="bg-primary-soft/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-[var(--gradient-hero)] p-8 shadow-[var(--shadow-elegant)] sm:p-12">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr]">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-lg">
                <BookOpen className="h-12 w-12" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
                  <Sparkles className="h-3.5 w-3.5" /> قسمٌ مميّز
                </div>
                <h2 className="mt-3 text-3xl font-bold text-primary-foreground sm:text-4xl">
                  مكتب البحوث والدراسات
                </h2>
                <div className="mt-2 h-1 w-16 rounded-full bg-gold" />
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/90">
                  يقوم بإعداد الدراسات والبحوث العلمية المتخصّصة، وتطوير أساليب العمل الفني،
                  ودعم اتخاذ القرار داخل المركز، بما يواكب أحدث التطورات في مجالات الخبرة القضائية والطب الشرعي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--gradient-hero)] px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-12">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
          <Building2 className="relative mx-auto h-12 w-12 text-gold" />
          <h2 className="relative mt-4 text-2xl font-bold text-primary-foreground sm:text-3xl">
            للتواصل الرسمي مع المركز
          </h2>
          <p className="relative mx-auto mt-3 max-w-2xl text-primary-foreground/85">
            يمكن للجهات القضائية والرسمية التواصل مع المركز خلال أوقات العمل الرسمية.
          </p>
          <Link
            to="/contact"
            className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3 text-sm font-bold text-gold-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            تواصل معنا <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
