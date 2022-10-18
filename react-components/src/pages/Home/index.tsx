import React, { Component, FormEvent } from 'react';
import './index.css';
import { IProps, IState } from './interfaces';
import Spinner from '../../components/Spinner';
import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';
import FetchAPI from '../../common/FetchAPI';

export default class Home extends Component<IProps, IState> {
  constructor(props = {}) {
    super(props);
    const characters = localStorage.getItem('characters') || '';
    this.state = {
      characters: characters ? JSON.parse(characters) : [],
      isLoading: false,
    };
  }

  handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { target } = event;
    if (target instanceof HTMLFormElement) {
      const { value } = target['search-bar'];
      FetchAPI.getData(value).then((response) => {
        const characters = response.results ? response.results : [];
        this.setState({ characters, isLoading: false });
      });
    }
  };

  componentDidMount() {
    const { characters } = this.state;
    if (!characters.length) {
      FetchAPI.getData().then((response) => {
        const { results } = response;
        this.setState({ characters: results });
      });
    }
  }

  componentWillUnmount() {
    console.clear();
    const { characters } = this.state;
    const str = characters.length ? JSON.stringify(characters) : '';
    localStorage.setItem('characters', str);
  }

  render() {
    const { isLoading, characters } = this.state;
    return (
      <main className="main">
        <SearchBar handler={this.handleSearch} />
        {isLoading ? <Spinner /> : <CardList data={characters} />}
      </main>
    );
  }
}
