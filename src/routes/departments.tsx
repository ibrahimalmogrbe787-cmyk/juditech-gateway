import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Briefcase, Wallet, Microscope, Fingerprint, ChevronLeft } from "lucide-react";

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

const offices = [
  "مستشار رئيس المركز للشؤون الفنية",
  "مكتب المراجعة الداخلية",
  "مكتب الشؤون القانونية",
  "مكتب التفتيش والمتابعة",
  "مكتب التخطيط والمشروعات",
  "مكتب البحوث والدراسات",
  "مكتب مستشارين الطب الشرعي",
  "مكتب الترجمة (يترجم جميع القضايا ويصدق على الأوراق للسفارات)",
  "مكتب القضايا",
  "مكتب الخبرة القضائية للمناطق",
  "مكتب الطب الشرعي والتحاليل (الزاوية – بوسليم – تاجوراء)",
];

const departments = [
  {
    icon: Briefcase,
    title: "إدارة الشؤون الإدارية والمالية",
    sections: [
      "قسم الشؤون الإدارية والمحفوظات",
      "قسم الشؤون المالية",
      "قسم المخازن والخدمات",
      "قسم النقل والحركة",
      "قسم العلاقات والتعاون",
    ],
  },
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
];

function DepartmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="الهيكل التنظيمي"
        title="الإدارات والمكاتب"
        subtitle="منظومةٌ متكاملةٌ من الإدارات والمكاتب المتخصصة لتغطية كافة مجالات الخبرة القضائية والبحوث."
      />

      {/* Main offices */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-sm font-bold uppercase tracking-wider text-primary">المكاتب الرئيسية</div>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">المكاتب التابعة لرئاسة المركز</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <div
              key={o}
              className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition-colors hover:border-primary/40 hover:bg-primary-soft/40"
            >
              <ChevronLeft className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <span className="text-sm font-medium leading-relaxed text-foreground">{o}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="bg-primary-soft/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">الإدارات</div>
            <h2 className="mt-2 text-3xl font-bold text-foreground">الإدارات الرئيسية وأقسامها</h2>
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
