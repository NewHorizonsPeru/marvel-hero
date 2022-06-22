import React from 'react';

class FormHero extends React.Component {
  render() {
    return (
      <div className="col-sm-5">
        <br />
        <div className="panel panel-default">
          <div className="panel panel-body form-horizontal payment-form">
            <div className="form-group">
              <label htmlFor="heroName" className="col-sm-3 control-label">
                Contador
              </label>
              <div className="col sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="txtNumberIncrease"
                  value={this.props.counter}
                />
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="col sm-12 text-left">
                <button
                  type="button"
                  className="btn btn-lg btn-success mr-1"
                  onClick={this.props.handleClickIncrease}
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
