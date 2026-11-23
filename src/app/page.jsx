import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import FounderStory from '@/components/FounderStory'
import ExperienceTeaser from '@/components/ExperienceTeaser'
import Courses from '@/components/Courses'
import FeaturedLesson from '@/components/FeaturedLesson'

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
      <ProblemStatement />
      <ExperienceTeaser />
      <FeaturedLesson />
      <FounderStory />
      <Courses />
    </div>
  )
}
