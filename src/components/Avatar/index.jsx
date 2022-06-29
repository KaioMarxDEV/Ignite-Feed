import styles from './avatar.module.css';

export function Avatar(props) {
  return (
    <img className={styles.avatar} src={props.src} />
  )
}
