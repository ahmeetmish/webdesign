import Image from "next/image"

export default function Banner() {
  return (
    <section className="w-full">
      <div>
        <Image src="https://placehold.co/2000x400" alt="Banner" className="w-full h-[400px] object-cover" width={2000} height={400} />
      </div>
    </section>
  )
}
