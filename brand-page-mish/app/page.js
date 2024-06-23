import Hero from "@/components/Hero"
import Banner from "@/components/Banner"
import Projects from "@/components/Projects/Projects"

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Banner />
      <Projects />
    </div>
  )
}
