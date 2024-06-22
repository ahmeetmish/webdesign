const RedoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" classname="lucide lucide-redo">
    <path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/>
  </svg>
)

export default function Home() {
  return (
    <div className="gap-2.5 flex flex-col items-center justify-center">
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-3 mb-4">
        <div className="flex flex-col items-start justify-center p-8 rounded-md border border-rose-200 bg-rose-100">
          <h2 className="text-3xl font-bold mb-2 dark:text-zinc-900">
            Process Grid
          </h2>
          <p className="text-zinc-600">
            A grid layout that can be used to inform about the process
          </p>
        </div>
        <div className="border border-rose-100 p-8 rounded-md space-y-6">
          <div className="gap-4 flex items-center justify-start">
            <div className="flex items-center justify-center p-4 rounded-md border border-rose-200 bg-rose-100">
              <RedoIcon />
            </div>
            <h2 className="text-xl font-semibold">
              Lorem Ipsum
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            elementum, nisl a porta porttitor, elit nisi porta nibh, ac
            pellentesque nisi nisl a nibh. Nulla facilisi. In hac habitasse
          </p>
        </div>
        <div className="border border-rose-100 p-8 rounded-md space-y-6">
          <div className="gap-4 flex items-center justify-start">
            <div className="flex items-center justify-center p-4 rounded-md border border-rose-200 bg-rose-100">
              <RedoIcon />
            </div>
            <h2 className="text-xl font-semibold">
              Lorem Ipsum
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            elementum, nisl a porta porttitor, elit nisi porta nibh, ac
            pellentesque nisi nisl a nibh. Nulla facilisi. In hac habitasse
          </p>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className="border border-rose-100 p-8 rounded-md space-y-6">
          <div className="gap-4 flex items-center justify-start">
            <div className="flex items-center justify-center p-4 rounded-md border border-rose-200 bg-rose-100">
              <RedoIcon />
            </div>
            <h2 className="text-xl font-semibold">
              Lorem Ipsum
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            elementum, nisl a porta porttitor, elit nisi porta nibh, ac
            pellentesque nisi nisl a nibh. Nulla facilisi. In hac habitasse
          </p>
        </div>
        <div className="border border-rose-100 p-8 rounded-md space-y-6">
          <div className="gap-4 flex items-center justify-start">
            <div className="flex items-center justify-center p-4 rounded-md border border-rose-200 bg-rose-100">
              <RedoIcon />
            </div>
            <h2 className="text-xl font-semibold">
              Lorem Ipsum
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            elementum, nisl a porta porttitor, elit nisi porta nibh, ac
            pellentesque nisi nisl a nibh. Nulla facilisi. In hac habitasse
          </p>
        </div>
      </div>
    </div>
  )
}
