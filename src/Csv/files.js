import React from 'react';
import Papa from 'papaparse';
import { CsvToHtmlTable,csvfile } from 'react-csv-to-table';
import './files.css';

class Csv extends React.Component {
  constructor() {
    super();
    this.state = { csvfile: "",csvdata:"" };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    var file = event.target.files[0];
    var reader = new FileReader();
    let csvFileText = '';
    reader.readAsText(file);
    reader.onload = (event) => {
      // The file's text will be printed here
      console.log(event.target.result);
      csvFileText = event.target.result;
       this.setState({
        csvfile: csvFileText
      });
    }
  };

  importCSV = () => {
    const { csvfile } = this.state;
    this.setState({
      csvdata: csvfile
    })
    // Papa.parse(csvfile, {
    //   complete: this.updateData,
    //   header: true,
    //   download: true,
    // });
  };

  updateData(result) {
    var data = result.data;
    console.log(data);
    this.setState({
      csvdata: data
    })
  }

  render() {
    console.log(this.state.csvdata);
    return (
      <div className="Appcss">
        <p><b><u> Manual Pick Fail</u></b></p>
        <label class="fileContainer">
        Click the CSV file  here
            <input className="csvinput" type="file" ref={input => {this.filesInput = input;}} name="file" placeholder={null}
              onChange={this.handleChange}
            />
        </label>
        <button class="filebtn" onClick={this.importCSV}> View </button>
        <div className="table-container">
        {(this.state.csvdata) && <CsvToHtmlTable data={this.state.csvdata} csvDelimiter="," tableClassName="table table-striped table-hover"/>}
        </div>
      </div>
    );
  }
}

export default Csv;
