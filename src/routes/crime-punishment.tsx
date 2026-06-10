import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Scale, BookOpen, Gavel, FileText, Shield } from "lucide-react";

export const Route = createFileRoute("/crime-punishment")({
  head: () => ({
    meta: [
      { title: "الجريمة والعقاب | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "الجريمة والعقاب - دراسات وأبحاث في مجال الجريمة والعقاب والسياسة الجنائية." },
      { property: "og:title", content: "الجريمة والعقاب - مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "دراسات وأبحاث في مجال الجريمة والعقاب والسياسة الجنائية." },
    ],
  }),
  component: CrimePunishmentPage,
});

const sections = [
  {
    icon: BookOpen,
    title: "الدراسات والأبحاث",
    description:
      "إجراء الدراسات والبحوث العلمية المتخصصة في مجال الجريمة والعقاب، وتحليل الظواهر الإجرامية وتقديم التوصيات الفنية للجهات المختصة.",
  },
  {
    icon: Scale,
    title: "السياسة الجنائية",
    description:
      "وضع السياسات الجنائية المبنية على أسس علمية، وتقييم فعالية التشريعات الجنائية واقتراح التعديلات اللازمة لمواجهة الجريمة.",
  },
  {
    icon: Gavel,
    title: "الخبرة القضائية الجنائية",
    description:
      "تقديم الخبرات الفنية المتخصصة في القضايا الجنائية، بما في ذلك تحليل الأدلة الجنائية وإعداد التقارير العلمية الدقيقة.",
  },
  {
    icon: FileText,
    title: "التقارير والنشرات",
    description:
      "إعداد التقارير الدورية والنشرات العلمية حول مستوى الجريمة واتجاهاتها، ونشر الوعي المجتمعي بأخطار الجريمة وسبب مواجهتها.",
  },
  {
    icon: Shield,
    title: "الوقاية من الجريمة",
    description:
      "وضع برامج وخطط الوقاية من الجريمة على المستوى الوطني، والتعاون مع الجهات المعنية لتنفيذ البرامج الوقائية والتثقيفية.",
  },
];

function CrimePunishmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="الجريمة والعقاب"
        title="دراساتٌ وأبحاثٌ في ميادين الجريمة والعقاب"
        subtitle="نحن نُعنى بدراسة الظواهر الإجرامية وتحليلها علميًا، ونُقدّم الخبرات الفنية لدعم منظومة العدالة الجنائية."
        image=""
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            رسالتنا في مجال الجريمة والعقاب
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gold" />
          <p className="mt-6 text-base leading-loose text-muted-foreground">
            يُولي مركز الخبرة القضائية والبحوث اهتمامًا بالغًا بدراسة الجريمة بأبعادها المختلفة — الاجتماعية والنفسية والاقتصادية والقانونية —
            وذلك بهدف تطوير السياسات الجنائية الفعّالة وبناء مجتمعٍ آمنٍ يستند إلى العلم والعدالة.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <section.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{section.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">أهدافنا</h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gold" />
          <ul className="mt-6 space-y-4">
            {[
              "دراسة أسباب الجريمة ودوافعها وتحليل الظواهر الإجرامية على المستوى الوطني.",
              "تطوير السياسات الجنائية المبنية على أسس علمية وبحثية دقيقة.",
              "تقديم الخبرات الفنية والاستشارات للجهات القضائية والأمنية.",
              "نشر الوعي المجتمعي بمخاطر الجريمة وسبل الوقاية منها.",
              "التوعية بحقوق الضحايا وضمانات المتهمين في إطار سيادة القانون.",
              "التعاون مع المؤسسات الأكاديمية والبحثية محليًا ودوليًا.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:bg-card"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-base leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
