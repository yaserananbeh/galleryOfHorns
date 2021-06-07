import React from 'react';
import HornedBeasts from './HornedBeasts';
import JsonData from '../assets/data.json';

class Main extends React.Component {
  render() {
    const data = JsonData;
    // console.log(data);
    return (
      <div>
        {
          data.map((value, idx) => {
            return (<HornedBeasts
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
