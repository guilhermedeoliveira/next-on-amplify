import React from 'react'
import { cond, equals, always } from 'ramda'

type Variant = 'small' | 'medium' | 'large'
type Type = 'submit' | 'button' | 'reset'

type ButtonProps = {
  variant: Variant
  children: React.ReactNode
  type?: Type
  onClick: () => void
}

const generateVariantDimens = cond([
  [equals('small'), always('text-sm')],
  [equals('medium'), always('text-base')],
  [equals('large'), always('text-lg')],
])

const Button = ({
  type = 'submit',
  variant,
  children,
  onClick,
}: ButtonProps) => (
  <button
    className={`mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg w-full ${generateVariantDimens(
      variant
    )}`}
    type={type}
    onClick={onClick}
    {...generateVariantDimens(variant)}
  >
    {children}
  </button>
)

export default Button
