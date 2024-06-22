import Link from "next/link"

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21" height="21" viewBox="0 0 32 32">
    <path fill="#27272a" d="M 16.003906 14.0625 L 16.003906 18.265625 L 21.992188 18.265625 C 21.210938 20.8125 19.082031 22.636719 16.003906 22.636719 C 12.339844 22.636719 9.367188 19.664063 9.367188 16 C 9.367188 12.335938 12.335938 9.363281 16.003906 9.363281 C 17.652344 9.363281 19.15625 9.96875 20.316406 10.964844 L 23.410156 7.867188 C 21.457031 6.085938 18.855469 5 16.003906 5 C 9.925781 5 5 9.925781 5 16 C 5 22.074219 9.925781 27 16.003906 27 C 25.238281 27 27.277344 18.363281 26.371094 14.078125 Z"></path>
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21" height="21" viewBox="0 0 50 50">
    <path fill="#27272a" d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
  </svg>
)

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21" height="21" viewBox="0 0 50 50">
    <path fill="#27272a" d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
  </svg>
)

export default function Register() {
  return (
    <div className='w-[500px] overflow-hidden'>
      <div className='gap-6 flex flex-col p-8'>
        <div className="w-full text-start">
          <h2 className='text-xl font-bold text-zinc-800'>Hesap olustur</h2>
        </div>
        <form className='w-full space-y-6'>
          <div>
            <label htmlFor='username' className='text-xs font-light tracking-tight text-zinc-400 uppercase'>
              Kullanici Adi (*)
            </label>
            <input
              type='username'
              name='username'
              id='username'
              className='mt-1 w-full px-3 py-2 border-b text-sm border-zinc-200 outline-none placeholder:text-zinc-300 focus:border-zinc-400 focus:outline-none transition-all'
              placeholder='Kullanici Adi'
            />
          </div>
          <div>
            <label htmlFor='email' className='text-xs font-light tracking-tight text-zinc-400 uppercase'>
              Email (*)
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='mt-1 w-full px-3 py-2 border-b text-sm border-zinc-200 outline-none placeholder:text-zinc-300 focus:border-zinc-400 focus:outline-none transition-all'
              placeholder='Email'
            />
          </div>
          <div className="gap-4 flex items-center">
            <div>
              <label htmlFor='password' className='text-xs font-light tracking-tight text-zinc-400 uppercase'>
                Parola (*)
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className='mt-1 w-full px-3 py-2 border-b text-sm border-zinc-200 outline-none placeholder:text-zinc-300 focus:border-zinc-400 focus:outline-none transition-all'
                placeholder='Parola'
              />
            </div>
            <div>
              <label htmlFor='password' className='text-xs font-light tracking-tight text-zinc-400 uppercase'>
                Tekrar Parola (*)
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className='mt-1 w-full px-3 py-2 border-b text-sm border-zinc-200 outline-none placeholder:text-zinc-300 focus:border-zinc-400 focus:outline-none transition-all'
                placeholder='Parola'
              />
            </div>
          </div>
          <div className="gap-4 flex items-center justify-between">
            <label htmlFor="remember-me" className="gap-2 w-max flex items-center cursor-pointer">
              <input id="remember-me" type="checkbox" value="" className="w-4 h-4 text-zinc-200 accent-zinc-800 rounded outline-none bg-zinc-200 ring-zinc-200 border-zinc-200 cursor-pointer transition-all" />
              <label htmlFor="remember-me" className="text-xs sm:text-sm text-zinc-700 cursor-pointer"><Link href='/privacy-policy' className="underline">Gizlilik Sozlesmesini</Link> okudum ve kabul ediyorum</label>
            </label>
          </div>
          <button
            type='submit'
            className='w-full !mt-8px-6 py-4 text-xl font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg outline-none focus:outline-none transition-all'
          >
            Hesap olustur
          </button>
        </form>
        <div className="w-full h-3 border-b border-zinc-200 text-sm text-center">
          <span className="text-zinc-700 bg-white px-4">veya</span>
        </div>
        <div className="w-full gap-2 flex flex-col items-center justify-between mt-[6px] sm:gap-4 sm:flex-row">
          <div className="w-full gap-2 flex items-center justify-center px-5 py-2 border border-zinc-300 hover:bg-zinc-200 rounded-lg cursor-pointer transition-all">
            <GoogleIcon />
            <span className="text-sm text-zinc-800">Google</span>
          </div>
          <div className="w-full gap-2 flex items-center justify-center px-5 py-2 border border-zinc-300 hover:bg-zinc-200 rounded-lg cursor-pointer transition-all">
            <FacebookIcon />
            <span className="text-sm text-zinc-800">Facebook</span>
          </div>
          <div className="w-full gap-2 flex items-center justify-center px-5 py-2 border border-zinc-300 hover:bg-zinc-200 rounded-lg cursor-pointer transition-all">
            <TwitterIcon />
            <span className="text-sm text-zinc-800">Twitter</span>
          </div>
        </div>
        <div className='w-full text-center'>
          <Link href='/auth/login'>
            <span className='text-sm text-zinc-600 font-medium underline'>Hesabin var mi, giris yapmak icin tikla!</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
