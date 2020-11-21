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
         Yes. As of 11/20/2020, America is still a democracy.
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
        If you want to know what's really going on, look at what outsiders say. Here's the BBC. The BBC has way less vested interest than anything domestic, yeah? You don't trust the local media? OK. Try something overseas that has no reason to lie to you.
        <a href="https://www.bbc.com/news/election-us-2020-54783016">[BBC]</a>
        <br />
      </footer>
    </div>
  )
}
