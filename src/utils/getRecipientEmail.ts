import React from 'react';

export type recipientProps = {
  users: any[];
  currentUser: any;
};

const getRecipientEmail = (users, currentUser): recipientProps =>
  users?.filter((userToFilter) => userToFilter !== currentUser?.email)[0];

export default getRecipientEmail;
