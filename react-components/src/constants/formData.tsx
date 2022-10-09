const formData = [
  {
    title: 'First Name:',
    id: 'firstName',
    type: 'text',
    errMsg: 'Invalid First Name',
  },
  {
    title: 'Last Name:',
    id: 'lastName',
    type: 'text',
    errMsg: 'Invalid Last Name',
  },
  {
    title: 'Born date:',
    id: 'bornDate',
    type: 'date',
    errMsg: 'Invalid Born date',
  },
  {
    title: 'Profile pic:',
    id: 'profilePic',
    type: 'file',
    errMsg: 'file error',
  },
  {
    tag: 'select',
    id: 'country',
    title: 'Your country:',
    errMsg: 'invalid country',
  },
];

export default formData;
