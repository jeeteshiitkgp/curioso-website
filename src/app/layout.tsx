import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import GlobalCTA from "../components/GlobalCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.curioso.school"),
  title: {
    default: "School STEM Lab, Math Lab & PBL in India | Curioso",
    template: "%s | Curioso"
  },
  description: "Hands-on STEM labs, physical math labs, and project-based learning for CBSE, ICSE, IB, and IGCSE schools in India. 80% lower cost, zero plastic kits.",
  keywords: [
    "school stem lab setup India",
    "innovation lab for schools India",
    "project based learning schools India",
    "activity based learning science math",
    "math lab for schools",
    "robotics lab alternative",
    "tinkering lab without kits",
    "NEP 2020 experiential learning curriculum",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.curioso.school",
    siteName: "Curioso",
    title: "Curioso | Hands-On Science, Math & STEM Labs for Schools",
    description: "Hands-on physical learning and everyday raw-material builds for CBSE, ICSE, IB, and IGCSE schools across India.",
    images: [
      {
        url: "/images/school/cardboard-ev-desk-closeup.jpg",
        width: 1400,
        height: 1162,
        alt: "Students building a scratch-built electric car with cardboard, motors, and copper wire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curioso | Hands-On Science & Math Programs",
    description: "Hands-on science, math, and lab curriculum for CBSE, ICSE, IB, and IGCSE schools in India aligned with NEP 2020.",
    images: ["/images/school/cardboard-ev-desk-closeup.jpg"],
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
    "alternateName": ["Curioso", "Curioso School"],
    "url": "https://www.curioso.school",
    "logo": "https://www.curioso.school/favicon.svg",
    "description": "Hands-on science and math classroom activities, low-cost school STEM and innovation lab setups, and multi-week engineering projects for K-12 schools in India.",
    "sameAs": [
      "https://www.linkedin.com/in/jeeteshgulani/",
      "https://jeeteshgulani.substack.com"
    ],
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
      "School STEM Lab Setup",
      "School Innovation Lab Setup",
      "Project-Based Learning",
      "Activity-Based Learning",
      "Physical Math Lab",
      "NEP 2020 Experiential Learning",
      "No-Kit Physical Science Curriculum",
      "CBSE Science Curriculum",
      "ICSE Science Curriculum"
    ]
  };

  return (
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
          <GlobalCTA />
        </div>
        <footer className="bg-space border-t border-indigo-900/50 mt-auto text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-indigo-900/50">
              <div>
                <p className="text-lg font-extrabold text-white mb-2">Curioso School Foundation</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Hands-on science, math, and engineering programs for CBSE, ICSE, IB, and IGCSE schools in India.
                </p>
                <a
                  href="mailto:jeetesh@curioso.school"
                  className="text-sm font-semibold text-cyan hover:text-white transition-colors"
                >
                  jeetesh@curioso.school
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Programs</p>
                <ul className="space-y-2.5 text-sm font-medium">
                  <li>
                    <Link href="/programs/curiosity-classroom" className="hover:text-white transition-colors">
                      Curiosity Classroom
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs/stem-lab" className="hover:text-white transition-colors">
                      STEM &amp; Innovation Lab
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs/project-based-learning" className="hover:text-white transition-colors">
                      Project-Based Learning
                    </Link>
                  </li>
                  <li>
                    <Link href="/lessons" className="hover:text-white transition-colors">
                      Lessons
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Explore</p>
                <ul className="space-y-2.5 text-sm font-medium">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/experience" className="hover:text-white transition-colors">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
                    <a href="https://www.linkedin.com/in/jeeteshgulani/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://jeeteshgulani.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                      Substack
                    </a>
                    <a href="https://www.instagram.com/curioso.school/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
              <p>© {currentYear} Curioso School Foundation. Engineered for Curiosity.</p>
              <p>Bengaluru &amp; Pan-India School Partnerships</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
