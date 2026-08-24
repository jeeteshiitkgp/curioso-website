import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import ContactCTA from "../components/ContactCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.curioso.school"),
  title: {
    default: "Curioso | Clinical-Grade Experiential Science & Math Curriculum for Schools",
    template: "%s | Curioso"
  },
  description: "Proprietary physical curriculum architecture for CBSE and ICSE schools in India. Replaces sterile robotics kits with clinical-grade hands-on mechanics and raw-material problem solving aligned with NEP 2020.",
  keywords: [
    "NEP 2020 experiential learning curriculum",
    "competency based learning CBSE ICSE",
    "hands on science curriculum for schools India",
    "physical STEM lab alternative Bangalore Delhi Mumbai",
    "K-12 science curriculum architecture",
    "Curioso school curriculum",
    "Jeetesh Gulani"
  ],
  authors: [{ name: "Jeetesh Gulani", url: "https://www.curioso.school/about" }],
  creator: "Curioso School Foundation",
  publisher: "Curioso School Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.curioso.school",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.curioso.school",
    siteName: "Curioso",
    title: "Curioso | Clinical-Grade Experiential Learning for Schools",
    description: "Replaces sterile plastic kits with clinical-grade physical learning and raw-material mechanics for top schools across India.",
    images: [
      {
        url: "/curioso_hero_robot.png",
        width: 1200,
        height: 630,
        alt: "Curioso Clinical Grade Hands-on Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curioso | Experiential Science & Math Curriculum",
    description: "Physical curriculum architecture for CBSE and ICSE schools in India aligned with NEP 2020.",
    images: ["/curioso_hero_robot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Curioso School Foundation",
    "url": "https://www.curioso.school",
    "logo": "https://www.curioso.school/curioso_hero_robot.png",
    "description": "Proprietary physical curriculum architecture and clinical-grade experiential science and math programs for premium K-12 schools in India.",
    "founder": {
      "@type": "Person",
      "name": "Jeetesh Gulani",
      "jobTitle": "Founder & Curriculum Architect",
      "alumniOf": "IIT Kharagpur",
      "sameAs": [
        "https://www.linkedin.com/in/jeeteshgulani/",
        "https://jeeteshgulani.substack.com"
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "NEP 2020 Experiential Learning",
      "CBSE Science Curriculum",
      "ICSE Science Curriculum",
      "Physical Mechanics",
      "K-12 STEM Education"
    ]
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
        </head>
        <body className={`${inter.className} min-h-screen flex flex-col bg-space text-ivory font-sans`}>
          <Navigation />
          <main className="flex-grow flex flex-col justify-start">
            {children}
          </main>
          <div id="contact">
            <ContactCTA />
          </div>
          <footer className="bg-space text-center py-10 border-t border-indigo-900/50 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-slate-500 text-sm font-medium">
                © {currentYear} Curioso School Foundation. Engineered for Curiosity.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
