import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div className="article-preview" key={article._id} >
          <Link to={`/article/${article._id}`}>
            <h2>{ article.title }</h2>
            <p>Description - { article.description }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ArticleList;