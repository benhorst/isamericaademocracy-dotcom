import Head from 'next/head'
import Image from 'next/image'
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
         Yes. As of 01/12/2020, America is still a democracy.
        </p>
        <div>
          <Image
        src="/national_votes-nc.png"
        alt="the 2020 popular vote tally for biden winning 2020"
        width="500"
        height="500"
      />
        </div>
      </main>
      <footer className={styles.footer}>
        The 2020 vote has been certified by Congress.
      </footer>
    </div>
  )
}
