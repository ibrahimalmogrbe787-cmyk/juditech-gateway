import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  Stethoscope,
  Languages,
  FlaskConical,
  TestTubes,
  ArrowLeft,
  ShieldCheck,
  Target,
  Eye,
  Award,
  Gauge,
  Clock,
  GraduationCap,
  Lock,
  Building2,
  MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-forensic.jpg";
import logo from "@/assets/logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الرئيسية | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "جهة علمية متخصصة تقدّم الخبرة الجنائية والطب الشرعي والترجمة المعتمدة والتحاليل الكيميائية دعماً لمنظومة العدالة في ليبيا." },
      { property: "og:title", content: "مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "الخبرة الجنائية، الطب الشرعي، الترجمة المعتمدة، والتحاليل الكيميائية بمعايير دولية." },
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
    desc: "ترجمة جميع القضايا والمستندات الرسمية، بالإضافة إلى التصديق على الوثائق الموجهة للسفارات والجهات الخارجية.",
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

const whyUs = [
  { icon: Gauge, title: "دقةٌ علمية", desc: "منهجية صارمة ومعايير دولية في كل تقريرٍ يصدره المركز." },
  { icon: Clock, title: "سرعةٌ في الإنجاز", desc: "إجراءات منظمة تضمن تسليم التقارير في أقصر مدةٍ ممكنة." },
  { icon: GraduationCap, title: "خبرةٌ عالية", desc: "كوادر متخصصة بخبراتٍ تراكمية في الطب الشرعي والتحاليل والقانون." },
  { icon: Lock, title: "سريةٌ تامة", desc: "حمايةٌ صارمةٌ للبيانات والوثائق وفق أعلى معايير الأمن المعلوماتي." },
];

const news = [
  { date: "15 / 04 / 2026", title: "افتتاح مكتب الطب الشرعي الجديد بمنطقة تاجوراء", excerpt: "افتتح المركز فرعاً جديداً للطب الشرعي ضمن خطة التوسع الإقليمي." },
  { date: "02 / 04 / 2026", title: "ورشة عمل حول تطوير أساليب الخبرة الجنائية", excerpt: "نظم المركز ورشة تدريبية متخصصة بمشاركة خبراء دوليين." },
  { date: "20 / 03 / 2026", title: "توقيع مذكرة تعاون مع الجامعات الليبية", excerpt: "اتفاقية تعاون لتبادل الخبرات والأبحاث في مجال الخبرة القضائية." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-95" />
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
              صرحٌ علميٌ متخصصٌ يقدّم الخبرة القضائية والطب الشرعي والترجمة المعتمدة والتحاليل الكيميائية،
              بكفاءاتٍ وطنيةٍ ومعاييرَ دوليةٍ تخدم العدالة والمجتمع.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                خدماتنا الرئيسية <ArrowLeft className="h-4 w-4" />
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

        {/* Gold accent strip */}
        <div className="relative h-1 w-full bg-[var(--gradient-gold)]" />
      </section>

      {/* Core Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="text-sm font-bold uppercase tracking-wider text-primary">الخدمات الرئيسية</div>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">ماذا يقدّم المركز؟</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gold" />
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            خدماتٌ علميةٌ وفنيةٌ متكاملةٌ تخدم الجهات القضائية والرسمية والمجتمع، وفق معاييرَ دقيقةٍ وحياديةٍ تامة.
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

      {/* Why Us */}
      <section className="bg-primary-soft/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">لماذا نحن؟</div>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">معاييرٌ تصنع الفارق</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gold" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="group rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <w.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:grid-cols-4">
            {[
              { n: "+25", l: "سنة خبرة" },
              { n: "+150", l: "خبير متخصص" },
              { n: "+10K", l: "تقرير سنوياً" },
              { n: "100%", l: "سريّة وحياديّة" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          <Pillar icon={Target} title="رسالتنا">
            تقديم خدمات الخبرة القضائية والتحاليل العلمية بأعلى معايير الجودة والمصداقية، دعماً لمنظومة العدالة.
          </Pillar>
          <Pillar icon={Eye} title="رؤيتنا">
            أن نكون المرجع الأول في مجال الخبرة القضائية والبحوث الجنائية على المستوى الإقليمي.
          </Pillar>
          <Pillar icon={Award} title="قيمنا">
            النزاهة، الحيادية، الدقة العلمية، والسريّة التامة في جميع أعمالنا.
          </Pillar>
        </div>
      </section>

      {/* News */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-primary">آخر الأخبار</div>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">أخبار وتحديثات المركز</h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-gold" />
            </div>
            <Link to="/news" className="hidden items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 sm:inline-flex">
              كل الأخبار <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {news.map((n) => (
              <article key={n.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="h-2 bg-[var(--gradient-gold)]" />
                <div className="p-6">
                  <div className="text-xs font-medium text-muted-foreground">{n.date}</div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-foreground group-hover:text-primary">{n.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
                </div>
              </article>
            ))}
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
            هل تحتاج إلى خدمات خبرةٍ قضائيةٍ متخصصة؟
          </h2>
          <p className="relative mx-auto mt-3 max-w-2xl text-primary-foreground/85">
            فريقنا من الخبراء جاهز لتقديم الاستشارات والتقارير الفنية في مختلف المجالات.
          </p>
          <Link
            to="/contact"
            className="relative mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3 text-sm font-bold text-gold-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            تواصل معنا الآن <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Pillar({ icon: Icon, title, children }: { icon: typeof Target; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
