import React from 'react';

const svgSample = 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello =)</h1>
        <img className="sample-svg" src={svgSample} />
      </div>
    );
  }
}
