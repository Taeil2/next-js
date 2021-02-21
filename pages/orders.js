import Head from '../components/head'
import Header from '../components/header';
import Footer from '../components/footer';
import TableView from '../components/tableView'

let data = 'Order 1: 5 shoes, $10'

export default function Orders() {
  return (
    <div>
        <Head pageName="Orders" />
        <Header />

        <main>
            <TableView title="Orders" data={data} />
        </main>

        <Footer />
    </div>
  )
}
