import Link from "next/link"
import Image from "next/image"

export default function Card({ image, alt, width, height, title, description }) {
  return (
    <div className="w-full">
      <Link href="/">
        <Image src={image} alt={alt} className="object-cover rounded-sm mb-3" width={width} height={height} />
        <h2 className="text-xl font-semibold underline">{title}</h2>
        <p className="text-lg font-semibold underline text-zinc-400">{description}</p>
      </Link>
    </div>
  )
}
