import * as yup from "yup";

export const schema = yup.object().shape({
    title: yup.string().min(3).matches(/^[A-Za-z ]*$/, 'Please enter valid title').max(55).required("Required")
    })