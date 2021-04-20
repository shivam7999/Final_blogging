import { useState } from 'react';
import {useHistory} from 'react-router-dom';

const Create=()=>{
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [description, setDescription] = useState('');
  const [taglist, setTaglist] = useState('');
  const [isPending,setisPending]=useState(false);
  const history=useHistory();


  const handlesubmit=(e)=>{
  	e.preventDefault();
  	const blog={title,body,description,taglist};
  	setisPending(true);
  	fetch('http://localhost:5000/api/articles',{
  		method:'POST',
  		headers:{"Content-Type":"application/json"},
  		body: JSON.stringify(blog)
  	})
  	.then(()=>{
  		setisPending(false);
  		// history.go(-1);
  		history.push('/');
  	})
  }
	return (
		<div className="create">
		   <h2>Add a New Article</h2>
      <form onSubmit={handlesubmit}>
        <label>Article Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Article Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Article Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Article Taglist:</label>
        <textarea
          required
          value={taglist}
          onChange={(e) => setTaglist(e.target.value)}
        ></textarea>
        {!isPending&&<button>Add Article</button>}
        {isPending&&<button disabled>Making Changes...</button>}
      </form>
		</div>
		);
}
export default Create;