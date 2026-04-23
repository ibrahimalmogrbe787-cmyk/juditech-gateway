import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, Microscope, Languages, FileSearch, ArrowLeft, Building2, Target, Eye, Users, Award, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الرئيسية | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "المركز الرائد في تقديم خدمات الخبرة القضائية والتحاليل العلمية والترجمة المعتمدة دعماً للعدالة." },
      { property: "og:title", content: "مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "جهة علمية متخصصة في الخبرة القضائية والتحاليل والترجمة." },
    ],
  }),
  component: HomePage,
});

const quickLinks = [
  { icon: Scale, title: "الخبرة القضائية", desc: "تقارير معتمدة في القضايا والمنازعات", to: "/services" as const },
  { icon: Microscope, title: "الطب الشرعي والتحاليل", desc: "فحوصات ومختبرات بأعلى المعايير", to: "/departments" as const },
  { icon: Languages, title: "الترجمة المعتمدة", desc: "ترجمة وتصديق وثائق للسفارات", to: "/services" as const },
  { icon: FileSearch, title: "البحوث والدراسات", desc: "أبحاث علمية متخصصة", to: "/departments" as const },
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
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-sm font-medium text-gold">
              <ShieldCheck className="h-4 w-4" /> جهة علمية متخصصة معتمدة
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              مركز الخبرة القضائية والبحوث
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              صرحٌ علميٌ متخصصٌ يقدم خدمات الخبرة القضائية والتحاليل العلمية والترجمة المعتمدة،
              بكفاءاتٍ وطنيةٍ ومعاييرَ دوليةٍ تخدم العدالة والمجتمع.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                خدماتنا <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
              >
                تعرف على المركز
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-primary">نبذة عن المركز</div>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              مرجعيةٌ علميةٌ في الخبرة القضائية
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              يُعدّ مركز الخبرة القضائية والبحوث جهةً علميةً متخصصةً تعمل على تقديم تقارير الخبرة القضائية
              والتحاليل العلمية بدقةٍ وحياديةٍ، مستعيناً بنخبةٍ من الخبراء والمختصين في مختلف المجالات الفنية
              والطبية والهندسية والمالية، لخدمة الجهات القضائية والرسمية والمجتمع.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "+25", l: "سنة خبرة" },
                { n: "+150", l: "خبير متخصص" },
                { n: "+10K", l: "تقرير سنوياً" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-4 text-center shadow-[var(--shadow-card)]">
                  <div className="text-2xl font-bold text-primary sm:text-3xl">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card icon={Target} title="رسالتنا">
              تقديم خدمات الخبرة القضائية والتحاليل العلمية بأعلى معايير الجودة والمصداقية، دعماً لمنظومة العدالة.
            </Card>
            <Card icon={Eye} title="رؤيتنا">
              أن نكون المرجع الأول في مجال الخبرة القضائية والبحوث الجنائية على المستوى الإقليمي.
            </Card>
            <Card icon={Award} title="قيمنا">
              النزاهة، الحيادية، الدقة العلمية، والسرية التامة في جميع أعمالنا.
            </Card>
            <Card icon={Users} title="كوادرنا">
              نخبة من الخبراء والباحثين المؤهلين في التخصصات القضائية والعلمية المختلفة.
            </Card>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-primary-soft/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">روابط سريعة</div>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">إداراتنا وخدماتنا</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((q) => (
              <Link
                key={q.title}
                to={q.to}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <q.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  المزيد <ArrowLeft className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-primary">آخر الأخبار</div>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">أخبار وتحديثات المركز</h2>
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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
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

function Card({ icon: Icon, title, children }: { icon: typeof Target; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
