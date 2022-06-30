import styles from './App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/kaiomarxdev.png',
      name: 'kaio marx',
      role: 'Front End Developer'
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', text: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-06-29 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/kaiomarxdev.png',
      name: 'kaio marx',
      role: 'Front End Developer'
    },
    content: [
      {type: 'paragraph', text: 'Fala galeraa 👋'},
      {type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', text: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-06-30 17:00:00')
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
