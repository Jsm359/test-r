import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import { PostItem } from './PostItem'

export const PostContainer = () => {
  const [limit, setLimit] = useState(100)
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3)
    // }, 200)
  }, [])

  const Create = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost) 
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div>
        <button onClick={Create}>Добавить пост</button>
        {isLoading && <h1>Загрузка...</h1>}
        {error && <h1>Ошибка</h1>}
        {posts && posts.map(post => 
          <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
        )}
      </div>
    </div>
  )
}
