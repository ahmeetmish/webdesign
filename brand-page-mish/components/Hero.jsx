import { MoveDownRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="h-screen">
      <div className="h-full gap-10 flex items-end justify-between text-zinc-900">
        <h2 className="text-[11rem] font-black leading-[120%]">Unlimited <span className="px-10 rounded text-white bg-zinc-900">Creativity</span> <br /> with Mish.</h2>
        <div className="relative gap-2 flex items-center mb-5 cursor-pointer transition-all group">
          <span className="text-[2rem] font-bold">Scroll</span>
          <MoveDownRight className="size-6" />
          <div className="opacity-0 w-full h-[0.2rem] absolute bottom-1 left-0 bg-zinc-900 transition-all group-hover:opacity-100"></div>
        </div>
      </div>
    </section>
  )
}
