import {
  Alert,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import GeolocationApiService from '@services/GeolocationApiService';
import Input from '@components/Input';
import theme from '@themes/theme';
import { Formik } from 'formik';
import SearchAddressValidation from '@validations/SearchAddressValidation';
import Button from '@components/Button';
import AddressSearchItem from '@components/AddressSearchItem';
import { useModal } from '@components/ModalProvider';
import styles from '../Troubles/styles';

interface SearchAddressProps {
  address: string;
}

const SearchAddressModal = () => {
  const geolocationApi = new GeolocationApiService();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const modal = useModal();

  const closeModal = () => {
    modal.hide();
  };

  const searchAddress = async (values: SearchAddressProps) => {
    setIsLoading(true);

    try {
      Keyboard.dismiss();
      const response = geolocationApi.getCoordinatesByAddress(values.address);

      setData(await response);

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro ao buscar o endereco!');
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          address: '',
        }}
        validationSchema={SearchAddressValidation}
        onSubmit={(values) => searchAddress(values)}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <Input
              label="Endereço"
              placeholder="Insira o endereço"
              value={values.address}
              onChange={handleChange('address')}
            />
            {errors.address && (
              <Text style={theme.formErrors}>{errors.address}</Text>
            )}

            {isLoading ? (
              <ActivityIndicator size="small" color={theme.colors.secondary} />
            ) : (
              <Button labelButton="Buscar" onPress={handleSubmit} />
            )}
            <Button
              labelButton="Cancelar"
              onPress={closeModal}
              color={theme.colors.danger}
            />
          </View>
        )}
      </Formik>
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={({ item }) => <AddressSearchItem address={item} />}
          keyExtractor={(item) => item.place_id!}
          ListEmptyComponent={() => (
            <Text style={styles.text}>
              O endereço buscado não foi encontrado!
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default SearchAddressModal;
