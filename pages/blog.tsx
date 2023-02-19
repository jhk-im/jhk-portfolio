import Link from 'next/link'
import Layout from '../components/Layout'

const BlogPage = () => (
  <Layout title="Blog | Next.js + TypeScript Example">
    <h1>Blog</h1>
    <p>This is the blog page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export default BlogPage