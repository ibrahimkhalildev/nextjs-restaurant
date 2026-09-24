import React from 'react'

const Post = ({ post }) => {
  return (
    <div className='border border-gray-400 rounded p-2 m-2'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
