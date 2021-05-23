import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantsSource {
  static async getList() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      this.hideErrorMsg();
      return responseJson.restaurants;
    } catch (e) {
      this.showErrorMsg();
      return null;
    }
  }

  static async getDetail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      this.hideErrorMsg();
      return responseJson.restaurant;
    } catch (e) {
      this.showErrorMsg();
      return null;
    }
  }

  static async search(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async postReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: { id, name, review },
    });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }

  static showErrorMsg() {
    document.getElementById('alert').classList.add('show');
  }

  static hideErrorMsg() {
    document.getElementById('alert').classList.remove('show');
  }
}

export default RestaurantsSource;
