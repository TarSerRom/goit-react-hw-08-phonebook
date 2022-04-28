import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('phonebook/changeFilter ');

const phonebookActions = { changeFilter };
export default phonebookActions;