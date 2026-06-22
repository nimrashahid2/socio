import PostCard from "./cards/PostCard"
import { posts } from "../../data/posts"

const Feed = () => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  )
}

export default Feed
