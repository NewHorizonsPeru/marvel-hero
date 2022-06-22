import React from 'react';

class FormHero extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div className="col-sm-5">
        <br />
        <div className="panel panel-default">
          <div className="panel panel-body form-horizontal payment-form">
            <div className="form-group">
              <label htmlFor="heroName" className="col-sm-3 control-label">
                Contador 1
              </label>
              <div className="col sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="txtNumberIncrease"
                  value={this.state.counter}
                />
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="col sm-12 text-left">
                <button
                  type="button"
                  className="btn btn-lg btn-success mr-1"
                  onClick={() => {
                    this.setState({
                      counter: this.state.counter + 1,
                    });
                  }}
                >
                  Incrementar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormHero;
