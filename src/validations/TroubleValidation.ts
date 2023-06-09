import * as Yup from 'yup';

const TroubleValidation = Yup.object().shape({
  title: Yup.string()
    .required('Campo título é obrigatório')
    .min(6, 'Título deve ter no mínimo 6 caracteres')
    .max(50, 'Título deve ter no máximo 50 caracteres'),

  description: Yup.string()
    .required('Campo senha é obrigatório')
    .min(6, 'Descrição deve ter no mínimo 6 caracteres')
    .max(200, 'Descrição deve ter no máximo 200 caracteres')
});

export default TroubleValidation;
