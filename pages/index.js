import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Is America A Democracy?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Is America A Democracy?
        </h1>

        <p className={styles.description}>
         Yes. As of 11/20/2020.
        </p>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
