
export default [
  {
    label: 'name',
    name: 'name',
    value: null,
    placeholder: ['enter_param', 'name'],
    validation: 'required',
    required: true,
    type: 'text'
  },
  {
    label: 'email',
    name: 'email',
    value: null,
    placeholder: ['enter_param', 'email'],
    validation: 'required|email',
    required: true,
    width: 50,
    type: 'text'
  },
  {
    label: 'age',
    name: 'age',
    value: null,
    placeholder: ['enter_param', 'age'],
    validation: 'required',
    required: true,
    width: 50,
    type: 'number'
  },
  {
    label: 'address',
    name: 'address',
    value: null,
    placeholder: ['enter_param', 'address'],
    validation: 'required',
    required: true,
    multiLine: true,
    type: 'text'
  }
]
