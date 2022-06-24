import React, { useEffect, useState } from 'react';
import ButtonNewHero from '../components/ButtonNewHero';
import HeroContainer from '../components/HeroContainer';
import PageMessage from '../components/PageMessage';
import MarvelService from '../core/services/MarvelService';
import LoaderHeroes from '../components/LoaderHeroes';

const Heroes = () => {
  const [heroes, setHeroes] = useState({
    loading: true,
    heroes: undefined,
    error: undefined,
  });

  const getDataHeroes = async () => {
    try {
      const heroes = await MarvelService.heroes.getAll();
      setHeroes({
        heroes: heroes,
        loading: false,
      });
    } catch (error) {
      setHeroes({
        loading: false,
        error: error,
      });
    }
  };

  useEffect(() => {
    getDataHeroes();
  }, []);

  if (heroes.loading) {
    return <LoaderHeroes />;
  }
  if (heroes.error) {
    return <PageMessage message={heroes.error.message} />;
  }
  if (heroes.heroes) {
    if (heroes.heroes.length > 0) {
      return (
        <>
          <ButtonNewHero />
          <br />
          <HeroContainer heroes={heroes.heroes} />
        </>
      );
    } else {
      return <PageMessage message="No existen registros. 😔" />;
    }
  }
};

export default Heroes;
