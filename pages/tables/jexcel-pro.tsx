import Layout from '../../layouts/Layout'
import React, { useRef, useEffect } from "react"
import jexcel from "jexcel-pro"
// import xls from "@jspreadsheet/xls" // not sure why this is breaking

import "jexcel-pro/dist/jexcel.css"
import "jsuites/dist/jsuites.css"
 
export default function JexcelPro() {
  const jexcelRef = useRef(null);
  const license =
    "OWU5NmEwNjY1ODQxNDg4ODYyMjRlYjU0YzBmMmI1MDAxNTI1NzJlZWQyN2RmN2RiZjE0NGRhY2M0NzIyNjlhYWI2YTBlNGFkMzhjM2E0ZDZkZDZlYjhkNjkyMTNjZWM5ODYzMDE1ZWEzYjlmM2M0N2NmNDNiYzcwM2MzNjNhNzcsZXlKdVlXMWxJam9pY0dGMWJDNW9iMlJsYkNJc0ltUmhkR1VpT2pFMk5ETTJOek0yTURBc0ltUnZiV0ZwYmlJNld5SmpjMkl1WVhCd0lpd2lhbk5tYVdSa2JHVXVibVYwSWl3aWQyVmlMbUZ3Y0NJc0lteHZZMkZzYUc5emRDSmRMQ0p3YkdGdUlqb2lNeUo5";
 
  useEffect(() => {
    if (!jexcelRef.current.jexcel) {
      jexcel(jexcelRef.current, [
        {
          data: [["Sheet1"]],
          minDimensions: [10, 10],
          license: license
        },
        {
          data: [["Sheet2"]],
          minDimensions: [10, 10],
          license: license
        }
      ]);
    }
  }, null);
 
  return (
    <Layout title="JExcel Pro">
      <h1>JExcel Pro</h1>
      <div ref={jexcelRef} />
      <br />
      <input
        type="button"
        value="Download"
        onClick={() => xls(jexcelRef.current, { version: true })}
      />
    </Layout>
  );
}