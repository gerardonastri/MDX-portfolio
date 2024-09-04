import path from "path";
import fs from 'fs'
import matter from "gray-matter";

export type Post = {
    metadata: PostMetadata
    content: string
  }
  
  export type PostMetadata = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug: string
  }

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export async function getPostBySlug(slug: string): Promise<Post | null> {
   try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'})

    const {data, content} = matter(fileContent)

    return {metadata: {...data, slug}, content}
   } catch (error) {
    return null
   }
}

//prende un limite per quanti post prendere
export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const files = fs.readdirSync(rootDirectory); //legge il contenuto della root directory (i posts)

  const posts = files
    .map(file => getPostMetadata(file)) //prende i metadata del post
    .sort((a, b) => { //li ordiniamo in base alla data di publicazione
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) { //se c'è un limite ritorna solo quel tot di post
    return posts.slice(0, limit)
  }

  return posts
}

export function getPostMetadata(filepath: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath) //legge il contenuto del post (file)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' }) //prende il contenuto del post (file)
  const { data } = matter(fileContent)
  return { ...data, slug } //ritorna solo i metadata e non il corpo del post
}