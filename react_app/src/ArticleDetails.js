import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ArticleDetails = () => {
  const { id } = useParams();
  const { data: article, error, isPending } = useFetch('http://localhost:5000/api/articles/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:5000/api/articles/' + article._id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="article-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { article && (
        <article>
          <h2>{ article.title }</h2>
          <p>Description - { article.description }</p>
          <div>{ article.body }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default ArticleDetails;