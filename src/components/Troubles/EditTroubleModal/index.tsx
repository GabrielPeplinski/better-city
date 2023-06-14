import { Alert, Text, View } from 'react-native';
import React from 'react';
import Troubles from 'src/types/Troubles';
import { Formik } from 'formik';
import Input from '@components/Input';
import theme from '@themes/theme';
import { useModal } from '@components/ModalProvider';
import Button from '@components/Button';
import TroubleValidation from '@validations/TroubleValidation';
import useCollection from '@hooks/useCollection';
import { Feather } from '@expo/vector-icons';
import styles from '../styles';
import TroubleProps from '../TroublesProps';
import ShowTroubleProps from '../ShowTroublesProps';

const EditTroubleModal = ({ trouble }: ShowTroubleProps) => {
  const modal = useModal();
  const { update } = useCollection<Troubles>('troubles', true);

  const updateTroule = async (values: TroubleProps) => {
    try {
      await update(trouble.id, {
        ...trouble,
        ...values,
      });

      modal.hide();
      Alert.alert('Sua reclamação foi editada com sucesso!');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Não foi possível editar a sua reclamação');
    }
  };

  return (
    <View style={styles.container}>
      <Feather name="edit" size={70} color="white" />
      <View style={styles.form}>
        <Formik
          initialValues={{
            title: trouble.title,
            description: trouble.description,
          }}
          validationSchema={TroubleValidation}
          onSubmit={(values) => updateTroule(values)}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <View>
              <Input
                label="Título"
                placeholder="Título da sua reclamação"
                value={values.title}
                onChange={handleChange('title')}
              />
              {errors.title && (
                <Text style={theme.formErrors}>{errors.title}</Text>
              )}

              <Input
                label="Descrição"
                placeholder="Descrição da sua reclamação"
                value={values.description}
                onChange={handleChange('description')}
              />
              {errors.description && (
                <Text style={theme.formErrors}>{errors.description}</Text>
              )}
              <Button labelButton="Editar" onPress={handleSubmit} />
              <Button labelButton="Cancelar" onPress={modal.hide} />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default EditTroubleModal;
