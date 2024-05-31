import React from 'react'
import Opening from "../../assets/opening.mp4"
import Poster from "../../assets/poster.webp"
import { useTranslation } from 'react-i18next'
const Header = () => {
    const {t} = useTranslation()
    const title = t("header.title")
    const subtitle = t("header.subtitle")
    const btn1 = t("header.btn1")
    const btn2 = t("header.btn2")
  return (
    <header className='w-[100%] min-h-[94vh] relative flex items-center md:justify-start justify-center'>
      <video muted preload='auto' autoPlay loop poster={Poster} className='w-[100%] h-[100%] absolute object-cover brightness-50'>
        <source src={Opening} type='video/mp4'/>
      </video>
      <div className='px-[30px] py-[100px] relative justify-center md:items-start items-center z-10 sm:ml-[100px] text-white w-[100%] max-w-[700px] flex flex-col sm:items-start gap-[30px]'>
        <h1 className='text-[40px] text-center sm:text-start w-[100%] sm:text-[80px] font-[600]'>{title}</h1>
        <p>{subtitle}</p>
        <div className='flex gap-[20px] flex-wrap justify-center'>
            <button className='px-[16px] w-[150px] h-[50px] border border-purple-600 relative group'><span className='absolute bg-purple-600 group-hover:top-0 group-hover:right-0 ease-in-out duration-500 px-[16px] w-[150px] h-[50px] border border-purple-600 flex justify-center items-center top-[5px] right-[5px]'>{btn1}</span></button>
            <button className='px-[16px] w-[150px] h-[50px] border border-purple-600 relative group'><span className='absolute group-hover:top-0 group-hover:right-0 ease-in-out duration-500 px-[16px] w-[150px] h-[50px] border border-purple-600 flex justify-center items-center top-[5px] right-[5px]'>{btn2}</span></button>
        </div>
      </div>
    </header>
  )
}

export default Header
