import React from 'react'
import { useField, FieldHookConfig, Field, FieldProps } from 'formik'
import InputMask from 'react-input-mask'
import cn from 'classnames'

export type TextFieldProps = FieldHookConfig<string> & {
  label?: string
  mask?: string
  isRequired?: boolean
  onChange?: () => void
}

const Input = ({
  label,
  mask,
  placeholder,
  isRequired,
  onChange,
  ...props
}: TextFieldProps) => {
  const [{ name }, { error, touched }, { setValue }] = useField(props)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <section className="mb-2 lg:mb-4 w-full">
          {label && (
            <label htmlFor={field.name}>
              {label} {isRequired && <span className="text-red-500">*</span>}
            </label>
          )}

          <>
            {mask ? (
              <InputMask
                className={cn(
                  'form-input mt-1 block w-full rounded border-black border-2',
                  {
                    'border-red-500': error,
                  }
                )}
                placeholder={placeholder}
                mask={mask}
                onChange={handleChange}
                {...field}
              >
                {/* @todo: improve inputProps typing */}
                {(inputProps: any): React.ReactElement => (
                  <input {...inputProps} />
                )}
              </InputMask>
            ) : (
              <input
                className={cn(
                  'form-input mt-1 block w-full rounded border-black border-2',
                  {
                    'border-red-500': error,
                  }
                )}
                placeholder={placeholder}
                onChange={handleChange}
                {...field}
              />
            )}
          </>

          {error && touched && (
            <p className="text-red-500 mt-2 text-sm">{error}</p>
          )}
        </section>
      )}
    </Field>
  )
}

export default Input
