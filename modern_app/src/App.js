import React from 'react'
import styles from './style'
import {
  Navbar,
  Billing,
  Buisness,
  // Button,
  CardDeal,
  Clients,
  CTA,
  // FeedbackCard,
  Footer,
  // GetStarted,
  Hero,
  Stats,
  Testimonials
} from "./components"

const App = () => (
  <div className='text-white bg-primary w-full overflow-hidden md:pl-7 lg:pl-7 xl:pl-7'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} px-12`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Buisness/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>
)


export default App