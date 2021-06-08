import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import JsonData from './assets/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './Components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: JsonData,
      show: false,
      element: {}
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

  render() {
    // console.log(this.state.element);
    return (
      <div>
        <Header />
        {this.state.show && <SelectedBeast handleShow={this.state.show} hideFunc={this.hide} theBeast={this.state.element} />}
        <Main data={this.state.jsonData} showFunc={this.show} />
        <Footer />
      </div>
    );
  }
}
export default App;
