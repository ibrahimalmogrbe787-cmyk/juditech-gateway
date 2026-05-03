import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Scale, Languages, FlaskConical, FileText, Microscope, Fingerprint, Calculator, Wrench } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "خدمات الخبرة القضائية، الترجمة المعتمدة، التحاليل المخبرية، والتقارير الفنية المتخصصة." },
      { property: "og:title", content: "خدمات مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "خدمات الخبرة القضائية، الترجمة، التحاليل والتقارير." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Scale, title: "الخبرة القضائية", desc: "إعداد تقارير الخبرة القضائية المعتمدة في القضايا المدنية والجنائية والتجارية والإدارية أمام المحاكم والجهات التحقيقية." },
  { icon: Languages, title: "الترجمة المعتمدة", desc: "ترجمة الوثائق القضائية والرسمية وتصديقها للسفارات والجهات الحكومية بدقةٍ واحترافيةٍ عاليةٍ." },
  { icon: FlaskConical, title: "التحاليل المخبرية", desc: "إجراء التحاليل الكيميائية والسمية وفحص العينات بأحدث التقنيات والمعدات المخبرية المعتمدة دولياً." },
  { icon: FileText, title: "التقارير الفنية", desc: "إعداد التقارير الفنية المتخصصة للجهات القضائية والرسمية في مختلف المجالات العلمية." },
  { icon: Microscope, title: "الطب الشرعي", desc: "خدمات الطب الشرعي وعلم الأمراض وعلوم الحياة من خلال فروعنا في الزاوية وبوسليم وتاجوراء." },
  { icon: Fingerprint, title: "الخبرة الجنائية", desc: "أبحاث التزييف والتزوير، فحص الأسلحة والذخائر، وفحص آثار الحرائق والانفجارات." },
  { icon: Calculator, title: "الخبرة الحسابية والمالية", desc: "تدقيق ومراجعة السجلات المالية وإعداد التقارير الحسابية في القضايا المالية والتجارية." },
  { icon: Wrench, title: "الخبرة الهندسية والزراعية", desc: "خبرات هندسية وكهربائية وزراعية متخصصة في تقييم الأضرار وإعداد التقارير الفنية." },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="خدماتنا"
        title="خدماتٌ متكاملةٌ بمعاييرَ علمية"
        subtitle="يقدم المركز باقةً شاملةً من خدمات الخبرة القضائية والتحاليل والتقارير، بكوادرَ مؤهلةٍ ومختبراتٍ حديثة."
        image={servicesHero}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-[var(--gradient-gold)] transition-transform group-hover:scale-x-100" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-primary-soft/40 p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">آلية تقديم الخدمة</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            نتبع منهجيةً واضحةً ومنظمة في تقديم الخدمات لضمان الدقة والموثوقية في كل تقرير يصدر عن المركز.
          </p>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "استلام الطلب", d: "استلام طلب الخبرة من الجهة القضائية المختصة." },
              { n: "02", t: "التكليف", d: "تكليف الخبير المختص حسب نوع القضية." },
              { n: "03", t: "الفحص والتحليل", d: "إجراء الفحوصات والتحاليل اللازمة." },
              { n: "04", t: "إصدار التقرير", d: "تسليم التقرير النهائي المعتمد." },
            ].map((step) => (
              <li key={step.n} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <div className="text-3xl font-bold text-gold">{step.n}</div>
                <div className="mt-2 text-base font-bold text-foreground">{step.t}</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
