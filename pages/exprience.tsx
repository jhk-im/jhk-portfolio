import Link from 'next/link'
import Layout from '../components/Layout'

const ExperiencePage = () => (
  <Layout title="Experience | Next.js + TypeScript Example">
    <h1>Experience</h1>
    <p>This is the experience page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export default ExperiencePage