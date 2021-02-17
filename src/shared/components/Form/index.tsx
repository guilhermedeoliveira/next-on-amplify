import * as yup from 'yup'
import { Form as FormikForm, Formik, FormikProps } from 'formik'

import TextField from 'shared/components/TextField'
import Button from 'shared/components/Button'

import userRepository from 'api/modules/user/repositories/user.repository'

type Values = {
  firstName: string
  lastName: string
  email: string
}

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
    <h1 className="text-bold">Create a user</h1>

    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        await userRepository.insertUser(values)
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }: FormikProps<Values>) => (
        <FormikForm>
          <TextField
            isRequired
            name="firstName"
            type="text"
            label="First Name"
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
            {isSubmitting ? 'Loading...' : 'Submit'}
          </Button>
        </FormikForm>
      )}
    </Formik>
  </section>
)

export default Form
