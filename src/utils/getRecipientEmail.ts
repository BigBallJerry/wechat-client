import React from 'react';
import { User } from 'firebase/auth';

export type recipientProps = {
  users: User[];
  currentUser: User;
};

const getRecipientEmail = (users, userLoggedIn): string =>
  users?.filter((userToFilter) => userToFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;
