import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import FounderStory from '@/components/FounderStory'
import ExperienceTeaser from '@/components/ExperienceTeaser'
import Courses from '@/components/Courses'
import FeaturedLesson from '@/components/FeaturedLesson'

export const metadata = {
  title: "Curiosity-Driven School Program, STEM Curriculum & Makerspace Consultants | Curioso",
  description: "We partner with progressive CBSE, ICSE, IB, and IGCSE schools in India as makerspace school consultants and STEM school program architects. Zero hardware lock-in, raw-material mechanics, and teacher enablement.",
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
