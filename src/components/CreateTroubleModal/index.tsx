import React from 'react';
import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '@components/Input';
import theme from '@themes/theme';
import Button from '@components/Button';
import { useModal } from '@components/ModalProvider';
import Troubles from 'src/types/Troubles';
import useCollection from '@hooks/useCollection';
import { Formik } from 'formik';
import TroubleValidation from '@validations/TroubleValidation';
import useAuth from '@hooks/useAuth';

interface Props {
  latitude: number;
  longitude: number;
}

const CreateTroubleModal = (props: Props) => {
  const modal = useModal();
  const { create } = useCollection<Troubles>('troubles', false);
  const { user } = useAuth();

  interface TroubleProps {
    title: string;
    description: string;
  }

  const createTrouble = async (values: TroubleProps) => {
    let now = new Date();

    try {
      await create({
        latitude: props.latitude,
        longitude: props.longitude,
        created_at: now.toISOString(),
        is_solved: false,
        user_id: user.uid,
        ...values,
      });

      modal.hide();
    } catch (error: any) {
      console.log(error);
      Alert.alert('Não foi possível cadastrar a sua reclamação');
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="add-circle" size={70} color="white" />
      <View style={styles.form}>
        <Formik
          initialValues={{
            title: '',
            description: '',
          }}
          validationSchema={TroubleValidation}
          onSubmit={(values) => createTrouble(values)}
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
              <Button labelButton="Cadastrar" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
      <View>
        <Pressable style={styles.cancelButton} onPress={modal.hide}>
          <Text>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  form: {
    width: '80%',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
});

export default CreateTroubleModal;
