import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>TeacherLab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="p-4 bg-blue text-white uppercase text-xl tracking-wider">
        Teacher Lab
      </nav>
      <main>{children}</main>
      {/* <footer>footer</footer> */}
    </>
  )
}