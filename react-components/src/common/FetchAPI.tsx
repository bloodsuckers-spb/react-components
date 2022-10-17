import { charactersLink } from '../constants/API';

export default class FetchAPI {
  static async getData(name = '') {
    const url = !name ? charactersLink : `${charactersLink}?name=${name}`;
    const response = await fetch(url);
    return response.json();
  }
}
