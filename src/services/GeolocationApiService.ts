import axios from 'axios';

// Nominatim - Openstreetmap 

class GeolocationApiService {
  async getCoordinatesByAddress(address: string): Promise<{ lat: number, lon: number }> {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

    try {
      const response = await axios.get(url);
      if (response.data.length > 0) {

        console.log('LAT:', response.data[0].lat)
        console.log('LONG:', response.data[0].lon)

        return { lat: response.data[0].lat, lon: response.data[0].lon };
      } else {
        throw new Error('Nenhum resultado encontrado para o endereço fornecido.');
      }
    } catch (error) {
      console.error('Erro ao buscar coordenadas:', error);
      throw error;
    }
  }
}

export default GeolocationApiService;
