import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class SelectedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.handleShow,
      beast: this.props.theBeast,
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
    this.props.hideFunc();
  };
  render() {

    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.state.beast.title}</Modal.Title>
          </Modal.Header>
          <img src={this.state.beast.url} alt={this.state.beast.title} />
          <Modal.Body>{this.state.beast.desc}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
