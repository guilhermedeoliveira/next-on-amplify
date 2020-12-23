import * as yup from 'yup'
import { Form as FormikForm, Formik /* FormikProps */ } from 'formik'

import TextField from 'shared/components/TextField'
import Button from 'shared/components/Button'

// type Values = {
//   firstName: string
//   lastName: string
//   email: string
// }

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
}

const schema = yup.object().shape({
  firstName: yup.string().required('Campo obrigatório'),
  lastName: yup.string().required('Campo obrigatório'),
  email: yup.string().email('E-mail Inválido').required('Campo obrigatório'),
})

const Form = () => (
  <section>
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {
        (/* props: FormikProps<Values> */) => (
          <FormikForm>
            <TextField
              isRequired
              name="firstName"
              type="text"
              label="First Name"
              mask="99/99/9999"
              placeholder="Placeholder Test"
            />

            <TextField
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Placeholder Test"
            />

            <TextField name="email" type="email" label="Email" />

            <Button variant="medium" onClick={() => ''}>
              Submit
            </Button>
          </FormikForm>
        )
      }
    </Formik>
  </section>
)

export default Form
