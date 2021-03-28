import Head from 'next/head'
import Layout from '../components/layout'
import Login from '../components/login';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login></Login>
    </Layout>
  )
}
