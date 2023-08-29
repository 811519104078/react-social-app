import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import DataContext from './Context/DataContext'

const Edit = ({
        
}) => {
  const {posts, handleEdit, editBody,
    setEditBody,editTitle, setEditTitle} = useContext(DataContext)
    const {id} = useParams()
    const post = posts.find(post=> (post.id).toString()===id)

    useEffect(()=> {
      if(post){
        setEditTitle(post.title)
        setEditBody(post.body)
      }
    },[post,setEditBody,setEditTitle])
  return (
    <main className='NewPost'>
      {
        editTitle &&
        <>
            <h2>Edit Post</h2>
            <form className='newPostForm' 
             onSubmit={(e)=>e.preventDefault()} >
             < label htmlFor='postTitle'>Title:</label>
             <input
                 id='postTitle'
                 type='text'
                 required
                 value={editTitle}
                 onChange={(e)=> setEditTitle(e.target.value)} />
              <textarea
                   id='postBody'
                   required
                   value={editBody}   
                   onChange={(e)=>setEditBody(e.target.value)} />
               <button type='submit' onClick={()=> handleEdit(post.id)}>
                Submit
                </button>  
                </form>  
        </>
      }
      {
        !editTitle &&
        <>
        <p>
          No posts available
        </p>
        </>
      }
      
    </main>
  )
}

export default Edit