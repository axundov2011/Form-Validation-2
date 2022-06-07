import { object, string, number, date, InferType, ref } from 'yup';

const Validations = object({
    email: string().email("Gecerli bir email girin").required(),
    password: string().min(5, "Parolaniz en az 5 karakter olmalidir").required(),
    passwordConfirm: string().oneOf([ref('password')]).required()

  });

  export default Validations;