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
    };
  }

  handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const { target } = event;
    if (target instanceof HTMLFormElement) {
      const { value } = target['search-bar'];
      FetchAPI.getData(value).then((res) => {
        const { results } = res;
        this.setState({ characters: results });
      });
    }
  };

  componentDidMount() {
    FetchAPI.getData().then((res) => {
      const { results } = res;
      this.setState({ characters: results });
    });
  }

  componentWillUnmount() {
    const { characters } = this.state;
    const str = characters.length ? JSON.stringify(characters) : '';
    localStorage.setItem('characters', str);
  }

  render() {
    const { characters } = this.state;
    return (
      <main className="main">
        <SearchBar handler={this.handleSearch} />
        {!characters.length ? <Spinner /> : <CardList data={characters} />}
      </main>
    );
  }
}
