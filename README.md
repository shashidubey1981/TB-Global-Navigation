# TB Global Navigation

A comprehensive, responsive navigation header component package for Next.js applications. This package provides a fully-featured header with promotion bar, search, navigation, account management, and mobile-responsive design.

## Features

- **Responsive Design**: Fully responsive header with separate desktop and mobile layouts
- **Promotion Bar**: Configurable promotional banner at the top
- **Store Locator**: Quick access to store location functionality
- **Search Functionality**: Integrated search with customizable placeholder
- **Navigation Menu**: Multi-level navigation support with dropdown capabilities
- **User Actions**: Account, Wishlist, and Shopping Bag icons with count badges
- **Burger Menu**: Mobile-optimized hamburger menu for navigation
- **Contentstack Integration**: Optional CMS integration for dynamic content management
- **TypeScript Support**: Full TypeScript definitions included
- **CSS Modules**: Scoped styling with SCSS modules
- **Internationalization**: Multi-locale support (en, es, fr, de)
- **API Routes**: RESTful API endpoints for microfrontend consumption
- **Standalone Build**: Can be built as a standalone package for distribution

## Folder Structure

```
tb-global-navigation/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with Header and Footer
│   ├── page.tsx                 # Home page
│   ├── globals.scss             # Global styles
│   └── favicon.ico              # Favicon
├── components/                   # React components
│   ├── header/                  # Header components
│   │   ├── Header.tsx           # Main Header component (brand router)
│   │   ├── index.ts             # Header exports
│   │   ├── Logo.tsx             # Shared logo component
│   │   ├── jos-a-bank/          # Jos A. Bank brand components
│   │   │   ├── JBHeader.tsx
│   │   │   ├── JBLogo.tsx
│   │   │   ├── JBNavigation.tsx
│   │   │   ├── JBSearch.tsx
│   │   │   ├── JBBag.tsx
│   │   │   ├── JBAccount.tsx
│   │   │   ├── JBWishlist.tsx
│   │   │   └── styles/          # Brand-specific SCSS modules
│   │   ├── mens-wearhouse/      # Men's Wearhouse brand components
│   │   │   ├── TMWHeader.tsx
│   │   │   └── styles/
│   │   ├── kg-fashion-superstore/ # K&G Fashion Superstore brand components
│   │   │   ├── KFSHeader.tsx
│   │   │   └── styles/
│   │   ├── moores/              # Moores brand components
│   │   │   ├── MOOHeader.tsx
│   │   │   └── styles/
│   │   └── tailoredbrands/     # Tailored Brands brand components
│   │       ├── TBHeader.tsx
│   │       └── styles/
│   └── footer/                  # Footer components
│       ├── Footer.tsx           # Main Footer component (brand router)
│       ├── index.ts             # Footer exports
│       ├── jos-a-bank/          # Jos A. Bank footer components
│       ├── mens-wearhouse/      # Men's Wearhouse footer components
│       ├── kg-fashion-superstore/ # K&G footer components
│       ├── moores/              # Moores footer components
│       └── tailoredbrands/     # Tailored Brands footer components
├── lib/                         # Utility libraries
│   ├── contentstack-service.ts # Contentstack CMS integration
│   └── i18n.ts                 # Internationalization utilities
├── utils/                       # Utility functions
│   └── fonts.ts                # Font configuration
├── types/                       # TypeScript type definitions
│   └── scss-modules.d.ts       # SCSS module type definitions
├── dist/                        # Compiled output (generated)
├── public/                      # Static assets
├── index.ts                     # Main package entry point
├── src/                         # Source entry point
│   └── index.ts
├── package.json                 # Package configuration
├── tsconfig.json                # TypeScript configuration
├── tsconfig.build.json          # Build-specific TypeScript config
├── next.config.ts               # Next.js configuration
├── middleware.ts                # Next.js middleware for i18n
└── README.md                    # This file
```

## Local Development

### Prerequisites

- Access to Contentstack (for CMS data, if using)

### Setup

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables (if using Contentstack):**
   Create a `.env.local` file in the root directory:
   ```env
   CONTENTSTACK_API_KEY=your_api_key
   CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
   CONTENTSTACK_ENVIRONMENT=your_environment
   NEXT_PUBLIC_CONTENTSTACK_REGION=us
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3001`

4. **Build the package (for distribution):**
   ```bash
   npm run build:package
   ```
   This generates the `dist` folder with compiled JavaScript and TypeScript definitions.

### Available Scripts

- `npm run dev` - Start development server on port 3001
- `npm run build` - Build the Next.js application
- `npm run start` - Start production server on port 3001
- `npm run lint` - Run ESLint
- `npm run build:package` - Build TypeScript package for distribution

### Development Workflow

1. Make changes to components in the `components/` directory
2. Test locally using the development server
3. Build the package when ready for distribution: `npm run build:package`
4. The package can be consumed by other applications via npm link or direct path

## How to Consume Header and Footer in Shell Application

### Installation

#### Option 1: Local Development (npm link)

For local development and testing:

```bash
# In tb-global-navigation directory
npm link

# In your shell application directory
npm link tb-global-navigation
```

#### Option 2: Direct Path

Add the package directly from the file system:

```bash
# In your shell application's package.json
{
  "dependencies": {
    "tb-global-navigation": "file:../path/to/tb-global-navigation"
  }
}
```

Then run:
```bash
npm install
```

#### Option 3: Git Repository

If the package is in a Git repository:

```bash
npm install git+https://github.com/your-org/tb-global-navigation.git
```

#### Option 4: NPM Package (Production)

If published to npm:

```bash
npm install tb-global-navigation
```

### Configuration

#### 1. Update Next.js Configuration

Add the package to `transpilePackages` in your `next.config.js` or `next.config.ts`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['tb-global-navigation'],
  // ... other config
}

module.exports = nextConfig
```

#### 2. Install Peer Dependencies

Ensure your shell application has the required peer dependencies:

```bash
npm install react react-dom next
```

#### 3. Install Sass

The components use SCSS modules, so you need Sass:

```bash
npm install sass
```

#### 4. Add CSS Variables (Optional)

Add CSS variables to your `app/globals.css` or `app/globals.scss` for custom theming:

```css
:root {
  --header-bg: #ffffff;
  --border-color: #e5e5e5;
  --accent-color: #0070f3;
  --text-primary: #000000;
  --text-secondary: #666666;
  --foreground: #000000;
  --background: #ffffff;
}
```

### Usage

#### Basic Usage in Layout

The Header and Footer components are async server components that fetch data from Contentstack. Use them in your root layout:

```tsx
// app/layout.tsx
import Header from 'tb-global-navigation';
import Footer from 'tb-global-navigation';
import type { Locale } from 'tb-global-navigation';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = locale || 'en'; // Ensure valid locale

  return (
    <html lang={validLocale}>
      <body>
        <Header locale={validLocale} brandName="mens-wearhouse" />
        <main>{children}</main>
        <Footer locale={validLocale} brandName="mens-wearhouse" />
      </body>
    </html>
  );
}
```

#### Supported Brands

The `brandName` prop accepts the following values (case-insensitive):
- `"mens-wearhouse"` or `"mens_wearhouse"` - Men's Wearhouse
- `"jos-a-bank"` or `"jos_a_bank"` - Jos A. Bank
- `"kg-fashion-superstore"` or `"kg_fashion_superstore"` - K&G Fashion Superstore
- `"moores"` - Moores
- `"tailoredbrands"` - Tailored Brands

#### Supported Locales

The `locale` prop accepts:
- `"en"` - English (default)
- `"es"` - Spanish
- `"fr"` - French
- `"de"` - German

#### Example with Dynamic Brand and Locale

```tsx
// app/layout.tsx
import Header from 'tb-global-navigation';
import Footer from 'tb-global-navigation';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; brand?: string }>;
}) {
  const { locale = 'en', brand = 'mens-wearhouse' } = await params;

  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} brandName={brand} />
        <main>{children}</main>
        <Footer locale={locale} brandName={brand} />
      </body>
    </html>
  );
}
```

#### Using in Page Components

You can also use Header and Footer in individual pages:

```tsx
// app/page.tsx
import Header from 'tb-global-navigation';
import Footer from 'tb-global-navigation';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} brandName="mens-wearhouse" />
      <main>
        <h1>Welcome</h1>
        {/* Your page content */}
      </main>
      <Footer locale={locale} brandName="mens-wearhouse" />
    </>
  );
}
```

### TypeScript Support

The package includes full TypeScript definitions. Import types as needed:

```tsx
import type { Locale, HeaderProps, FooterProps } from 'tb-global-navigation';
```

### Troubleshooting

#### Module Not Found Errors

- Ensure `transpilePackages: ['tb-global-navigation']` is configured in `next.config.js`
- Verify the package is properly installed
- Check that the import path matches the package exports

#### Styles Not Loading

- Ensure `sass` is installed in your shell application
- Verify CSS variables are defined if using custom theming
- Check that SCSS files are being processed by Next.js

#### Type Errors

- Ensure TypeScript can find the type definitions
- Check that `@types/react` and `@types/react-dom` are installed
- Verify the package has been built (`npm run build:package` in tb-global-navigation)

#### Contentstack Data Not Loading

- Verify environment variables are set correctly
- Check that Contentstack API credentials are valid
- Ensure the locale and brandName match entries in Contentstack

