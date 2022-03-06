import { Container, Avatar, Badge, Name, LatestMessage } from './styles';
import Image from 'next/image';
import { db, auth } from '../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import getRecipientEmail from '../../utils/getRecipientEmail';
import LetterAvatar from '../letterAvatar/LetterAvatar';

type ChatRoomItemProps = {
  avatar?: string;
  badge?: number;
  currentUserEmail?: any;
  users: any[] | null;
  name?: string;
  latestMessage?: string;
};

const ChatRoomItem = ({ avatar, badge, currentUserEmail, users, name, latestMessage }: ChatRoomItemProps) => {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  const recipientRef = db.collection('users').where('email', '==', recipientEmail);
  const [recipientSnapshot] = useCollection(recipientRef);

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  return (
    <Container>
      <Avatar>
        {recipient ? (
          <img src={recipient?.photoURL} alt='avatar' width='48' height='48' />
        ) : (
          <LetterAvatar avatar={recipientEmail[0]} width='48px' height='48px' />
        )}
      </Avatar>
      {badge && <Badge>{badge}</Badge>}
      <Name>{name ? name : recipientEmail}</Name>
      <LatestMessage>{latestMessage}</LatestMessage>
    </Container>
  );
};

export default ChatRoomItem;
