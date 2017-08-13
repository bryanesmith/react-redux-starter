import React from 'react';

const svgSample = 'https://vignette2.wikia.nocookie.net/ssb/images/3/30/MarioSymbol.svg/revision/latest?cb=20150831014521';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-2">
          <img className="sample-svg" src={svgSample} />
        </div>
        <div className="col-sm-10">
          <h1>Foo <span className="glyphicon glyphicon-cutlery"/></h1>
        </div>
      </div>
    );
  }
}
