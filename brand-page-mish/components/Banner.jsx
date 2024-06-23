import Image from "next/image"

export default function Banner() {
  return (
    <section className="w-full space-y-6">
      <div>
        <Image src="https://placehold.co/2000x400" alt="Banner" className="w-full h-[400px] object-cover" width={2000} height={400} />
      </div>
      <div>
        <p className="text-4xl font-semibold">In modern web design, every new project is an opportunity to develop our creativity and offer better solutions. <br /> Always being on the move brings evolution and innovation.</p>
      </div>
    </section>
  )
}
