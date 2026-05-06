import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "مركز الخبرة القضائية والبحوث" },
      { name: "description", content: "مركز الخبرة القضائية والبحوث - جهة علمية متخصصة تقدم خدمات الخبرة القضائية والتحاليل والترجمة المعتمدة." },
      { name: "author", content: "مركز الخبرة القضائية والبحوث" },
      { property: "og:title", content: "مركز الخبرة القضائية والبحوث" },
      { property: "og:description", content: "مركز الخبرة القضائية والبحوث - جهة علمية متخصصة تقدم خدمات الخبرة القضائية والتحاليل والترجمة المعتمدة." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "مركز الخبرة القضائية والبحوث" },
      { name: "twitter:description", content: "مركز الخبرة القضائية والبحوث - جهة علمية متخصصة تقدم خدمات الخبرة القضائية والتحاليل والترجمة المعتمدة." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c5c90ac5-18b4-49ac-a2c5-69d11bd59837/id-preview-3b7263eb--535c5cd7-ef6e-41a9-bb8e-3588525d9f06.lovable.app-1777962430012.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c5c90ac5-18b4-49ac-a2c5-69d11bd59837/id-preview-3b7263eb--535c5cd7-ef6e-41a9-bb8e-3588525d9f06.lovable.app-1777962430012.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
