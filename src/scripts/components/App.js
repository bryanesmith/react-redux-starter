import React from 'react';

const svgSample = 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-2">
          <img className="sample-svg" src={svgSample} />
        </div>
        <div className="col-sm-10">
          <h1>Doh! <span className="glyphicon glyphicon-cutlery"/></h1>
        </div>
      </div>
    );
  }
}
