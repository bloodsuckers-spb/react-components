import React, { Component, FormEvent } from 'react';
import './index.css';
import { IProps, IState } from './interfaces';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';
import { charactersLink } from '../../constants/API';

export default class Home extends Component<IProps, IState> {
  constructor(props = {}) {
    super(props);
    const characters = localStorage.getItem('characters') || '';
    this.state = {
      characters: characters ? JSON.parse(characters) : [],
      isLoading: false,
    };
  }

  handleSearch = (event: FormEvent) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { target } = event;
    if (!(target instanceof HTMLFormElement)) return;
    const { value } = target['search-bar'];
    this.getData(value);
  };

  getData = (value: string) => {
    axios
      .get(`${charactersLink}?name=${value}`)
      .then((response) => {
        const { results } = response.data;
        this.setState({ characters: results, isLoading: false });
      })
      .catch((error) => {
        console.warn(error);
        this.setState({ characters: [], isLoading: false });
      });
  };

  componentDidMount() {
    const { characters } = this.state;
    if (characters.length) return;
    this.setState({ isLoading: true });
    axios.get(charactersLink).then((response) => {
      const { results } = response.data;
      this.setState({ characters: results, isLoading: false });
    });
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
      <main className="main" data-testid={'home'}>
        <SearchBar handler={this.handleSearch} />
        {isLoading ? <Spinner /> : <CardList data={characters} />}
      </main>
    );
  }
}
