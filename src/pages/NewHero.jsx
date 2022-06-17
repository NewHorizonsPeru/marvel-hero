import React from 'react';

import FormHero from '../components/FormHero';
import PreviewHero from '../components/PreviewHero';

class NewHero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FormHero />
        <PreviewHero
          heroName="Iron Man"
          realName="Tony Stark"
          imageUrl="https://m.media-amazon.com/images/I/514+EGzKWgL._AC_.jpg"
          description="Es un superhéroe que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue cocreado por el escritor y editor Stan Lee, desarrollado por el guionista Larry Lieber y diseñado por los artistas Don Heck y Jack Kirby."
        />
      </React.Fragment>
    );
  }
}

export default NewHero;
