export interface InputData {
  type: string
  autocomplete: string
  placeholder: string
  name: string
}

export const inputs: InputData[] = [
  {
    type: 'text',
    autocomplete: 'given-name',
    placeholder: 'First Name',
    name: 'name'
  },
  {
    type: 'text',
    autocomplete: 'family-name',
    placeholder: 'Last Name',
    name: 'lastname'
  },
  {
    type: 'email',
    autocomplete: 'email',
    placeholder: 'Email Address',
    name: 'email'
  },
  {
    type: 'password',
    autocomplete: 'off',
    placeholder: 'Password',
    name: 'password'
  },
]