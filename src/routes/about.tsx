import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Target, Eye, Award, Gavel, ShieldCheck } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "مركز الخبرة القضائية والبحوث - جهة عامة تتبع الدولة الليبية، مختصّة حصرياً بأعمال الخبرة القضائية والطب الشرعي." },
      { property: "og:title", content: "من نحن - مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "الجهة الرسمية الوحيدة المعتمدة لدى المحاكم والنيابة العامة في ليبيا." },
    ],
  }),
  component: AboutPage,
});

const values = [
  "الشفافية",
  "المساءلة",
  "النزاهة",
  "الاستقلالية",
  "الحياد",
  "السرية",
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title="جهةٌ رسميةٌ تتبع الدولة الليبية"
        subtitle="مركز الخبرة القضائية والبحوث — المرجع الرسمي في مجالات الخبرة القضائية والطب الشرعي والتحاليل."
        image={aboutHero}
      />

      {/* Definition */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">تعريف بالمركز</h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gold" />
          <div className="mt-6 space-y-5 text-base leading-loose text-muted-foreground">
            <p>
              مركز الخبرة القضائية والبحوث هو جهةٌ عامةٌ تتبع الدولة الليبية، ومختصٌّ حصرياً بتقديم
              أعمال الخبرة القضائية والطب الشرعي وفقاً للتشريعات والقوانين النافذة في ليبيا.
            </p>
            <p>
              يُعدّ المركز الجهة الفنية المعتمدة لدى المحاكم والنيابة العامة، ويتولّى تنفيذ المأموريات
              القضائية وإعداد التقارير الفنية في مختلف التخصصات، بما يضمن تحقيق العدالة ودعم القضاء
              بالأدلة العلمية الدقيقة.
            </p>
            <p>
              يمارس المركز اختصاصاته في نطاق الدولة الليبية، ويُعتبر المرجع الرسمي في مجالات الخبرة
              القضائية والطب الشرعي والتحاليل.
            </p>
          </div>
        </div>
      </section>

      {/* Exclusive Authority Statement */}
      <section className="bg-primary-soft/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-12">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex flex-col items-center gap-5 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <Gavel className="h-8 w-8" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
                <ShieldCheck className="h-3.5 w-3.5" /> الاختصاص الحصري
              </div>
              <p className="max-w-3xl text-lg font-semibold leading-relaxed text-primary sm:text-xl">
                يُعدّ مركز الخبرة القضائية والبحوث الجهة الرسمية المختصة حصريًا في ليبيا بتنفيذ
                أعمال الخبرة القضائية والطب الشرعي، والمخوّل قانونًا بتقديم هذه الخدمات للجهات
                القضائية والنيابة العامة وفقًا للتشريعات النافذة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-primary-soft/50 p-7">
            <Target className="h-9 w-9 text-primary" />
            <h3 className="mt-4 text-xl font-bold text-foreground">رسالتنا</h3>
            <div className="mt-2 h-1 w-12 rounded-full bg-gold" />
            <p className="mt-4 text-sm leading-loose text-muted-foreground">
              تقديم خبرة قضائية متخصصة وموثوقة في مختلف المجالات من خلال كوادر مؤهلة ودراسات تطبيقية.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <Eye className="h-9 w-9 text-gold" />
            <h3 className="mt-4 text-xl font-bold text-foreground">رؤيتنا</h3>
            <div className="mt-2 h-1 w-12 rounded-full bg-gold" />
            <p className="mt-4 text-sm leading-loose text-muted-foreground">
              أن يكون المركز المرجعية الوطنية الأولى في مجال الخبرة القضائية والبحوث، ويُسهم في
              تعزيز ثقة المواطن في القضاء عبر ثقة القضاء في تقارير الخبراء.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary-soft/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Award className="mx-auto h-10 w-10 text-primary" />
            <div className="mt-3 text-sm font-bold uppercase tracking-wider text-primary">قيمنا</div>
            <h2 className="mt-2 text-3xl font-bold text-foreground">المبادئ التي يقوم عليها عمل المركز</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gold" />
            <p className="mx-auto mt-5 max-w-3xl text-base leading-loose text-muted-foreground">
              الشفافية والمساءلة والنزاهة والاستقلالية والحياد والسرية، بما يعزز الثقة في منظومة العدالة.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <li
                key={v}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)]"
              >
                <CheckCircle2 className="h-7 w-7 text-gold" />
                <span className="text-sm font-bold leading-relaxed text-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
