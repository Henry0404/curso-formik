import { useFormik } from "formik";
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
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        //name="name"
        type="text"
        {...formik.getFieldProps("name")}
        //onBlur={formik.handleBlur}
        //onChange={formik.handleChange}
        //value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <br />
      <label>Apellido</label>
      <input
        //name="lastname"
        type="text"
        {...formik.getFieldProps("lastname")}
        //onBlur={formik.handleBlur}
        //onChange={formik.handleChange}
        //value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <br />
      <label>Correo</label>
      <input
        //name="email"
        type="email"
        {...formik.getFieldProps("email")}
        //onBlur={formik.handleBlur}
        //onChange={formik.handleChange}
        //value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
