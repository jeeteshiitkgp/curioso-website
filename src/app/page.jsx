"use client";

import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import FounderStory from '@/components/FounderStory'
import ExperienceTeaser from '@/components/ExperienceTeaser'
import Courses from '@/components/Courses'
import FeaturedLesson from '@/components/FeaturedLesson'
import useSEO from '@/hooks/useSEO'

export default function Home() {
  useSEO({
    title: "Experiential Learning in Schools | NEP 2020 Curriculum Guidelines | Curioso",
    description: "Implement competency based learning CBSE and ICSE pathways without expensive robotics kits. Curioso provides clinical grade science and math curriculum architecture for premium private schools in India."
  });

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
