import Head from '../../components/head'
import Header from '../../components/header'
import Footer from '../../components/footer'

import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-enterprise/dist/styles/ag-grid.css';
import 'ag-grid-enterprise/dist/styles/ag-theme-alpine.css';

const AGGrid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  const onGridReady = params => {
      setGridApi(params.api);
      setGridColumnApi(params.columnApi);
  }

  return (
    <div>
      <Head pageName="AG Grid Enterprise" />
      <Header />

      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <h1>AG Grid</h1>
        <AgGridReact
            onGridReady={onGridReady}
            rowData={rowData}>
            <AgGridColumn field="make"></AgGridColumn>
            <AgGridColumn field="model"></AgGridColumn>
            <AgGridColumn field="price"></AgGridColumn>
        </AgGridReact>
      </div>

      <Footer />
    </div>
  );
};

export default AGGrid