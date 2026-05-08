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
            <p className="text-lg font-bold text-foreground">مركز الخبرة القضائية والبحوث</p>
            <p>
              يُعد مركز الخبرة القضائية والبحوث جهة فنية متخصصة ذات طابع علمي وقضائي، تُعنى بتقديم
              أعمال الخبرة القضائية وإجراء البحوث والدراسات المرتبطة بشؤون الجريمة والعقاب، وذلك
              دعمًا لمنظومة العدالة ومساندةً للجهات القضائية المختلفة في أداء مهامها على أسس علمية
              ومهنية دقيقة.
            </p>
            <p>
              يختص المركز بتقديم الخبرة الفنية للمحاكم والنيابات والجهات القضائية وغيرها من الجهات
              المختصة، في مجالات متعددة تشمل أعمال المختبرات الجنائية، وتحليل المواد والعينات،
              وأعمال الطب الشرعي، وأبحاث التزييف والتزوير، ومضاهاة الخطوط، وفحص الأسلحة والذخائر،
              ومعاينة أماكن الجرائم، وفحص آثار الحرائق والانفجارات، إضافة إلى الخبرات الهندسية
              والمساحية والزراعية والبيئية، والخبرة الحسابية والمحاسبية، وأعمال الميكانيكا
              والكهرباء، وغيرها من مجالات الخبرة الفنية المتخصصة.
            </p>
            <p>
              كما يضطلع المركز بأعمال الترجمة بمختلف أنواعها، والتصديق على صحة الترجمة القانونية،
              إلى جانب تقديم الخبرة الفنية المتعلقة بفحص المعدات والآلات، والمركبات، والأقفال
              والخزائن، وتحديد أساليب الاعتداء والأضرار الفنية الناجمة عنها، وذلك وفقًا لما يُطلب من
              الجهات المختصة وطبقًا للتشريعات النافذة.
            </p>
            <p>
              ويولي المركز اهتمامًا بالغًا بمجال الطب الشرعي والتحاليل المعملية، حيث يقوم بتشريح
              الجثث في القضايا الجنائية لتحديد أسباب الوفاة، والكشف على الإصابات الجنائية وإصابات
              العمل، وتحديد نوعها وأسبابها وآثارها، إضافة إلى إجراء الفحوصات البيولوجية والكيميائية
              والسمّية، وتحاليل البصمة الوراثية (DNA) لإثبات الهوية أو النسب، وتحليل الأدلة
              البيولوجية المرفوعة من مسارح الجرائم.
            </p>
            <p>
              وفي إطار دوره البحثي، يتولى المركز دراسة الظواهر الإجرامية، وتحليل أسبابها ودوافعها،
              ومتابعة تطورها وأساليبها، واقتراح الوسائل العلمية والعملية لمكافحتها والحد من
              انتشارها، كما يقوم بإجراء البحوث والدراسات القانونية والقضائية المتعلقة بالجريمة
              والعقاب، وجمع البيانات والإحصائيات ذات الصلة، ومتابعة الاتفاقيات الدولية والنشرات
              العلمية المتخصصة، والمشاركة في الندوات والمؤتمرات العلمية على المستويين المحلي
              والدولي.
            </p>
            <p>
              ويسهم المركز من خلال كوادره الفنية المؤهلة وخبراته المتراكمة في دعم العدالة، وتعزيز
              الثقة في التقارير الفنية، وتطوير العمل القضائي، وترسيخ مبادئ النزاهة والشفافية، بما
              يخدم الصالح العام ويحقق الأمن والعدالة في المجتمع.
            </p>
          </div>
        </div>
      </section>

      {/* Exclusive Authority Statement — Decree 54/2002 */}
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
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                قرار رقم 54 لسنة 2002 م بشأن إنشاء مركز الخبرة القضائية والبحوث
              </h3>
              <div className="h-1 w-20 rounded-full bg-gold" />
            </div>

            <div className="relative mt-10 space-y-6 text-right text-base leading-loose text-foreground">
              <p className="text-center text-lg font-bold">اللجنة الشعبية العامة</p>

              <div className="space-y-2">
                <p className="font-semibold">بعد الإطلاع</p>
                <ul className="list-disc space-y-2 pr-6 text-muted-foreground marker:text-gold">
                  <li>على القانون رقم 1 لسنة 1369 و.ر بشأن المؤتمرات الشعبية واللجان الشعبية ولائحته التنفيذية.</li>
                  <li>وعلى قانون النظام المالي للدولة.</li>
                  <li>وعلى قانون نظام القضاء الصادر بالقانون رقم 51 لسنة 1976 إفرنجي.</li>
                  <li>وعلى القانون رقم 55 لسنة 1976 إفرنجي، بإصدار قانون الخدمة المدنية.</li>
                  <li>وعلى القانون رقم 15 لسنة 1981 إفرنجي بشأن نظام المرتبات للعاملين الوطنيين بالجماهيرية العربية الليبية الاشتراكية.</li>
                  <li>وعلى القانون رقم 11 لسنة 1425 ميلادية بشأن إعادة تنظيم الرقابة الشعبية وتعديلاته.</li>
                  <li>وعلى قرار اللجنة الشعبية العامة رقم 70 لسنة 1426 ميلادية بشأن إعادة تنظيم المركز القومي للبحوث التشريعية والجنائية.</li>
                  <li>وعلى قرار اللجنة الشعبية العامة رقم 118 لسنة 1426 ميلادية بشأن إنشاء أكاديمية الشرطة للعلوم الأمنية.</li>
                  <li>وعلى قرار أمانة اللجنة الشعبية العامة رقم 65 لسنة 1429 ميلادي، بشأن تنظيم الجهاز الإداري للجنة الشعبية العامة للعدل والأمن العام.</li>
                  <li>وعلى قررته اللجنة الشعبية العامة في اجتماعها العادي الثاني لسنة 1369 و.ر.</li>
                  <li>وبناء على ما عرضه أمين اللجنة الشعبية العامة للعدل والأمن العام بكتابه رقم 242 المؤرخ في 13/2/1370 و.ر وكتابة رقم 929 المؤرخ في 30/6/1370 و.ر.</li>
                  <li>وعلى ما قررته أمانة اللجنة الشعبية العامة في اجتماعها العادي الخامس والعشرين لسنة 1370 و.ر.</li>
                </ul>
              </div>

              <p className="text-center text-xl font-bold text-primary">قررت</p>

              {[
                { n: "مادة 1", t: "ينشأ بموجب هذا القرار مركز يسمى مركز الخبرة القضائية والبحوث تكون له الشخصية الاعتبارية والذمة المالية المستقلة ويتبع اللجنة الشعبية العامة للعدل والأمن العام." },
                { n: "مادة 2", t: "يكون مقر المركز في مدينة طرابلس، ويجوز أن تنشأ له فروع بقرار من أمين اللجنة الشعبية العامة للعدل والأمن العام بناء على اقتراح مدير المركز." },
              ].map((m) => (
                <div key={m.n} className="rounded-xl border border-border bg-background/60 p-5">
                  <div className="mb-2 inline-block rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">{m.n}</div>
                  <p>{m.t}</p>
                </div>
              ))}

              <div className="rounded-xl border border-border bg-background/60 p-5">
                <div className="mb-2 inline-block rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">مادة 3</div>
                <p className="mb-3">يختص مركز الخبرة القضائية والبحوث بأعمال الخبرة القضائية، كما يختص بإجراء البحوث النظرية والتطبيقية والقيام بالدراسات المتعلقة بالجريمة والعقاب، وله على وجه الخصوص ما يلي:</p>
                <ul className="list-disc space-y-2 pr-6 text-muted-foreground marker:text-gold">
                  <li>تقديم الخبرة الفنية للمحاكم والنيابات والجهات القضائية الأخرى فيما يتعلق بأعمال المختبرات الجنائية وتحليل المواد والعينات وشؤون المحاسبة والهندسة والمساحة والزراعة والكهرباء وغير ذلك من مجالات الخبرة الأخرى.</li>
                  <li>القيام بالشؤون المتعلقة بإثبات التزييف والتزوير ومضاهاة الخطوط وأعمال الترجمة بمختلف أنواعها.</li>
                  <li>دراسة الظواهر الإجرامية وتحديد أسبابها ومتابعة تطورها وأساليبها واقتراح طرق مكافحتها والحد من انتشارها.</li>
                  <li>إجراء البحوث والدراسات القانونية والقضائية المتعلقة بشؤون الجريمة والعقاب.</li>
                  <li>شؤون الطب الشرعي.</li>
                  <li>جمع الاتفاقيات الدولية والنشرات العلمية ذات العلاقة ومتابعتها، والمشاركة في الندوات والمؤتمرات التي تعقد على المستويين الداخلي والخارجي.</li>
                </ul>
              </div>

              {[
                { n: "مادة 4", t: "للمركز الحق في الاستعانة بالخبرات العلمية والفنية النادرة وفقا للتشريعات النافذة لأداء بعض الأعمال ذات العلاقة بنشاطها." },
                { n: "مادة 5", t: "يكون للمركز مدير يصدر بتعيينه أو ندبه قرار من أمين اللجنة الشعبية العامة للعدل والأمن العام." },
              ].map((m) => (
                <div key={m.n} className="rounded-xl border border-border bg-background/60 p-5">
                  <div className="mb-2 inline-block rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">{m.n}</div>
                  <p>{m.t}</p>
                </div>
              ))}

              <div className="rounded-xl border border-border bg-background/60 p-5">
                <div className="mb-2 inline-block rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">مادة 6</div>
                <p className="mb-3">يتولى مدير المركز الإشراف على العمل اليومي بالمركز وإدارة شؤونه، وتكون له الصلاحيات المقررة لرئيس المصلحة في التشريعات النافذة وعلى الأخص ما يلي:</p>
                <ul className="list-disc space-y-2 pr-6 text-muted-foreground marker:text-gold">
                  <li>مباشرة الاختصاصات المتعلقة بالشؤون الوظيفية للعاملين بالمركز والفروع التابعة له، وفقا للتشريعات النافذة.</li>
                  <li>إعداد مشاريع اللوائح والقرارات المتعلقة بأعمال المركز.</li>
                  <li>اقتراح إنشاء فروع للمركز في مختلف مناطق الجماهيرية العظمى، وتكليف العناصر اللازمة لإدارتها.</li>
                  <li>الإشراف على إعداد مشروع الميزانية السنوية للمركز والحساب الختامي وإحالته إلى الجهات المختصة وفقا للتشريعات النافذة.</li>
                  <li>إصدار القرارات والتعليمات اللازمة لانتظام سير العمل بالمركز والفروع التابعة له.</li>
                  <li>تمثيل المركز في علاقاته مع الغير، وأمام القضاء.</li>
                  <li>التوقيع على الصكوك وأذونات الصرف من حسابات المركز وفقا للتشريعات النافذة.</li>
                  <li>تشكيل اللجان الطبية واللجان الفنية الأخرى لدراسة المواضيع والحالات التي تدخل ضمن اختصاصات المركز.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-background/60 p-5">
                <div className="mb-2 inline-block rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">مادة 7</div>
                <p>تكون للمركز ميزانية مستقلة. وتبدأ السنة المالية للمركز ببداية السنة المالية للدولة، وتنتهي بنهايتها على أن تبدأ السنة المالية الأولى من تاريخ العمل بهذا القرار.</p>
              </div>

              <div className="rounded-xl border border-border bg-background/60 p-5">
                <div className="mb-2 inline-block rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">مادة 8</div>
                <p className="mb-3">تتكون الموارد المالية للمركز من:</p>
                <ul className="list-disc space-y-2 pr-6 text-muted-foreground marker:text-gold">
                  <li>الاعتمادات التي تخصص له سنويا في الميزانية العامة.</li>
                  <li>عوائد نشاطات المركز.</li>
                  <li>أية إيرادات أخرى يرخص له فيها وفقا للتشريعات النافذة.</li>
                </ul>
              </div>

              {[
                { n: "مادة 9", t: "يكون للمركز حساب أو أكثر بأحد المصارف العاملة بالجماهيرية العربية الليبية الشعبية الاشتراكية العظمى." },
                { n: "مادة 10", t: "تتولى الإدارة العامة للبحث الجنائي بالجهاز الإداري للجنة الشعبية العامة للعدل والأمن العام القيام بأعمال الخبرة الجنائية في مجال معاينة أماكن الجرائم والتصوير الجنائي وفحص الأسلحة وذخائرها وغيرها من المعدات والآلات الأخرى والحرائق كل ذلك وفقا لما يطلب إليها من قبل الجهات المختصة." },
                { n: "مادة 11", t: "ينقل العاملون بمركز البحوث والخبرة القضائية ومركز البحوث والدراسات الأمنية إلى مركز الخبرة القضائية والبحوث المنشأ بموجب أحكام هذا القرار. وبنقل العاملون بالتصوير الجنائي وفحص الأسلحة وذخائرها والمعدات والآلات والحرائق للإدارة العامة للبحث الجنائي بذات أوضاعهم الوظيفية السابقة." },
                { n: "مادة 12", t: "يصدر الهيكل التنظيمي للمركز بقرار من أمين اللجنة الشعبية العامة للعدل والأمن العام، بناء على عرض من مدير المركز." },
                { n: "مادة 13", t: "تتولى اللجنة الشعبية العامة لجهاز التفتيش والرقابة الشعبية فحص ومراجعة حسابات المركز وفقا لأحكام القانون رقم 11 لسنة 1425 ميلادية المشار إليه." },
                { n: "مادة 14", t: "يلغى قرار اللجنة الشعبية العامة رقم 70 لسنة 1426 ميلادية المشار إليه، كما يلغى كل حكم يخالف أحكام هذا القرار." },
                { n: "مادة 15", t: "يعمل بهذا القرار من تاريخ صدوره، وينشر في مدونة الإجراءات." },
              ].map((m) => (
                <div key={m.n} className="rounded-xl border border-border bg-background/60 p-5">
                  <div className="mb-2 inline-block rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">{m.n}</div>
                  <p>{m.t}</p>
                </div>
              ))}

              <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
                <p className="font-bold text-foreground">اللجنة الشعبية العامة</p>
                <p className="mt-2">صدر في: ربيع الثاني — الموافق 7/7/1370 و.ر — 2002 ف</p>
              </div>
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
