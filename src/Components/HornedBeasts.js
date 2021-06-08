import React from 'react';
import Card from 'react-bootstrap/Card';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0
    };
  }
  handleClick = () => {
    let numOfClicks = this.state.numberOfClicks;
    this.setState({
      numberOfClicks: numOfClicks + 1,
    });
    this.props.showFunc(this.props);
  }
  render() {
    return (
      <Card style={{ width: '18rem', display: 'inline-block' }} >
        <Card.Img variant="top" src={this.props.url} alt={this.props.title} onClick={this.handleClick} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.desc}
          </Card.Text>
          <Card.Text>
            ❤️ {this.state.numberOfClicks}
          </Card.Text>
        </Card.Body>
      </Card>

    );
  }
}
export default Main;
