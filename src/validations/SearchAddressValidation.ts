import * as Yup from 'yup';

const SearchAddressValidation = Yup.object().shape({
  address: Yup.string()
    .required('Campo endereço é obrigatório')
    .min(20, 'O endereço deve ter no mínimo 20 caracteres')
    .max(80, 'O endereço deve ter no máximo 50 caracteres'),
});

export default SearchAddressValidation;
