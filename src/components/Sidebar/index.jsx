import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { Separator } from '../Separator';
import styles from './sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar} >
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40'
      />

      <div className={styles.profile}>
        <Avatar src="https://randomuser.me/api/portraits/women/2.jpg" />
        <strong>Lola Fisher</strong>
        <span>UI developer</span>
      </div>

      <Separator />

      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}
