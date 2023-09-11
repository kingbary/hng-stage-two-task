import HeroContent from './HeroContent'
import Navigation from './Navigation'
import styles from './hero.module.css'

function HeroSection() {
  return (
    <header className={styles.header}>
       <Navigation />
       <HeroContent />
    </header>
  )
}

export default HeroSection
