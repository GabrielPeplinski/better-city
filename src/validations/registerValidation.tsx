import * as Yup from 'yup';

const RegisterValidation = Yup.object().shape({
  name: Yup.string().required('Campo nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('Campo e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .required('Campo senha é obrigatório'),
});

export default RegisterValidation;
