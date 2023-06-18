import * as Yup from 'yup';

const SearchAddressValidation = Yup.object().shape({
  address: Yup.string()
    .required('Campo endereço é obrigatório')
    .min(6, 'Título deve ter no mínimo 6 caracteres')
    .max(80, 'Título deve ter no máximo 50 caracteres'),
});

export default SearchAddressValidation;
