import Head from '../components/head'
import Header from '../components/header';
import Footer from '../components/footer';
import TableView from '../components/tableView'

let data = 'Shipment 1: Maersk 2847, eta: 12/14/21'

export default function Shipments() {
  return (
    <div>
      <Head pageName="Shipments" />
      <Header />

      <main>
          <TableView title="Shipments" data={data} />
      </main>

      <Footer />
    </div>
  )
}
