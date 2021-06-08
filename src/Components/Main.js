import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passedData: this.props.data
    };
  }
  render() {
    return (
      <div>
        {
          this.state.passedData.map((value, idx) => {
            return (<HornedBeasts
              showFunc={this.props.showFunc}
              key={idx}
              title={value.title}
              url={value.image_url}
              desc={value.description}
            />);
          })
        }
      </div>
    );
  }
}
export default Main;
