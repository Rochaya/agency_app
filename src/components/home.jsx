import React from 'react'

export default function Home() {
  return (
    <div className='home-container flex justify-center flex-col mt-80 h-60 w-full center items-center sm:mt-20'>
        <h1 className='title-home'>
            Confiez vos rêves à des experts du Web
        </h1>
        <p className='text-home'>
            Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: <span className='span-home'>étude</span>, <span className='span-home'>UX</span>, <span className='span-home'>conception</span>, <span className='span-home'>design</span>, <span className='span-home'>developement</span>, <span className='span-home'>SEO</span>.  
            Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.
        </p>
    </div>
  )
}
