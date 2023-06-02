import { useState } from 'react'
import {Download,Features,SectionWrapper} from "./components"
import assets from "../src/assets"
import styles from "../src/styles/Global"
//import './App.css'

const App=()=> {
  

  return (
    <>
 <SectionWrapper
  title="EA SPORTS FC 23 "
  description="Play The Beautiful Game.
  Join 25+ million people playing EA SPORTS 24
  "
  showBtn
  mockupImg={assets.homeHero}
  banner="banner"

 />
 <SectionWrapper
  title="CLUB CHALLENGES"
  description="Primere League Title Challenges in 2023"
 
  mockupImg={assets.homeCards}
  
  reverse

 />
 <Features/>
 <SectionWrapper
  title="PLAYER TO WATCH "
  description=" Erling Halland ,MVP player this season 2022/23
  "
 
  mockupImg={assets.feature}
  reverse
 

 />
 <SectionWrapper
title="EARTH 2023"
description="This is a basic practice of react programming language.All the image and text that are written to create this landing page is taken from saved pictures and text."
mockupImg={assets.mockup}
banner="banner02"
 />
 <Download/>
 <div className='px-4 py-2 justify-center items-center bg-primary
 flex-col text-center banner04
 '>
 <p className={`${styles.pText} ${styles.whiteText}`}>ALL RIGHTS RESERVED © 2023</p>
 <span className='bold'>Subodh Basnet (nbaallstar7)</span>

 </div>
    </>
  )
}

export default App
