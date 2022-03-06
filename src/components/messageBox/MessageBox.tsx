import { MessageItemLeft, MessageItemRight, Avatar, MessageContentLeft, MessageContentRight } from './styles';

const MessageBox = (props: any) => {
  return (
    <>
      {props.owner == props.sender ? (
        <MessageItemRight>
          <Avatar src={props.senderAvatar} alt={props.sender} />
          <MessageContentRight>
            <span>{props.message}</span>
          </MessageContentRight>
        </MessageItemRight>
      ) : (
        <MessageItemLeft>
          <Avatar src={props.senderAvatar} alt={props.sender} />
          <MessageContentLeft>
            <span>{props.message}</span>
          </MessageContentLeft>
        </MessageItemLeft>
      )}
    </>
  );
};

export default MessageBox;
