import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  TestTubes,
  Languages,
  Fingerprint,
  Calculator,
  Wrench,
  ArrowLeft,
  ShieldCheck,
  Clock,
  Building2,
  MapPin,
  ExternalLink,
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
    icon: Stethoscope,
    title: "الطب الشرعي",
    desc: "إجراء الفحوصات والتشريحات الطبية الشرعية لتحديد أسباب الوفاة وطبيعة الإصابات وتاريخ حدوثها، وفحص المصابين والجناة، وإصدار التقارير الطبية المعتمدة لدى المحاكم والنيابة العامة وفقاً للأصول العلمية والقانونية المعمول بها.",
    location: "المقر الرئيسي — طرابلس / فروع: الزاوية، بوسليم، تاجوراء",
  },
  {
    icon: TestTubes,
    title: "الكيمياء والسموم",
    desc: "تحليل العينات الكيميائية والبيولوجية للكشف عن المواد المخدرة والسموم والكحول والمواد المجهولة في عينات الدم والأنسجة، باستخدام أحدث الأجهزة المخبرية المعتمدة دولياً، وإصدار تقارير فنية تدعم التحقيقات الجنائية.",
    location: "المختبر المركزي — مركز الخبرة القضائية، طرابلس",
  },
  {
    icon: Languages,
    title: "الترجمة القانونية والقضائية",
    desc: "ترجمة الوثائق القانونية والأحكام القضائية والعقود والمستندات الرسمية من وإلى مختلف اللغات، والتصديق عليها لاعتمادها لدى السفارات والمحاكم والجهات الرسمية داخل ليبيا وخارجها.",
    location: "قسم الترجمة المعتمدة — المقر الرئيسي بطرابلس",
  },
  {
    icon: Fingerprint,
    title: "الخبرة الجنائية",
    desc: "أبحاث التزييف والتزوير في الوثائق والعملات والتواقيع، وفحص الأسلحة النارية والذخائر، وتحليل آثار الحرائق والانفجارات، ودراسة مسرح الجريمة وجمع الأدلة المادية وتوثيقها بالطرق العلمية الحديثة.",
    location: "إدارة الأدلة الجنائية — طرابلس",
  },
  {
    icon: Calculator,
    title: "الخبرة الحسابية",
    desc: "تدقيق ومراجعة السجلات المالية والمحاسبية في القضايا التجارية والمصرفية والاختلاسات وغسيل الأموال، وإعداد التقارير الحسابية المتخصصة وتقدير الأضرار المالية بدقةٍ تامةٍ بما يخدم العدالة.",
    location: "قسم الخبرة المالية والمحاسبية — طرابلس",
  },
  {
    icon: Wrench,
    title: "الخبرة الهندسية",
    desc: "خبرات هندسية معمارية ومدنية وكهربائية وميكانيكية وزراعية، تشمل تقييم الأضرار في المباني والمنشآت، وفحص حوادث المرور والحرائق الكهربائية، وإعداد التقارير الفنية الهندسية للجهات القضائية.",
    location: "إدارة الخبرة الهندسية — طرابلس",
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
              <ShieldCheck className="h-4 w-4" /> دولة ليبيا — وزارة العدل
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
          <p className="mx-auto mt-5 max-w-3xl text-base leading-loose text-muted-foreground">
            يختص المركز بتقديم الخبرة العلمية والفنية والتقنية للمحاكم والنيابات والهيئات القضائية،
            وإجراء الدراسات التطبيقية المتعلقة بالجريمة والعقاب. نستهدف بناء جسور الثقة من خلال تعزيز
            ثقة المواطن بالقضاء عبر ثقة القضاء بمخرجاتنا.
          </p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-bold text-primary">بناء القدرات المهنية</span>
            <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-bold text-primary">بناء القدرات المؤسسية</span>
            <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-bold text-primary">بناء القدرات التنظيمية</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-[var(--gradient-gold)] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-muted-foreground">{`0${i + 1}`}</div>
                <h3 className="mt-0.5 text-lg font-bold text-foreground">{s.title}</h3>
                <Link
                  to="/services"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-gold"
                >
                  تفاصيل أكثر <ArrowLeft className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Partners */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="text-sm font-bold uppercase tracking-wider text-primary">روابط رسمية</div>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">الجهات الرسمية ذات العلاقة</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gold" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              name: "وزارة العدل — دولة ليبيا",
              desc: "الموقع الرسمي لوزارة العدل في دولة ليبيا.",
              url: "https://aladel.gov.ly",
            },
            {
              name: "مكتب النائب العام",
              desc: "الموقع الرسمي لمكتب النائب العام بدولة ليبيا.",
              url: "https://attorneygeneral.gov.ly",
            },
          ].map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-lg font-bold text-foreground">
                  {p.name}
                  <ExternalLink className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-2 text-xs font-semibold text-primary" dir="ltr">{p.url}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-card px-8 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-12">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <Building2 className="relative mx-auto h-12 w-12 text-primary" />
          <h2 className="relative mt-4 text-2xl font-extrabold text-primary sm:text-3xl">
            للتواصل الرسمي مع المركز
          </h2>
          <div className="relative mx-auto mt-3 h-1 w-20 rounded-full bg-gold" />
          <p className="relative mx-auto mt-4 max-w-2xl font-medium text-foreground">
            يمكن للجهات القضائية والرسمية التواصل مع المركز خلال أوقات العمل الرسمية.
          </p>
          <Link
            to="/contact"
            className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            تواصل معنا <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
