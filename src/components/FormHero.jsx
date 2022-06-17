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
                Nombre Heroe
              </label>
              <div className="col sm-9">
                <input type="text" className="form-control" name="heroName" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="realName" className="col-sm-3 control-label">
                Nombre Real
              </label>
              <div className="col sm-9">
                <input type="text" className="form-control" name="realName" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="photoUrl" className="col-sm-3 control-label">
                Imagen
              </label>
              <div className="col sm-9">
                <input type="text" className="form-control" name="photoUrl" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description" className="col-sm-3 control-label">
                Reseña
              </label>
              <div className="col sm-9">
                <textarea className="form-control" name="description" />
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="col sm-12 text-left">
                <button type="button" className="btn btn-lg btn-primary mr-1">
                  Guardar
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
