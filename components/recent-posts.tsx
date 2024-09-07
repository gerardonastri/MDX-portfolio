
import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/Posts'
import * as motion from "framer-motion/client"

export default async function RecentPosts() {
  const posts = await getPosts(4) //prendo solo 4 posts

  return (
    <motion.section  
      initial={{opacity: 0}}
      whileInView={{opacity: 100}}
      transition={{duration: 0.5, ease: "easeIn"}}
      className='pb-24'
    >
      <div>
        <h2 className='title mb-12'>Recent posts</h2>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All posts</span>
        </Link>
      </div>
    </motion.section >
  )
}
