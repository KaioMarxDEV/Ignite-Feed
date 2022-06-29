import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment} >
      <Avatar src="http://github.com/kaiomarxdev.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Carlos Gonzalez</strong>
              <time>Cerca de 1h atras</time>
            </div>

            <button title='Delete Comment' >
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bem Devon, Parabens!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={16} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
