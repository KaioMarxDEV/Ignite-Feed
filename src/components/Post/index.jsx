import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Separator } from "../Separator";
import styles from "./post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateFormattedRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCommentSubmit(e) {
    e.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewCommentOnChange(e) {
    setNewComment(e.target.value);
  }

  function deleteComment(comment) {
    console.log(comment);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt}>
          {publishedDateFormattedRelativeToNow} atras
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.text}</p>;
          } else {
            return (
              <p>
                <a href="#">{line.text}</a>
              </p>
            );
          }
        })}
      </div>

      <Separator />

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>

        <textarea
          value={newComment}
          onChange={handleNewCommentOnChange}
          placeholder="Clique aqui para escrever..."
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
