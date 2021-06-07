import React from 'react';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      numberOfClicks:0
    };
  }
  handleClick=()=>{
    let numOfClicks=this.state.numberOfClicks;
    this.setState({
      numberOfClicks:numOfClicks+1,
    });
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img style={{width: '300px'}} src={this.props.url} alt='UniWhal' onClick={this.handleClick} />
        <p>{this.props.desc}</p>
        <p>❤️ {this.state.numberOfClicks}</p>
      </div>
    );
  }
}
export default Main;
