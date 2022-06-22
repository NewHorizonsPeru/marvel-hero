import React from 'react';

import '../styles/Hero.css';

class PreviewHero extends React.Component {
  state = {
    counter: 50,
  };

  handleClickDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div className="col-sm-7">
        <br />
        <div className="panel panel-default">
          <div className="panel panel-body form-horizontal payment-form">
            <div className="form-group">
              <label htmlFor="heroName" className="col-sm-3 control-label">
                Contador 2
              </label>
              <div className="col sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="txtNumberDecrease"
                  value={this.state.counter}
                />
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="col sm-12 text-left">
                <button
                  type="button"
                  className="btn btn-lg btn-primary mr-1"
                  onClick={this.handleClickDecrease}
                >
                  Disminuir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewHero;
