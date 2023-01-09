import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
   onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  //When you need to update a value and the value depends on the value before.
  // function handleLikeComment() {
  //  setLikeCount((state) => {
  //    return state + 1 
  //  });

  //  setLikeCount((state) => {
  //    return state + 1 
  //  });
  
  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/HeliaMonteiro.png" 
        alt=""
        onClick={() => alert('Hello there test!')}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Helia Santos</strong>
              <time title='11 of December at 4:35pm' dateTime="11-12-2022 4:35pm">Posted 1h ago</time>
            </div>

            <button onClick={handleDeleteComment} title='Delete'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
    
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
        
      </div>
    </div>
  )
}