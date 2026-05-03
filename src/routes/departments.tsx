import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Wallet, Microscope, Fingerprint, Network, BookOpen, ChevronLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "الإدارات والمكاتب | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "الهيكل التنظيمي لإدارات ومكاتب مركز الخبرة القضائية والبحوث وأقسامها المتخصصة." },
      { property: "og:title", content: "الإدارات والمكاتب - مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "تعرف على إدارات ومكاتب وأقسام المركز." },
    ],
  }),
  component: DepartmentsPage,
});

const departments = [
  {
    icon: Wallet,
    title: "إدارة الخبرة الهندسية والحسابية",
    sections: [
      "قسم الشؤون الإدارية والمحفوظات",
      "قسم الخبرة الهندسية",
      "قسم الخبرة الزراعية",
      "قسم الخبرة الحسابية",
      "قسم الخبرة الكهربائية",
    ],
  },
  {
    icon: Microscope,
    title: "إدارة الطب الشرعي والتحاليل",
    sections: [
      "قسم الشؤون الإدارية والمحفوظات",
      "قسم الطب الشرعي",
      "قسم علم الأمراض",
      "قسم علوم الحياة",
      "قسم التحاليل الكيميائية والسموم",
      "وحدة التلوث الغذائي",
    ],
  },
  {
    icon: Fingerprint,
    title: "إدارة الخبرة الجنائية",
    sections: [
      "قسم الشؤون الإدارية والمحفوظات",
      "قسم أبحاث التزييف والتزوير",
      "قسم فحص الأسلحة والذخائر والآلات",
      "قسم فحص آثار الحرائق والانفجارات",
    ],
  },
  {
    icon: Network,
    title: "إدارة الفروع",
    sections: [
      "مكاتب الخبرة القضائية في المناطق",
      "مكاتب الطب الشرعي والتحاليل (الزاوية – بوسليم – تاجوراء)",
      "الإشراف على جميع الفروع التابعة للمركز",
      "متابعة أداء الفروع وتطوير خدماتها",
    ],
  },
];

function DepartmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="الهيكل التنظيمي"
        title="الإدارات والمكاتب"
        subtitle="منظومةٌ متكاملةٌ من الإدارات والمكاتب المتخصصة لتغطية كافة مجالات الخبرة القضائية والبحوث."
      />

      {/* Featured: Research & Studies Office */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="relative overflow-hidden rounded-3xl border border-gold/40 bg-[var(--gradient-hero)] p-8 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-12">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr]">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-lg">
              <BookOpen className="h-10 w-10" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold">
                <Sparkles className="h-3.5 w-3.5" /> قسم مميّز
              </div>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">مكتب البحوث والدراسات</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
                يُعنى المكتب بإجراء الدراسات والبحوث العلمية في المجالات القضائية والفنية،
                وتطوير أساليب العمل ورفع كفاءة الأداء داخل المركز، بما يضمن مواكبة أحدث
                المستجدات العلمية والمنهجيات الدولية في مجال الخبرة القضائية.
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  "إعداد البحوث والدراسات المتخصصة",
                  "تطوير منهجيات العمل الفني",
                  "رفع كفاءة الكوادر العلمية",
                  "التعاون مع الجهات الأكاديمية",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <ChevronLeft className="h-4 w-4 shrink-0 text-gold" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      {/* Departments */}
      <section className="bg-primary-soft/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">الإدارات الفنية</div>
            <h2 className="mt-2 text-3xl font-bold text-foreground">الإدارات الفنية والأقسام الفنية</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {departments.map((d) => (
              <article
                key={d.title}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]"
              >
                <header className="flex items-center gap-4 border-b border-border bg-primary p-5 text-primary-foreground">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold sm:text-xl">{d.title}</h3>
                </header>
                <ul className="divide-y divide-border">
                  {d.sections.map((s) => (
                    <li key={s} className="flex items-center gap-3 px-5 py-3 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
