const formData = [
  {
    id: 'firstName',
    title: 'First Name:',
    type: 'text',
    errMsg: 'Invalid First Name',
    className: 'form-text-input',
    placeholder: 'Name',
  },
  {
    id: 'lastName',
    title: 'Last Name:',
    type: 'text',
    errMsg: 'Invalid Last Name',
    className: 'form-text-input',
    placeholder: 'Surname',
  },
  {
    id: 'bornDate',
    title: 'Born date:',
    type: 'date',
    errMsg: 'Invalid Born date',
    className: '',
    placeholder: '',
  },
  {
    id: 'profilePic',
    title: 'Profile pic:',
    type: 'file',
    errMsg: 'file error',
    className: 'form-file-input',
    placeholder: '',
  },
  {
    id: 'country',
    tag: 'select',
    title: 'Your country:',
    errMsg: 'invalid country',
    className: '',
    placeholder: '',
  },
  {
    id: 'confirmation',
    title: 'Сonfirm:',
    type: 'checkbox',
    errMsg: 'You must confirm!',
    className: 'form-checkbox-input',
    placeholder: '',
  },
];

export default formData;
