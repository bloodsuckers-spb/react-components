import { charactersLink } from '../constants/API';

export default class FetchAPI {
  static async getData() {
    const response = await fetch(charactersLink);
    return response.json();
  }
}
