import React from 'react';
import FormHero from '../components/FormHero';
import PreviewHero from '../components/PreviewHero';
import MarvelService from '../core/services/MarvelService';

class NewHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      modalIsOpen: false,
      error: undefined,
      form: {
        heroName: '',
        realName: '',
        photoUrl: '',
        description: '',
      },
    };
  }
  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <FormHero
            formValues={this.state.form}
            onChangeInput={this.handleChange}
            onSaveHero={this.handleClickCreate}
            modalIsOpen={this.state.modalIsOpen}
            onCloseModal={this.handleCloseModal}
            onPostSaveHero={this.handleRedirectToHeroes}
            onGoBack={this.handleGoBack}
          />
          <PreviewHero
            heroName={this.state.form.heroName || 'HERO NAME'}
            realName={this.state.form.realName || 'REAL NAME'}
            photoUrl={
              this.state.form.photoUrl ||
              'https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg'
            }
            description={
              this.state.form.description ||
              'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
            }
          />
        </div>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleClickCreate = async () => {
    try {
      const hero = this.state.form;
      const resultCreate = await MarvelService.heroes.create(hero);
      if (resultCreate) {
        this.setState({ modalIsOpen: true });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleRedirectToHeroes = () => {
    this.props.history.push('/');
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };
}

export default NewHero;
