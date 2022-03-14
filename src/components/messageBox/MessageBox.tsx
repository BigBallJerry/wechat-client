import {
  MessageItemLeft,
  MessageItemRight,
  MessageContentLeft,
  MessageContentRight,
  AvatarContainer,
  TimeSpan,
  TextContainerLeft,
  TextContainerRight,
  TimeSpanLeft,
  TimeSpanRight,
} from './styles';
import AvatarById from '../avatarById/AvatarById';
import { MessageType } from '../../types';
import { formatDateInTimeAgo } from '../../utils/formatDate';

type MessageBoxProps = {
  sentAt?: Date;
  sentBy: string;
  currentUser: string;
  message: string;
  image?: string;
  emoji?: string;
  type?: string;
};

const MessageBox = (props: MessageBoxProps) => {
  const formattedDate = formatDateInTimeAgo(props.sentAt?.seconds ? props.sentAt?.seconds * 1000 : Date.now());
  console.log('(MessageBox) message : ', props.sentAt?.seconds);

  return (
    <>
      {props.currentUser == props.sentBy ? (
        <MessageItemRight>
          <AvatarContainer>
            <AvatarById uid={props.sentBy} size={30} />
          </AvatarContainer>
          <TextContainerRight>
            <MessageContentRight>
              <span>{props.message}</span>
            </MessageContentRight>
            <TimeSpanRight>{formattedDate}</TimeSpanRight>
          </TextContainerRight>
        </MessageItemRight>
      ) : (
        <MessageItemLeft>
          <AvatarContainer>
            <AvatarById uid={props.sentBy} size={30} />
          </AvatarContainer>
          <TextContainerLeft>
            <MessageContentLeft>
              <span>{props.message}</span>
            </MessageContentLeft>
            <TimeSpanLeft>{formattedDate}</TimeSpanLeft>
          </TextContainerLeft>
        </MessageItemLeft>
      )}
    </>
  );
};

export default MessageBox;
