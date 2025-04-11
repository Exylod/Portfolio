"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CVSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>("experience")

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 bg-zinc-900 text-zinc-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-playfair">Professional Experience</h2>
          <p className="max-w-[700px] text-zinc-400 md:text-xl font-dm-serif">
            A summary of my professional journey and accomplishments
          </p>
          <Button
            className="mt-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="grid gap-8 md:gap-12 max-w-3xl mx-auto">
          {/* Experience Section */}
          <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 text-left"
              onClick={() => toggleSection("experience")}
            >
              <h3 className="text-xl font-bold font-playfair">Work Experience</h3>
              {expandedSection === "experience" ? (
                <ChevronUp className="h-5 w-5 text-zinc-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-zinc-400" />
              )}
            </button>

            {expandedSection === "experience" && (
              <div className="p-4 pt-0">
                <div className="space-y-8">
                  <TimelineItem
                    title="Senior Developer"
                    company="Tech Innovations Inc."
                    period="2020 - Present"
                    description="Led development of core product features, managed a team of 5 developers, and implemented CI/CD pipelines that reduced deployment time by 40%."
                    skills={["React", "Node.js", "AWS", "TypeScript"]}
                  />

                  <TimelineItem
                    title="Full Stack Developer"
                    company="Digital Solutions Ltd."
                    period="2017 - 2020"
                    description="Developed and maintained multiple client websites and applications. Improved site performance by 35% through code optimization and modern development practices."
                    skills={["JavaScript", "Vue.js", "PHP", "MySQL"]}
                  />

                  <TimelineItem
                    title="Junior Web Developer"
                    company="Creative Web Agency"
                    period="2015 - 2017"
                    description="Assisted in the development of responsive websites for various clients. Collaborated with designers to implement pixel-perfect UI components."
                    skills={["HTML", "CSS", "JavaScript", "WordPress"]}
                    isLast={true}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Education Section */}
          <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 text-left"
              onClick={() => toggleSection("education")}
            >
              <h3 className="text-xl font-bold font-playfair">Education</h3>
              {expandedSection === "education" ? (
                <ChevronUp className="h-5 w-5 text-zinc-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-zinc-400" />
              )}
            </button>

            {expandedSection === "education" && (
              <div className="p-4 pt-0">
                <div className="space-y-8">
                  <TimelineItem
                    title="Master of Computer Science"
                    company="University of Technology"
                    period="2013 - 2015"
                    description="Specialized in Software Engineering with a focus on web technologies and distributed systems."
                    isLast={false}
                  />

                  <TimelineItem
                    title="Bachelor of Science in Information Technology"
                    company="State University"
                    period="2009 - 2013"
                    description="Graduated with honors. Participated in multiple hackathons and coding competitions."
                    isLast={true}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Skills Section */}
          <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 text-left"
              onClick={() => toggleSection("skills")}
            >
              <h3 className="text-xl font-bold font-playfair">Skills & Expertise</h3>
              {expandedSection === "skills" ? (
                <ChevronUp className="h-5 w-5 text-zinc-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-zinc-400" />
              )}
            </button>

            {expandedSection === "skills" && (
              <div className="p-4 pt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <SkillCategory
                    title="Frontend"
                    skills={["React", "Vue.js", "Next.js", "HTML5/CSS3", "JavaScript", "TypeScript"]}
                  />
                  <SkillCategory
                    title="Backend"
                    skills={["Node.js", "Express", "PHP", "Python", "RESTful APIs", "GraphQL"]}
                  />
                  <SkillCategory title="DevOps" skills={["AWS", "Docker", "CI/CD", "Git", "Linux", "Nginx"]} />
                  <SkillCategory title="Databases" skills={["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"]} />
                  <SkillCategory title="Tools" skills={["VS Code", "Figma", "Jira", "Postman", "npm/yarn"]} />
                  <SkillCategory
                    title="Soft Skills"
                    skills={["Team Leadership", "Communication", "Problem Solving", "Agile/Scrum"]}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  title: string
  company: string
  period: string
  description: string
  skills?: string[]
  isLast?: boolean
}

function TimelineItem({ title, company, period, description, skills, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-2">
      {!isLast && <div className="absolute top-0 left-3 h-full w-px bg-zinc-700" aria-hidden="true" />}
      <div className="absolute top-1 left-0 h-6 w-6 rounded-full border-2 border-zinc-600 bg-zinc-900 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-zinc-400" />
      </div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
          <h4 className="text-lg font-bold font-playfair">{title}</h4>
          <span className="text-sm text-zinc-400 font-dm-serif">{period}</span>
        </div>
        <p className="text-zinc-300 font-dm-serif">{company}</p>
        <p className="text-zinc-400 font-dm-serif">{description}</p>
        {skills && (
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface SkillCategoryProps {
  title: string
  skills: string[]
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-md font-bold text-zinc-200 font-playfair">{title}</h4>
      <ul className="space-y-1">
        {skills.map((skill) => (
          <li key={skill} className="text-zinc-400 font-dm-serif text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

