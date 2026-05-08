import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import HomePageClient from './HomePageClient';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Get localized content for tools
  const { tools } = await import('@/config/tools');
  const { getToolContent } = await import('@/config/tool-content');

  const localizedToolContent = tools.reduce((acc, tool) => {
    const content = getToolContent(locale as Locale, tool.id);
    // Use metaDescription for the card description as it's short and summary-like
    // Use title from the content
    if (content) {
      acc[tool.id] = {
        title: content.title,
        description: content.metaDescription
      };
    }
    return acc;
  }, {} as Record<string, { title: string; description: string }>);

  const { JsonLd } = await import('@/components/seo/JsonLd');
  const { generateWebSiteSchema, generateOrganizationSchema } = await import('@/lib/seo/structured-data');

  return (
    <>
      <JsonLd data={generateWebSiteSchema(locale as Locale)} />
      <JsonLd data={generateOrganizationSchema()} />
      <HomePageClient locale={locale as Locale} localizedToolContent={localizedToolContent} />
    </>
  );
}
