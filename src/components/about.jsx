import React from 'react'

export default function About() {
  return (
    <div className='home-container flex justify-center flex-col mt-80 h-60 w-full center items-center sm:mt-36'>
        <h1 className='title-about'>
            <span className='span-about'>Websitic, </span> 
            est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos <span className='span-home'>projets digitaux.</span>
        </h1>
        <p className='text-home sm:mt-20'>
            De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
            Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.
        </p>
    </div>
  )
}
