import React from 'react';
import ModalSaveHero from './ModalSaveHero';
class FormHero extends React.Component {
  render() {
    return (
      <div className="col-sm-5">
        <br />
        <div className="panel panel-default">
          <div className="panel panel-body form-horizontal payment-form">
            <div className="form-group">
              <label htmlFor="heroName" className="col-sm-3 control-label">
                Hero Name
              </label>
              <div className="col sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="heroName"
                  value={this.props.formValues.heroName}
                  onChange={this.props.onChangeInput}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="realName" className="col-sm-3 control-label">
                Real Name
              </label>
              <div className="col sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="realName"
                  value={this.props.formValues.realName}
                  onChange={this.props.onChangeInput}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="photoUrl" className="col-sm-3 control-label">
                Photo Url
              </label>
              <div className="col sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="photoUrl"
                  value={this.props.formValues.photoUrl}
                  onChange={this.props.onChangeInput}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description" className="col-sm-3 control-label">
                Description
              </label>
              <div className="col sm-9">
                <textarea
                  className="form-control"
                  name="description"
                  value={this.props.formValues.description}
                  onChange={this.props.onChangeInput}
                />
              </div>
            </div>
            <br />
            <ModalSaveHero
              modalIsOpen={this.props.modalIsOpen}
              onPostSaveHero={this.props.onPostSaveHero}
            />
            <div className="form-group">
              <div className="col sm-12 text-left">
                <button
                  type="button"
                  className="btn btn-lg btn-primary mr-1"
                  onClick={this.props.onSaveHero}
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-warning mr-1"
                  onClick={this.props.onGoBack}
                >
                  Atras
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
