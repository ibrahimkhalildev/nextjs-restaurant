import React from 'react'
import Post from '../components/Post'

const PostPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div>
      <h2 className='text-2xl text-blue-900'>Post Page: {posts.length}</h2>
      <div className='grid grid-cols-3 gap-1'>
        {posts.map(post =><Post key={post.id} post={post}></Post>)}
      </div>
    </div>
  )
}

export default PostPage
