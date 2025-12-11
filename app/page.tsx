export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <p>
        This is a Next.js 15 application that provides headers as a microfrontend
        using Contentstack CMS.
      </p>
      
    </div>
  );
}

