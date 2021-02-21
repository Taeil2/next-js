import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head pageName="Zenport" />
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Zenport!
        </h1>

        <div className={styles.grid}>
          <Link href="/orders">
            <a className={styles.card}>
              <h3>Orders &rarr;</h3>
            </a>
          </Link>

          <Link href="/projects">
            <a className={styles.card}>
              <h3>Projects &rarr;</h3>
            </a>
          </Link>

          <Link href="/shipments">
            <a className={styles.card} >
              <h3>Shipments &rarr;</h3>
            </a>
          </Link>
          
        </div>
      </main>

      <Footer />
      
    </div>
  )
}
