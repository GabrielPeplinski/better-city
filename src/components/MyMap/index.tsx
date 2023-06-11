import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { ExpoLeaflet, MapLayer, MapMarker } from 'expo-leaflet';
import { useLocationCoordinates } from '@contexts/LocationCoordenatesContextProvider';
import useCollection from '@hooks/useCollection';
import Troubles from 'src/types/Troubles';
import GeolocationApiService from '@services/GeolocationApiService';
import { useModal } from '@components/ModalProvider';
import CreateTroubleModal from '@components/CreateTroubleModal';

// Map Layer is based on OpenStreetMap, https://www.openstreetmap.org/#map=17/-25.35051/-51.47748
const mapLayer: MapLayer = {
  baseLayerName: 'OpenStreetMap',
  baseLayerIsChecked: true,
  layerType: 'TileLayer',
  baseLayer: true,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
};

const MyMap = () => {
  const modal = useModal();
  const { latitude, longitude } = useLocationCoordinates();

  const geolocationApiService = new GeolocationApiService();
  const address = 'Rua Princesa Izabel, 272, Guarapuava, Paraná';

  let aqui = geolocationApiService.getCoordinatesByAddress(address);

  const { data, refreshData } =
    useCollection<Troubles>('troubles');

  const troublesList = data.map((item): MapMarker => {
    return {
      id: item.id,
      title: item.title,
      position: [item.latitude, item.longitude],
      icon: "<div>❌</div>",
      size: [24, 24]
    };
  });

  const userLocation: MapMarker[] = [
    {
      id: '1',
      title: 'Você está aqui!',
      position: { lat: latitude, lng: longitude },
      icon: "<div style='color:blue'>👤</div>",
      size: [24, 24],
    },
  ];

  const markers = userLocation.concat(troublesList);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <ExpoLeaflet
        mapLayers={[mapLayer]}
        mapMarkers={markers}
        mapCenterPosition={{ lat: latitude, lng: longitude }}
        maxZoom={20}
        zoom={15}
        loadingIndicator={() => <ActivityIndicator />}
        onMessage={(message: any) => {
          console.log('>>>', message);

          if (message.tag === 'onMapClicked') {
            const latitude = message.location.lat;
            const longitude = message.location.lng;

            modal.show(
              <CreateTroubleModal 
                latitude={latitude}
                longitude={longitude} 
              />
            );
          }
        }}
      />
    </View>
  );
};

export default MyMap;
