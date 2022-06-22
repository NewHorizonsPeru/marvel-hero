import React from 'react';
import ButtonNewHero from '../components/ButtonNewHero';
import HeroContainer from '../components/HeroContainer';
import PageMessage from '../components/PageMessage';
import MarvelService from '../core/services/MarvelService';
import LoaderHeroes from '../components/LoaderHeroes';
class Heroes extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      heroes: undefined,
      error: undefined,
    };
  }

  componentDidMount() {
    this.getDataHeroes();
  }

  getDataHeroes = async () => {
    try {
      const heroes = await MarvelService.heroes.getAll();
      this.setState({
        heroes: heroes,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <LoaderHeroes />;
    }
    if (this.state.error) {
      return <PageMessage message={this.state.error.message} />;
    }
    if (this.state.heroes) {
      if (this.state.heroes.length > 0) {
        return (
          <>
            <ButtonNewHero />
            <br />
            <HeroContainer heroes={this.state.heroes} />
          </>
        );
      } else {
        return <PageMessage message="No existen registros. 😔" />;
      }
    }
  }
}

export default Heroes;
