import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import JsonData from './assets/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './Components/SelectedBeast';
import FilterForm from './Components/FilterForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: JsonData,
      show: false,
      element: {},
      filterValue: '0'
    };
  }

  show = (clickedBeast) => {
    this.setState({
      show: true,
      element: clickedBeast
    });
    // console.log(element);
  }
  hide = () => {
    this.setState({
      show: false
    });
  }
  setFilterValue = (value) => {
    this.setState({
      filterValue: value
    });
  }
  render() {
    // console.log(this.state.element);
    return (
      <div>
        <Header />
        <FilterForm setFilterFunc={this.setFilterValue} />
        {this.state.show && <SelectedBeast handleShow={this.state.show} hideFunc={this.hide} theBeast={this.state.element} />}
        <Main data={this.state.jsonData} showFunc={this.show} numOfHorns={this.state.filterValue} />
        <Footer />
      </div>
    );
  }
}
export default App;
