import Head from '../components/head'
import Header from '../components/header';
import Footer from '../components/footer';
import TableView from '../components/tableView'

let data = 'Project 1: Finish products. Due date: 5/5/21'

export default function Shipments() {
  return (
    <div>
      <Head pageName="Projects" />
      <Header />

      <main>
          <TableView title="Shipments" data={data} />
      </main>

      <Footer />
    </div>
  )
}
