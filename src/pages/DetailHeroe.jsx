import React, { Component } from 'react';
import LoaderPage from '../components/LoaderPage';
import MarvelService from '../core/services/MarvelService';
import { Link } from 'react-router-dom';
import ModalDeleteHeroe from '../components/ModalDeleteHeroe';

export default class DetailHeroe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroeId: props.match.params.heroId,
      loading: true,
      dataHeroe: undefined,
      error: null,
      modalOpen: false,
    };
  }

  componentDidMount() {
    this.fetchDataDetail();
  }

  fetchDataDetail = async () => {
    try {
      const dataHeroe = await MarvelService.heroes.getById(this.state.heroeId);
      this.setState({
        loading: false,
        dataHeroe: dataHeroe,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  onCloseModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  onOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  onDeleteHeroe = async () => {
    try {
      this.setState({
        loading: true,
        modalOpen: false,
      });
      await MarvelService.heroes.delete(this.state.heroeId);
      this.setState({
        loading: false,
      });
      this.props.history.push('/');
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    const heroe = this.state.dataHeroe;
    if (this.state.loading) {
      return <LoaderPage />;
    }
    return (
      <div className="container">
        <div className="col-12">
          <br />
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-danger">
                {heroe.heroName}
              </strong>
              <h3 className="mb-0">{heroe.realName}</h3>
              <div className="mb-1 text-muted">{heroe.description}</div>
              <div>
                <br />
                <br />
                <br />
                <Link
                  to={`/editHero/${heroe.id}`}
                  className="btn btn-warning mr-1"
                >
                  Editar
                </Link>
                <button
                  className="btn btn-danger mr-1"
                  onClick={this.onOpenModal}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  className="btn btn-default mr-1"
                  onClick={this.handleGoBack}
                >
                  Atras
                </button>
                <ModalDeleteHeroe
                  modalIsOpen={this.state.modalOpen}
                  onCloseModal={this.onCloseModal}
                  onDeleteHeroe={this.onDeleteHeroe}
                />
              </div>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="200"
                height="250"
                src={this.state.dataHeroe.photoUrl}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
