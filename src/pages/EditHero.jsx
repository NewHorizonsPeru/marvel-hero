import React from 'react';
import MarvelService from '../core/services/MarvelService';
import FormHero from '../components/FormHero';
import PreviewHero from '../components/PreviewHero';
import PageMessage from '../components/PageMessage';

class EditHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: this.props.match.params.heroId,
      loading: true,
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

  componentDidMount() {
    this.getDataHero();
  }

  getDataHero = async () => {
    const dataHero = await MarvelService.heroes.getById(this.state.heroId);
    this.setState({ form: dataHero, loading: false });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleClickUpdate = async () => {
    try {
      const hero = this.state.form;
      const heroId = this.state.heroId;
      const resultUpdate = await MarvelService.heroes.update(heroId, hero);
      if (resultUpdate) {
        this.setState({ modalIsOpen: true });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleRedirectToHeroes = () => {
    this.props.history.push('/');
  };

  render() {
    if (this.state.loading) {
      return <PageMessage message="⏳ Cargando..." />;
    }
    return (
      <div className="container">
        <br />
        <div className="row">
          <FormHero
            formValues={this.state.form}
            onChangeInput={this.handleChange}
            onSaveHero={this.handleClickUpdate}
            onGoBack={this.handleGoBack}
            modalIsOpen={this.state.modalIsOpen}
            onPostSaveHero={this.handleRedirectToHeroes}
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
}

export default EditHero;
