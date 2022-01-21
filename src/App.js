import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
const validate = (values) => {
  const erros = {};
  if (!values.name) {
    erros.name = "Requerido";
  } else if (values.name.length < 5) {
    erros.name = "El nombre es muy corto";
  }
  if (!values.lastname) {
    erros.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    erros.lastname = "El apellido es muy corto";
  }
  return erros;
};
function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="nombre" label="Nombre" />
        <label>Nombre</label>
        <Field name="name" type="text" />
        <Field name="select" as="select" className="input">
          <option value="chanchitofeliz">Chanchito Feliz</option>
          <option value="chanchito">Chanchito</option>
        </Field>

        <ErrorMessage name="name" />
        <br />
        <label>Apellido</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name="lastname" />
        <br />
        <label>Correo</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
