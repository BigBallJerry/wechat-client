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

const AvatarById: FC<AvatarProps> = ({ uid, size = 24 }) => {
  const { data, loading, error } = useUsersInfo([uid]);

  if (loading) {
    return <CircleSpinner color='#02de6d' size={size} />;
  }

  if (error) {
    console.log('AvatarById error', uid[0]);
    return <LetterAvatar avatar={uid[0]} size={size} />;
  }

  // console.log(`AvatarById uid = ${uid}`);
  // console.log(data?.[0].data()?.photoURL);
  // console.log('');

  console.log(`AvatarById uid=${uid}`, data);

  return (
    // <img
    //   title={data?.[0].data()?.displayName}
    //   style={{ width: size, height: size }}
    //   className='rounded-full object-cover'
    //   src={data?.[0].data()?.photoURL}
    // />
    <Avatar src={data?.[0]?.photoUrl} />
  );

  return <div>AvatarById</div>;
};

export default AvatarById;
