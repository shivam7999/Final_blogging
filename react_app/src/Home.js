import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: articles } = useFetch('http://localhost:5000/api/articles');
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { articles && <ArticleList articles={articles} /> }
    </div>
  );
}
 
export default Home;