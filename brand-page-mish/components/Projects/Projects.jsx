import Card from "./Card"

export default function Projects() {
  return (
    <section>
      <div className="gap-y-20 flex flex-col md:grid md:grid-cols-14">
        <div className="col-span-9 col-start-12 max-[768px]:w-full">
          <Card image="/2.jpg" alt="Project" width={800} height={600} title="Lorem Ipsum" description="Lorem" />
        </div>
        <div className="col-span-10 max-[768px]:w-full">
          <Card image="/3.jpg" alt="Project" width={900} height={700} title="Lorem Ipsum" description="Lorem" />
        </div>
        <div className="col-span-8 col-start-13 md:mt-[50rem] max-[768px]:w-full">
          <Card image="/4.jpg" alt="Project" width={700} height={700} title="Lorem Ipsum" description="Lorem" />
        </div>
        <div className="col-span-12 col-start-1 md:mt-10 max-[768px]:w-full">
          <Card image="/5.jpg" alt="Project" width={1200} height={600} title="Lorem Ipsum" description="Lorem" />
        </div>
      </div>
    </section>
  )
}
