import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Target, Eye, Building } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "تعرف على مركز الخبرة القضائية والبحوث وأهدافه وهيكله التنظيمي ودوره في خدمة العدالة." },
      { property: "og:title", content: "من نحن - مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "تعرف على مركز الخبرة القضائية والبحوث وأهدافه وهيكله التنظيمي." },
    ],
  }),
  component: AboutPage,
});

const goals = [
  "تقديم تقارير الخبرة القضائية بأعلى معايير الدقة والحيادية.",
  "إجراء التحاليل العلمية والمختبرية المتخصصة للجهات القضائية والرسمية.",
  "تنفيذ أعمال الترجمة المعتمدة وتصديق الوثائق للسفارات والجهات الرسمية.",
  "إعداد البحوث والدراسات في مجالات الطب الشرعي والعلوم الجنائية.",
  "تطوير الكوادر الوطنية في تخصصات الخبرة القضائية المختلفة.",
  "التعاون مع الجهات الأكاديمية والبحثية محلياً ودولياً.",
];

const orgUnits = [
  { title: "رئيس المركز", level: 1 },
  { title: "مستشار رئيس المركز للشؤون الفنية", level: 2 },
  { title: "إدارة الشؤون الإدارية والمالية", level: 2 },
  { title: "إدارة الخبرة الهندسية والحسابية", level: 2 },
  { title: "إدارة الطب الشرعي والتحاليل", level: 2 },
  { title: "إدارة الخبرة الجنائية", level: 2 },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title="مركزٌ علميٌ متخصصٌ في خدمة العدالة"
        subtitle="نقدم تقارير الخبرة القضائية والتحاليل العلمية بحياديةٍ ودقةٍ علمية، بفضل كوادر وطنية مؤهلة وتجهيزات حديثة."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">تعريف بالمركز</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                مركز الخبرة القضائية والبحوث هو جهة علمية متخصصة تعمل تحت مظلة الجهات السيادية المختصة،
                ويُعنى بتقديم تقارير الخبرة القضائية والتحاليل العلمية في القضايا المنظورة أمام المحاكم
                والجهات التحقيقية والرقابية.
              </p>
              <p>
                يضم المركز نخبةً من الخبراء والاستشاريين في مختلف التخصصات الفنية والطبية والهندسية والحسابية
                والكيميائية والجنائية، ويعتمد في أعماله على أحدث التقنيات والمختبرات المجهزة بأرقى المعدات
                المعتمدة دولياً.
              </p>
              <p>
                ويسعى المركز إلى تطوير منظومة الخبرة القضائية في البلاد، من خلال إعداد البحوث والدراسات،
                وتأهيل الكوادر، والتعاون مع الجهات العلمية والأكاديمية على المستويين المحلي والدولي.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-primary-soft/50 p-6">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="mt-3 text-lg font-bold text-foreground">رسالتنا</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                تقديم خدمات الخبرة القضائية والتحاليل العلمية بأعلى معايير الجودة والمصداقية،
                دعماً للعدالة وخدمةً للمجتمع.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <Eye className="h-8 w-8 text-gold" />
              <h3 className="mt-3 text-lg font-bold text-foreground">رؤيتنا</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                أن نكون المرجع الأول والأكثر موثوقية في مجال الخبرة القضائية والبحوث الجنائية إقليمياً.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-soft/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">أهدافنا</div>
            <h2 className="mt-2 text-3xl font-bold text-foreground">الأهداف الإستراتيجية للمركز</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {goals.map((g) => (
              <li key={g} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm leading-relaxed text-foreground">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="text-sm font-bold uppercase tracking-wider text-primary">الهيكل التنظيمي</div>
          <h2 className="mt-2 text-3xl font-bold text-foreground">نظرة عامة على هيكل المركز</h2>
          <p className="mt-3 text-muted-foreground">يتكون المركز من رئاسة وأربع إدارات رئيسية ومكاتب متخصصة.</p>
        </div>

        <div className="space-y-3">
          {orgUnits.map((u) => (
            <div
              key={u.title}
              className={`flex items-center gap-3 rounded-xl border border-border p-5 shadow-[var(--shadow-card)] ${
                u.level === 1 ? "bg-primary text-primary-foreground" : "mr-0 bg-card sm:mr-12"
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${u.level === 1 ? "bg-gold text-gold-foreground" : "bg-primary-soft text-primary"}`}>
                <Building className="h-5 w-5" />
              </div>
              <div className="font-bold">{u.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
