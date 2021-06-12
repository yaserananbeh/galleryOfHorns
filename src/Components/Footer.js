import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (

      <footer>
        <Navbar className="justify-content-center dark" bg="dark" variant="dark" activeKey="/home">
          <p style={{ color: 'skyblue' }}>CopyRight 2021 &copy; Yaser Al-Ananbeh</p>
        </Navbar>
      </footer>
    );
  }
}
export default Footer;
