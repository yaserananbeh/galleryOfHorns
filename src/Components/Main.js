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
            // console.log(Number(this.props.numOfHorns));
            // console.log(value.horns);
            if (Number(this.props.numOfHorns) === value.horns) {
              return (<HornedBeasts
                showFunc={this.props.showFunc}
                key={idx}
                title={value.title}
                url={value.image_url}
                desc={value.description}
              />);
            }
            else if(Number(this.props.numOfHorns==='0')){
              return (<HornedBeasts
                showFunc={this.props.showFunc}
                key={idx}
                title={value.title}
                url={value.image_url}
                desc={value.description}
              />);
            }
            return '';

          })
        }
      </div>
    );
  }
}
export default Main;
