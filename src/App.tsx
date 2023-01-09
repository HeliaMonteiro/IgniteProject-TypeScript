import { Header } from './components/Header';
import  { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/HeliaMonteiro.png",
      name: "Helia Santos",
      role: "Junior Software Developer",
    },
    content: [
      { type: "paragraph", content: "Hi Guys 👋", },
      { type: 'paragraph', content: "I've just add a new project to my portfolio. it's a project that I did on NLW Return, , Rocketseat's event. The project name is DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishAt: new Date("12-12-2022 20:09:50"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/JoaoSousaJS.png",
      name: "Joao Sousa",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Hi Devs 👋", },
      { type: 'paragraph', content: "Have a look on my new project, I appreciate your feedback, thanks! 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishAt: new Date("10-12-2022 17:21:23"),
  },
];
      
// JSX = Javascript + XML (HTML)
export function App() {
  
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishAt={post.publishAt}
             /> 
            )
          
          })}
        </main>
      </div>
    </div>
  )
}
