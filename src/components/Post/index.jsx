import { Separator } from '../Separator'
import styles from './post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/kaiomarxdev.png" />
          <div className={styles.authorInfo} >
            <strong>Kaio Marx</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio" dateTime="2022-05-11 08:00:00" >Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <Separator />

      <form className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>

        <textarea 
          placeholder='Clique aqui para escrever...'
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}