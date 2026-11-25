import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import ProblemStatement from '@/components/ProblemStatement'
import ExperienceTeaser from '@/components/ExperienceTeaser'
import SchoolProofSection from '@/components/SchoolProofSection'
import FeaturedLesson from '@/components/FeaturedLesson'
import FounderStory from '@/components/FounderStory'
import Courses from '@/components/Courses'

export const metadata = {
  title: {
    absolute: "School STEM Lab, Math Lab & PBL in India | Curioso",
  },
  description: "Hands-on STEM labs, physical math labs, and project-based learning for CBSE, ICSE, IB, and IGCSE schools in India. 80% lower cost, zero plastic kits.",
  alternates: {
    canonical: "https://www.curioso.school",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustStrip />
      <ProblemStatement />
      <ExperienceTeaser />
      <SchoolProofSection />
      <FeaturedLesson />
      <FounderStory />
      <Courses />
    </div>
  )
}
