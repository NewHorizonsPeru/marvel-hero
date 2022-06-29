import { useMemo, useState } from 'react';

const useFilterHeroes = (heroes) => {
  const [resultHeroes, setResultHeroes] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');
  useMemo(() => {
    const filterHeroes = heroes.filter((hero) => {
      return `${hero.heroName + hero.realName}`
        .toUpperCase()
        .includes(searchTxt.toUpperCase());
    });
    setResultHeroes(filterHeroes);
  }, [searchTxt, heroes]);

  return [searchTxt, setSearchTxt, resultHeroes];
};
export default useFilterHeroes;
