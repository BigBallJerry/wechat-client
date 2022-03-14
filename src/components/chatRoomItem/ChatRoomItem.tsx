import { Container, Avatar, Badge, Name, LatestMessage } from './styles';
import { db } from '../../firebaseConfig';
import { useCollection } from 'react-firebase-hooks/firestore';
import { User } from 'firebase/auth';
import { collection, where, query, addDoc } from 'firebase/firestore';
import getRecipientEmail from '../../utils/getRecipientEmail';
import LetterAvatar from '../letterAvatar/LetterAvatar';
import CircleSpinner from '../circleSpinner/CircleSpinner';

type ChatRoomItemProps = {
  avatar?: string;
  chatId?: string;
  badge?: number;
  currentUser?: User;
  users: string[] | null;
  name?: string;
  latestMessage?: string;
  selected: boolean;
  theme?: string;
  listToHide?: string[] | null;
};

const ChatRoomItem = ({
  chatId,
  badge,
  selected,
  users,
  currentUser,
  name,
  theme,
  latestMessage,
  listToHide,
}: ChatRoomItemProps) => {
  // const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, currentUser);
  console.log('ChatRoomItem recipientEmail=', recipientEmail, users);

  const useRecipientRef = query(collection(db, 'users'), where('email', '==', recipientEmail));
  const [data, loading, error] = useCollection(useRecipientRef);
  const recipient = data?.docs?.[0]?.data();
  console.log('ChatRoomItem::currentUser = ', currentUser?.email);
  console.log('ChatRoomItem::recipient = ', data?.docs?.[0]?.data());
  console.log('ChatRoomItem::listToHide = ', listToHide);

  return (
    <Container selected={selected}>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <CircleSpinner color='#02de6d' size={40} />}
      {data && (
        <>
          <Avatar>
            {data?.docs?.[0]?.data() ? (
              <img src={recipient?.photoUrl} alt='avatar' width='48' height='48' />
            ) : (
              <LetterAvatar avatar={recipientEmail[0]} size={48} />
            )}
          </Avatar>
          {badge && <Badge>{badge}</Badge>}
          <Name>{data?.docs?.[0]?.data().name ? data?.docs?.[0]?.data().name : recipientEmail}</Name>
          <LatestMessage>{latestMessage}</LatestMessage>
        </>
      )}
    </Container>
  );
};

export default ChatRoomItem;
