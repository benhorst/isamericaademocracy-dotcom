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
         Yes. As of 12/14/2020, America is still a democracy. Joe Biden is the president elect.
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
        The AP is a reliable source of news.
        <a href="https://apnews.com/article/election-2020-joe-biden-donald-trump-elections-john-thune-e8677a7ef5fa0c1892a0d5f78d850e95">[AP on President Elect Biden]</a>
        <br />
      </footer>
    </div>
  )
}
