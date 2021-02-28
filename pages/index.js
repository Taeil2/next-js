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
        <p>Refer to this <a href="https://docs.google.com/spreadsheets/d/1uqbYOnjOCi4x4jwIJtFLb9V7T1C8LhT9DmDc9akSg5k/edit#gid=0" target="_blank">sheet</a>. Jexcel Pro is the paid version of Jspreadsheet.</p>
        <p>
          <Link href="/tables/handsontable">
            <a>Handsontable</a>
          </Link>
        </p>
        <p>
          <Link href="/tables/ag-grid-community">
            <a>AG Grid Community</a>
          </Link>
        </p>
        <p>
          <Link href="/tables/ag-grid-enterprise">
            <a>AG Grid Enterprise</a>
          </Link>
        </p>
        <p>
          <Link href="/tables/jspreadsheet">
            <a>Jspreadsheet</a>
          </Link>
        </p>
        <p>
          <Link href="/tables/jexcel-pro">
            <a>Jexcel Pro</a>
          </Link>
        </p>
        <p>
          <Link href="/tables/react-table">
            <a>React Table</a>
          </Link>
        </p>
      </main>



      <Footer />
      
    </div>
  )
}
