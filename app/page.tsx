import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Achievements } from "@/components/sections/Achievements";
import { WhyHireMe } from "@/components/sections/WhyHireMe";

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Sameer Patel",
        "url": "https://sameerpatel.dev",
        "jobTitle": "Software Developer",
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Chandigarh University"
        },
        "knowsAbout": [
            "Full Stack Development",
            "Data Structures & Algorithms",
            "Automation Testing",
            "React",
            "Next.js",
            "Node.js",
            "Java",
            "C++"
        ],
        "sameAs": [
            "https://github.com/samerr03",
            "https://www.linkedin.com/in/sameer-patel-b1ab4b349"
        ]
    };

    return (
        <main className="flex min-h-screen flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Achievements />
            <Education />
            <WhyHireMe />
            <Contact />
        </main>
    );
}
