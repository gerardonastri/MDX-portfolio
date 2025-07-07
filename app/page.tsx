import Intro from "@/components/intro";
import NewsletterForm from "@/components/newsletter-form";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import CVSection from "@/components/cv-section"

export default function Home() {

  
  return (
    <div className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <AboutSection/>
        <SkillsSection />
        {/* <MDXRemote source={content} /> */}
        <RecentPosts />
        <RecentProjects />
        <CVSection />
        <NewsletterForm />
      </div>
    </div>
  );
}
