import React from 'react';
import HeroContainer from '../components/HeroContainer';
import { dataHeroes } from '../data/dataHeroes';
class Heroes extends React.Component {
  constructor() {
    super();
    this.state = {
      heroes: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.getDataHeroes();
    }, 5000);
  }

  getDataHeroes = () => {
    this.setState({
      heroes: dataHeroes,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-success btn-lg float-right ml-auto">
                Nuevo
              </button>
            </div>
          </div>
          <br />
        </div>
        {this.state.heroes ? (
          <HeroContainer heroes={this.state.heroes} />
        ) : (
          <h3 align="center">⏳ Cargando...</h3>
        )}
      </>
    );
  }
}

export default Heroes;
