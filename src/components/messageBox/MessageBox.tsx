import { MessageItemLeft, MessageItemRight, MessageContentLeft, MessageContentRight } from './styles';
import AvatarById from '../avatarById/AvatarById';
import { MessageType } from '../../types';
import { formatDate } from '../../utils/formatDate';

type MessageBoxProps = {
  sentAt?: Date;
  sentBy: string;
  currentUser: string;
  message: string;
  image?: string;
  emoji?: string;
};

const MessageBox = (props: MessageBoxProps) => {
  console.log(`(MessageBox) message : `);
  console.log(props);

  const formattedDate = formatDate(props.sentAt?.seconds ? props.sentAt?.seconds * 1000 : Date.now());

  return (
    <>
      {props.currentUser == props.sentBy ? (
        <MessageItemRight>
          <AvatarById uid={props.sentBy} size={24} />
          <MessageContentRight>
            <span>{props.message}</span>
            <span>{formattedDate}</span>
          </MessageContentRight>
        </MessageItemRight>
      ) : (
        <MessageItemLeft>
          <AvatarById uid={props.sentBy} size={24} />
          <MessageContentLeft>
            <span>{props.message}</span>
            <span>{formattedDate}</span>
          </MessageContentLeft>
        </MessageItemLeft>
      )}
    </>
  );
};

export default MessageBox;
