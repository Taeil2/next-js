import Layout from '../../layouts/Layout'
import React from 'react'

// import jexcel from 'jspreadsheet-ce'
import jexcel from 'jexcel'
import 'jspreadsheet-ce/dist/jexcel.css'

export default class Jspreadsheet extends React.Component {
  constructor(props) {
    super(props);
    this.options = props.options;
    this.wrapper = React.createRef();
  }

  options = {
    data: [[]],
    minDimensions: [10, 10]
  };

  componentDidMount = function() {
    this.el = jexcel(this.wrapper.current, this.options);
  };

  addRow = function() {
    this.el.insertRow();
  };

  render() {
    return (
      <Layout title="JExcel Pro">>
        <div ref={this.wrapper} />
        <br />
        <input
          type="button"
          value="Add new row"
          onClick={() => this.addRow()}
        />
      </Layout>
    );
  }
}

var options = {
  data: [[]],
  minDimensions: [10, 10]
};




/*
const Jspreadsheet = () => {
  const data = [
    ['Mazda', 2001, 2000],
    ['Pegeout', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
  ];
  
  jspreadsheet(document.getElementById('my-spreadsheet'), {
      data:data,
      columns:[
          { title:'Model', width:300 },
          { title:'Price', width:80 },
          { title:'Model', width:100 }
      ]
  });

  return (
    <Layout title="Jspreadsheet">
      <h1>Jspreadsheet</h1>
      <div id='my-spreadsheet'></div>
    </Layout>
  )
}

export default Jspreadsheet
*/