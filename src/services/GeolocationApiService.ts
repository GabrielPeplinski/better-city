import axios from 'axios';

// Nominatim - Openstreetmap 

class GeolocationApiService {
  async getCoordinatesByAddress(address: string) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

    try {
      const response = await axios.get(url);
      if (response.data.length > 0) {

        //return { lat: response.data[0].lat, lon: response.data[0].lon };

        return response.data;
      } else {
        throw new Error('Nenhum resultado encontrado para o endereço fornecido.');
      }
    } catch (error) {
      throw error;
    }
  }
}

export default GeolocationApiService;
