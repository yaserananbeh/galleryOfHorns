import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar className="justify-content-center dark" bg="dark" variant="dark" activeKey="/home">
          <h1 style={{color:'skyblue'}}>Gallery Of Hornes</h1>
        </Navbar>
      </header>
    );
  }
}
export default Header;
