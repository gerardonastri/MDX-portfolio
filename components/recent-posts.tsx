
import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/Posts'
import Reveal from '@/utils/Reveal'

export default async function RecentPosts() {
  const posts = await getPosts(4) //prendo solo 4 posts

  return (
    <section
      className='pb-24'
    >
      <div>
        <Reveal>
          <h2 className='title mb-12'>Recent posts</h2>
        </Reveal>
        <Reveal>
          <Posts posts={posts} />
        </Reveal>
        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <Reveal>
            <span>All posts</span>
          </Reveal>
        </Link>
      </div>
    </section >
  )
}
