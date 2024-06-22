export default function Layout({ children }) {
  return (
    <div className='relative w-full h-screen'>
      <div className='w-full h-full flex items-center justify-center'>
        {children}
      </div>
    </div>
  )
}
