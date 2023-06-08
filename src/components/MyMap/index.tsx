import { View, ActivityIndicator, Text, Button } from 'react-native';
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
  console.log('aqui', aqui);

  //console.log('CONTEXT:', latitude, longitude);

  const { data, loading, create, remove, update, all } =
    useCollection<Troubles>('troubles');

  console.log(data);

  const markers: MapMarker[] = [
    {
      id: '1',
      position: { lat: latitude, lng: longitude },
      icon: "<div style='color:blue'>👤</div>", // This icon should be an HTML Element because it's rendered inside a webview!
      size: [24, 24],
    },
  ];

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
          // You can capture map interacions here
          console.log('>>>', message);
          //>>> {"location": {"lat": -25.3544199383424, "lng": -51.476569175720215}, "tag": "onMapClicked"}

          if (message.tag === 'onMapClicked') {
            const latitude = message.location.lat;
            const longitude = message.location.lng;

            modal.show(

              <CreateTroubleModal />
              //<View>
              //  <Text>{latitude}</Text>
              //  <Text>{longitude}</Text>
              //  <Button onPress={() => modal.hide()} title="X" />
              //</View>
            );
          }
        }}
      />
    </View>
  );
};

export default MyMap;
