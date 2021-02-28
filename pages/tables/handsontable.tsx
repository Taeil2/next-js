import Layout from '../../layouts/Layout'

import { HotTable } from '@handsontable/react';

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
    <Layout title="Handsontable">
      <h1>Handsontable</h1>
      <div id="hot-app">
        <HotTable settings={settings} />
      </div>
    </Layout>
  )
}

export default Handsontable
