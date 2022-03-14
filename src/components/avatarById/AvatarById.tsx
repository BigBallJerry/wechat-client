import styled from 'styled-components';
import { FC } from 'react';
import { useUsersInfo } from '../../hooks/useUsersInfo';
import CircleSpinner from '../circleSpinner/CircleSpinner';
import LetterAvatar from '../letterAvatar/LetterAvatar';

type AvatarProps = {
  uid: string;
  size?: number;
};

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  image-rendering: -webkit-optimize-contrast;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const AvatarById = ({ uid, size = 40 }: AvatarProps) => {
  if (typeof uid == 'undefined') {
    console.log('AvatarById got undefined');
    return null;
  }

  const { data, loading, error } = useUsersInfo([uid]);

  if (loading) {
    console.log('AvatarById loading');
  }

  if (error) {
    console.log('AvatarById error', uid);
  }

  console.log(`AvatarById uid=${uid}`, data?.[0]?.photoUrl);
  console.log(data);

  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <CircleSpinner color='#02de6d' size={20} />}
      {data && (data?.[0] ? <Avatar src={data?.[0]?.photoUrl} /> : <LetterAvatar avatar={uid[0]} size={size} />)}
    </>
  );

  return <div>AvatarById</div>;
};

export default AvatarById;
