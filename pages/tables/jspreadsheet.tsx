import Head from '../../components/head'
import Header from '../../components/header'
import Footer from '../../components/footer'

import React from 'react'

import jexcel from 'jspreadsheet-ce'
// import jexcel from 'jexcel'
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
      <div>
        <Head pageName="Jspreadsheet" />
        <Header />

        <div ref={this.wrapper} />
        <br />
        <input
          type="button"
          value="Add new row"
          onClick={() => this.addRow()}
        />

        <Footer />
      </div>
    );
  }
}

var options = {
  data: [[]],
  minDimensions: [10, 10]
};