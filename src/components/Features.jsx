import React from 'react';
import assets from "../assets";
import styles from "../styles/Global"
const FeatureCard=({iconText,iconUrl})=>{
  return(
    <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>

    </div>
  )

}
const Features = () => {
  return (
   <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
   <div className={`${styles.subSection} flex-col text-center`}>
   <div>
    <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Programming Languages</h1>
    <p className={`${styles.pText} ${styles.whiteText}`}>Coding Language Required For This Page</p>
   </div>
   <div className={styles.flexWrap}>
   <FeatureCard iconUrl={assets.react}
   iconText="React "

   />
   <FeatureCard iconUrl={assets.javascript}
   iconText="JavaScript"

   />

   </div>

   </div>

   </div>
  )
}

export default Features
