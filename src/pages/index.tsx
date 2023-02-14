import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>kaytitulaer3820</title>
        <meta name="description" content="kaytitulaer3820s personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="p_FtM91U5mf3N6qPrpPU3OPylQjjxMRMHT-Myhqrlig" />
      </Head>
      <main className={styles.main}>
        <h1>Comming soon!</h1>
        <br />
        <h2>Im happy that you were interested in my portfolio but im still working on it so yhea. Come back later!</h2>
      </main>
    </>
  )
}
