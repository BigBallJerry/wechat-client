import { Container, Avatar, Badge, Name, LatestMessage } from './styles';
import { db, auth } from '../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import getRecipientEmail from '../../utils/getRecipientEmail';
import LetterAvatar from '../letterAvatar/LetterAvatar';
import { useAppContext } from '../../context/appContext';

type ChatRoomItemProps = {
  avatar?: string;
  chatId?: string;
  badge?: number;
  currentUserEmail?: any;
  users: any[] | null;
  name?: string;
  latestMessage?: string;
  selected: boolean;
  theme?: string;
};

const ChatRoomItem = ({ chatId, badge, selected, users, name, theme, latestMessage }: ChatRoomItemProps) => {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  const recipientRef = db.collection('users').where('email', '==', recipientEmail);
  const [recipientSnapshot] = useCollection(recipientRef);

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  selected && console.log(`ChatRoomItem:selected: ${selected} on ${recipientEmail}`);

  return (
    <Container selected={selected}>
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
