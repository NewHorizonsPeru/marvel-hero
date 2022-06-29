import HeroElement from './HeroElement';
import ButtonNewHero from './ButtonNewHero';

const HeroContainer = (props) => {
  const heroes = props.heroes;
  const filterHeroes = heroes.filter((hero) => {
    return hero.heroName.toUpperCase().includes('P');
  });
  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              type="text"
              className="form-control"
              name="searchHeroTxt"
              onChange={() => {}}
            />
            <ButtonNewHero />
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row mb-2">
          {filterHeroes.map((hero) => {
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
