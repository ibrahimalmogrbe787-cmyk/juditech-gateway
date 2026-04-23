import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, Tag } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "الأخبار | مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "آخر أخبار وتحديثات وفعاليات مركز الخبرة القضائية والبحوث." },
      { property: "og:title", content: "أخبار مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "تابع أحدث أخبار المركز وفعالياته." },
    ],
  }),
  component: NewsPage,
});

const news = [
  { date: "15 / 04 / 2026", tag: "افتتاحات", title: "افتتاح مكتب الطب الشرعي الجديد بمنطقة تاجوراء", excerpt: "افتتح المركز فرعاً جديداً للطب الشرعي ضمن خطة التوسع الإقليمي لتقديم خدماته بكفاءة أعلى وقربٍ أكبر من المواطنين." },
  { date: "02 / 04 / 2026", tag: "فعاليات", title: "ورشة عمل حول تطوير أساليب الخبرة الجنائية", excerpt: "نظم المركز ورشة تدريبية متخصصة بمشاركة خبراء دوليين لتبادل الخبرات في أحدث أساليب فحص الأدلة الجنائية." },
  { date: "20 / 03 / 2026", tag: "تعاون", title: "توقيع مذكرة تعاون مع الجامعات الليبية", excerpt: "وقّع المركز اتفاقية تعاون مع عدد من الجامعات لتبادل الخبرات وإجراء البحوث المشتركة في مجال الخبرة القضائية." },
  { date: "10 / 03 / 2026", tag: "تجهيزات", title: "تحديث مختبرات التحاليل الكيميائية بأحدث الأجهزة", excerpt: "استكمل المركز تحديث مختبراته بأجهزةٍ متطورةٍ لرفع كفاءة التحاليل المخبرية ودقتها." },
  { date: "25 / 02 / 2026", tag: "تدريب", title: "دورة تدريبية في فحص آثار الحرائق والانفجارات", excerpt: "نظم قسم الخبرة الجنائية دورةً متخصصةً للخبراء في تقنيات فحص آثار الحرائق والانفجارات." },
  { date: "12 / 02 / 2026", tag: "إعلانات", title: "إطلاق الموقع الإلكتروني الجديد للمركز", excerpt: "أطلق المركز موقعه الإلكتروني الجديد بحلةٍ عصريةٍ تتيح للمستفيدين الوصول السهل لخدماته ومعلوماته." },
];

function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="الأخبار"
        title="آخر أخبار وفعاليات المركز"
        subtitle="تابع أحدث أنشطة المركز وفعالياته وإنجازاته على مستوى الخبرة القضائية والبحوث العلمية."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <article
              key={n.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex h-40 items-center justify-center bg-[var(--gradient-hero)] p-6">
                <div className="rounded-full bg-gold/20 px-4 py-1 text-xs font-bold text-gold">{n.tag}</div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {n.date}</span>
                  <span className="inline-flex items-center gap-1"><Tag className="h-3.5 w-3.5" /> {n.tag}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-foreground group-hover:text-primary">
                  {n.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
                <button className="mt-5 self-start text-sm font-semibold text-primary hover:text-primary/80">
                  قراءة المزيد ←
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
