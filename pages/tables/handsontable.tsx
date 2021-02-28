import Head from '../../components/head'
import Header from '../../components/header'
import Footer from '../../components/footer'

import { HotTable } from '@handsontable/react'
import 'handsontable/dist/handsontable.full.css'

const data = [
  ["", "Ford", "Volvo", "Toyota", "Honda"],
  ["2016", 10, 11, 12, 13],
  ["2017", 20, 11, 14, 13],
  ["2018", 30, 15, 12, 13]
]

const settings = {
  data: data,
  rowHeaders: true,
  colHeaders: true,
  licenseKey: 'non-commercial-and-evaluation',
  width: '600',
  height: '300'
}

const Handsontable = () => {
  return (
    <div>
      <Head pageName="Handsontable" />
      <Header />

      <h1>Handsontable</h1>
      <div id="hot-app">
        <HotTable settings={settings} />
      </div>

      <Footer />
    </div>
  )
}

export default Handsontable
