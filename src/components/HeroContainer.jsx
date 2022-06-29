import { useState } from 'react';

import HeroElement from './HeroElement';
import ButtonNewHero from './ButtonNewHero';

import useFilterHeroes from '../hooks/useFilterHeroes';

/** CREAR UN HOOK QUE ME PERMITAR FILTRAR LOS HEROES A
 *  A PARTIR DEL VALOR DE LA CAJA DE TEXTO.
 *
 *  1.LAS COINCIDENCIAS DEBEN CONSIDERAR TANTO NOMBRE REAL
 *  COMO NOMBRE EL NOMBRE DEL HEROE
 *  2. CUANDO LA CAJA DE TEXTO ESTE VACIA ME DEBE MOSTRAR
 *  TODOS LOS HEROES
 *
 * **/

const HeroContainer = (props) => {
  const [searchTxt, setSearchTxt, resultHeroes] = useFilterHeroes(props.heroes);

  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              type="text"
              className="form-control"
              name="txtSearchHero"
              onChange={(e) => setSearchTxt(e.target.value)}
              value={searchTxt}
            />
            <ButtonNewHero />
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row mb-2">
          {resultHeroes.map((hero) => {
            return (
              <div className="col-md-6" key={hero.id}>
                <HeroElement hero={hero} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
