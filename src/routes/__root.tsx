import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-foreground">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Isha's Cabin" },
      {
        name: "description",
        content:
          "Isha's Cabin is a mini A-frame cabin resort in San Pablo, Laguna with a private pool. Perfect for family gatherings, birthdays and quiet getaways — starting at ₱2,500 for up to 8 pax.",
      },
      { name: "author", content: "Isha's Cabin" },
      { property: "og:site_name", content: "Isha's Cabin" },
      { property: "og:title", content: "Isha's Cabin" },
      {
        property: "og:description",
        content:
          "Isha's Cabin is a mini A-frame cabin resort in San Pablo, Laguna with a private pool. Perfect for family gatherings, birthdays and quiet getaways — starting at ₱2,500 for up to 8 pax.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#3F3F3F" },
      { name: "twitter:title", content: "Isha's Cabin" },
      { name: "twitter:description", content: "Isha's Cabin is a mini A-frame cabin resort in San Pablo, Laguna with a private pool. Perfect for family gatherings, birthdays and quiet getaways — starting at ₱2,500 for up to 8 pax." },
      { property: "og:image", content: "https://ishas-cabin-escapes-xxt2.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://ishas-cabin-escapes-xxt2.vercel.app/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Karla:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Isha's Cabin",
          description:
            "Mini A-frame cabin resort with private pool in San Pablo City, Laguna.",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Block 2, Lot 3, Bañagale Garcia Compound, Farconville Phase 2",
            addressLocality: "San Pablo City",
            addressRegion: "Laguna",
            postalCode: "4000",
            addressCountry: "PH",
          },
          telephone: "+63 962 702 7569",
          priceRange: "₱₱",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "13",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
