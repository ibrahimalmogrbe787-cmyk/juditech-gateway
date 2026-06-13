import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, FileText, Newspaper, CalendarDays } from "lucide-react";
import crimeHero from "@/assets/crime-hero.jpg";

export const Route = createFileRoute("/crime-punishment")({
  head: () => ({
    meta: [
      { title: "الجريمة والعقاب | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "أبحاث ودراسات الجريمة والعقاب — دليل تنظيم سياسات وإجراءات إعداد البحوث والدراسات التطبيقية، وأخبار البحوث المنشورة." },
      { property: "og:title", content: "أبحاث ودراسات الجريمة والعقاب - مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "أبحاث ودراسات الجريمة والعقاب وأخبار البحوث المنشورة." },
      { property: "og:image", content: crimeHero },
      { name: "twitter:image", content: crimeHero },
    ],
  }),
  component: CrimePunishmentPage,
});

const sections = [
  {
    icon: BookOpen,
    title: "دليل تنظيم سياسات وإجراءات إعداد البحوث والدراسات التطبيقية",
    description:
      "يُمثّل هذا الدليل الإطارَ المرجعيَّ المعتمد لتنظيم العمل البحثي داخل المركز، ويشتمل على السياسات والإجراءات التي تحكم مراحل إعداد البحوث والدراسات التطبيقية، بدءًا من اقتراح الموضوع وتحديد الأهداف، مرورًا بمنهجية البحث وأدوات جمع البيانات وتحليلها، ووصولًا إلى التحكيم العلمي والاعتماد والنشر. كما يُحدّد الدليل أدوارَ الباحثين واللجان العلمية، ومعاييرَ الجودة والنزاهة الأكاديمية، وآلياتِ التوثيق وحفظ حقوق الملكية الفكرية، بما يضمن تكاملَ الجهود البحثية وانسجامَها مع أهداف المركز ورسالته.",
  },
  {
    icon: FileText,
    title: "عناوين الأبحاث والدراسات التطبيقية المعتمدة",
    description:
      "تُعرض هنا قائمة الأبحاث والدراسات التطبيقية المعتمدة من اللجان العلمية بالمركز في مجال الجريمة والعقاب، والتي تُمثّل ثمرةَ التعاون بين الباحثين والمؤسسات الأكاديمية والبحثية الليبية.",
  },
];

const news = [
  {
    date: "2025",
    title: "بحث منشور — اتجاهات الجريمة في المجتمع الليبي",
    excerpt:
      "دراسة تحليلية لمعدلات الجريمة وأنماطها في السنوات الأخيرة، مع توصيات للسياسات الجنائية والوقائية.",
  },
  {
    date: "2025",
    title: "ورقة علمية — السياسة الجنائية المقارنة",
    excerpt:
      "قراءة مقارنة في التشريعات الجنائية الحديثة وأثرها على فاعلية منظومة العدالة.",
  },
  {
    date: "2024",
    title: "تقرير — الوقاية من الجريمة لدى الأحداث",
    excerpt:
      "تقرير ميداني يستعرض البرامج الوقائية الموجَّهة لفئة الأحداث وسبل تطويرها بالتعاون مع الجامعات الليبية.",
  },
];

function CrimePunishmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="الجريمة والعقاب"
        title="أبحاث ودراسات الجريمة والعقاب"
        subtitle="نحن نُعنى بدراسة الظواهر الإجرامية وتحليلها علميًا، ونُقدّم الخبرات الفنية لدعم منظومة العدالة الجنائية بتنسيقٍ مع المجتمع الأكاديمي الليبي (الجامعات، المعاهد، المراكز البحثية)."
        image={crimeHero}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            رسالتنا في مجال الجريمة والعقاب
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gold" />
          <p className="mt-6 text-base leading-loose text-muted-foreground">
            يُولي مركز الخبرة القضائية والبحوث اهتمامًا بالغًا بدراسة الجريمة بأبعادها المختلفة — الاجتماعية والنفسية والاقتصادية والقانونية —
            وذلك بهدف تطوير السياسات الجنائية الفعّالة وبناء مجتمعٍ آمنٍ يستند إلى العلم والعدالة، بالشراكة مع المجتمع الأكاديمي الليبي.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <section.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{section.title}</h3>
                <p className="text-sm leading-loose text-muted-foreground">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <Newspaper className="h-6 w-6 text-gold" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">الأخبار والبحوث المنشورة</h2>
          </div>
          <div className="mt-3 h-1 w-20 rounded-full bg-gold" />
          <p className="mt-4 text-sm text-muted-foreground">
            تُنشر هنا أحدث البحوث والدراسات والأخبار المتعلقة بمجال الجريمة والعقاب.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold ring-1 ring-gold/30">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4 transition-colors hover:bg-card"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-base leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
