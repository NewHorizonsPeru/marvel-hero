import React from 'react';

class HeroElement extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-danger">
              {this.props.hero.heroName}
            </strong>
            <h3 className="mb-0">{this.props.hero.realName}</h3>
            <div className="mb-1 text-muted">{this.props.hero.description}</div>
          </div>
          <div className="col-auto d-none d-lg-block hero-img">
            <img
              src={this.props.hero.photoUrl}
              className="bd-placeholder-img"
              width="200"
              height="250"
              alt="Marvel Hero"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HeroElement;
