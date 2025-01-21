import profilePhoto from './profilePhoto.png'
import linkedin from './linkedin.svg'
import github from './github.svg'

export function FooterLanding () {
  return (
    <footer className="flex flex-col gap-4 items-center w-full pt-10 pb-16">
      <h1 className="font-satisfy font-semibold text-3xl"> Made by </h1>
      <div className="w-[486px] h-[124px] flex items-center justify-between rounded-[50px] p-10 bg-customBlueUltraBlack shadow-[inset_-5px_-5px_10px_#0e1011,inset_5px_5px_10px_#141619]">
        <div className='flex gap-5 items-center'>
          <img src={profilePhoto} alt="profile photo" className="w-[58px] h-[58px] rounded-full"/>
          <a 
            className='hover:text-orange-400 transition-colors'
            href='https://yeider.vercel.app'
            target='_blank'
          >
            <h1 className='font-satisfy font-semibold text-3xl'> Yeider </h1>
          </a>
        </div>

        <div className='flex gap-4'>
          <a
            className='cursor-pointer hover:scale-90 hover:-rotate-6 transition-transform'
            href="https://www.linkedin.com/in/yeider-pe%C3%B1a" 
            target="_blank"
          >
            <img src={linkedin} alt="logo linkedin" />
          </a>
          <a
            className='cursor-pointer hover:scale-90 hover:-rotate-6 transition-transform'
            href="https://github.com/Ye1der" 
            target="_blank"
          >
            <img src={github} alt="logo linkedin" />
          </a>
        </div>
      </div>
    </footer>
  )
}