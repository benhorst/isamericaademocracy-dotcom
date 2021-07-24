import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Is America A Democracy?</title>
        <link rel="icon" href="/flag.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Is America A Democracy?
        </h1>

        <p className={styles.description}>
         Yes. As of 01/12/2021, America is still a democracy.
        </p>
        <div>
          <Image
          width="800"
          height="450"
          layout="intrinsic"
        src="/vp_pelosi_certify.jpg"
        alt="Pence and Pelosi preside over joint session of Congress to ratify President-elect Joe Biden's 306-232 Electoral win."
      />
        </div>
      </main>
      <footer className={styles.footer}>
        The 2020 vote has been certified by Congress.
      </footer>
    </div>
  )
}
