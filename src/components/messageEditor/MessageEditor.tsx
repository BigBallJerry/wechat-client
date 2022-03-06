import { useState } from 'react';
import {
  Container,
  Toolbox,
  ToolItem,
  EmojiIcon,
  SendImageIcon,
  VoiceMessageIcon,
  TextEditor,
  SendButton,
  Button,
} from './styles';
import dynamic from 'next/dynamic';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

const MessageEditor = (props) => {
  const messages = props.messages;

  const [text, setText] = useState('');

  const handleEmojiClick = () => {
    console.log('handleEmojiClick');
  };

  const handleSendFileClick = () => {
    console.log('handleSendFileClick');
  };

  const handleVoiceChatClick = () => {
    console.log('handleVoiceChatClick');
  };

  const handleSendMsg = () => {
    /*
    const {current, username, avatar, handleMsg} = this.props
    const {type} = this.state
    if (!current) {
        message.info("请选择发送对象")
        return
    }
    if (type !== "text") {
        if (type === "file") {
            this.handleSendFile()
        }
        return
    }
    // 如果没有消息
    if (this.text.current.value.trim() === "") {
        message.info("消息不能为空")
        this.clearMsg()
        return
    }

    // 将信息添加到父组件的state中
    handleMsg(Msg("send", username, avatar, TEXT, this.text.current.value))

    // 发送数据
    if (this.state.type === "text") {
        // 如果是群聊，那么isGroup为true，服务端进行判断然后发送
        // 对于他人来说应该是receive
        let msg_ = Msg("receive", username, avatar, TEXT, this.text.current.value)
        if (isGroup(current)) {
            socket.emit(MSG, {isGroup: true, data: {user: current, msg: msg_}})
        } else {
            socket.emit(MSG, {isGroup: false, data: {user: current, msg: msg_}})
        }
    }

    this.clearMsg()
    */
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      handleSendMsg();
      console.log('Entry key down');
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Container>
      <Toolbox>
        <ToolItem onClick={() => handleEmojiClick()}>
          <EmojiIcon size='25' data-tip data-for='emojiTip' />
          <ReactTooltip id='emojiTip' place='bottom' effect='solid' type='info'>
            Emoji
          </ReactTooltip>
        </ToolItem>
        <ToolItem onClick={() => handleSendFileClick()}>
          <SendImageIcon size='25' data-tip data-for='sendFileTip' />
          <ReactTooltip id='sendFileTip' place='bottom' effect='solid' type='info'>
            Send picture
          </ReactTooltip>
        </ToolItem>
        <ToolItem onClick={() => handleVoiceChatClick()}>
          <VoiceMessageIcon size='25' data-tip data-for='voiceChatTip' />
          <ReactTooltip id='voiceChatTip' place='bottom' effect='solid' type='info'>
            Voice call
          </ReactTooltip>
        </ToolItem>
      </Toolbox>
      <TextEditor>
        <textarea placeholder='Say hello ...' onKeyDown={handleKeyDown} onChange={handleTextChange}></textarea>
      </TextEditor>
      <SendButton className={'chat-room-message-editor-btn'}>
        <Button onClick={handleSendMsg}>Send</Button>
      </SendButton>
    </Container>
  );
};

MessageEditor.propTypes = {};

export default MessageEditor;
