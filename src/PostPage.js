import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './Context/DataContext';
const PostPage = () => {
  const {posts,handleDelete} = useContext(DataContext)
  const {id} = useParams();
  const post = posts.find(post=>(post.id).toString() === id)
  return (
    
    <main className='PostPage'>
        <article className='post'>
        {
          post &&
          <>
              <h2>{post.title}</h2>
              <p className='postDate'>{post.datetime}</p>
              <p className='postBody'>{post.body}</p>
              <Link to={`/edit/${post.id}`}><button className='editButton'>
                Edit</button> </Link>
              <button className='delButton' onClick={()=>
                 handleDelete(post.id)}>Delete post</button>
          </>
        }
        {!post &&
        <>
        <h2>Page not Found</h2>
        <Link to='/'>Visit Home</Link>
        </>}
        </article>
    </main>
  )
}

export default PostPage 