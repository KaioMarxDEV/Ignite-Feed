import styles from './header.module.css'

import igniteSVG from '../../assets/ignite.svg'

export function Header() {
  return (
    <header className={styles.header} >
      <img src={igniteSVG} alt='ignite icon' />
      <strong>
        Ignite Feed
      </strong>
    </header>
  )
}