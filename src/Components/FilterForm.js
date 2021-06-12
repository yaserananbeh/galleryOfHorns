import React from 'react';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }
  handleOption = (e) => {
    this.setState({
      selectedOption:e.target.value
    });
    this.props.setFilterFunc(e.target.value);
  }

  render() {
    return (
      <div className='filterSelect' style={{margin:'50px auto'}}>
        <Form.Control aria-label="Default select example" as='select'
          onClick={(e)=>this.handleOption(e)}
        >
          <option value="0">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">More</option>
        </Form.Control>
        <p>Select the number of hornes</p>
      </div>
    );
  }
}

export default FilterForm;
