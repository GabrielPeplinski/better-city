import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '@components/Input';
import theme from '@themes/theme';
import Button from '@components/Button';
import { useModal } from '@components/ModalProvider';
import Troubles from 'src/types/Troubles';
import useCollection from '@hooks/useCollection';
import { Formik } from 'formik';

const CreateTroubleModal = () => {
  const modal = useModal();
  const { create } = useCollection<Troubles>('troubles', false);

  interface TroubleProps {
    title: string;
    description: string;
  }

  const createTrouble = async (values: TroubleProps) => {
    console.log(values);
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
          validationSchema={''}
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
              {errors.title && (
                <Text style={theme.formErrors}>{errors.title}</Text>
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
    backgroundColor: 'red'
  }
});

export default CreateTroubleModal;
