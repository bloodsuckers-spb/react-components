const formData = [
  {
    id: 'firstName',
    title: 'First Name:',
    type: 'text',
    errorMessage: 'Invalid First Name',
    className: 'form-text-input',
    placeholder: 'Name',
  },
  {
    id: 'lastName',
    title: 'Last Name:',
    type: 'text',
    errorMessage: 'Invalid Last Name',
    className: 'form-text-input',
    placeholder: 'Surname',
  },
  {
    id: 'switcher',
    title: 'Male/Female',
    type: 'checkbox',
    errorMessage: '',
    className: 'form-switch-input',
    placeholder: '',
  },
  {
    id: 'bornDate',
    title: 'Born date:',
    type: 'date',
    errorMessage: 'Invalid Born date',
    className: 'form-switch-date',
    placeholder: '',
  },
  {
    id: 'country',
    tag: 'select',
    title: 'Your country:',
    errorMessage: 'invalid country',
    className: 'form-select',
    placeholder: '',
  },
  {
    id: 'profilePic',
    title: 'Profile pic:',
    type: 'file',
    errorMessage: 'file error',
    className: 'form-file-input',
    placeholder: '',
  },
  {
    id: 'confirm',
    title: 'Сonfirm:',
    type: 'checkbox',
    errorMessage: 'You must confirm!',
    className: 'form-checkbox-input',
    placeholder: '',
  },
];

export default formData;
