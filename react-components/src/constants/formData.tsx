const formData = [
  {
    id: 'firstName',
    title: 'First Name:',
    type: 'text',
    errMsg: 'Invalid First Name',
  },
  {
    id: 'lastName',
    title: 'Last Name:',
    type: 'text',
    errMsg: 'Invalid Last Name',
  },
  {
    id: 'bornDate',
    title: 'Born date:',
    type: 'date',
    errMsg: 'Invalid Born date',
  },
  {
    id: 'profilePic',
    title: 'Profile pic:',
    type: 'file',
    errMsg: 'file error',
  },
  {
    id: 'country',
    tag: 'select',
    title: 'Your country:',
    errMsg: 'invalid country',
  },
];

export default formData;
