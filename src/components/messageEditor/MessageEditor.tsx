import { useState, useEffect } from 'react';
import {
  Container,
  Toolbox,
  ToolItem,
  EmojiIcon,
  SendImageIcon,
  EmojiContainer,
  TextEditor,
  SendButton,
  Button,
} from './styles';
import dynamic from 'next/dynamic';
import { useStore } from '../../store';
import { db } from '../../firebaseConfig';
import { collection, doc, setDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

const MessageEditor = () => {
  const currentUser = useStore((state) => state.currentUser);
  const currentChatId = useStore((state) => state.currentChatId);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (typeof currentChatId != 'undefined') setDisabled(false);
  }, [currentChatId == 'undefined' || currentChatId == null]);

  const [messageText, setMessageText] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);

  const handleEmojiClick = (event) => {
    event.preventDefault();
    setShowEmoji(!showEmoji);

    if (showEmoji) {
      document.getElementById('textField').focus();
    } else {
      document.getElementById('textField').blur();
    }

    console.log('handleEmojiClick');
  };

  const handleSendFileClick = () => {
    console.log('handleSendFileClick');
  };

  const handleVoiceChatClick = () => {
    console.log('handleVoiceChatClick');
  };

  const handleSendMsg = (e) => {
    e.preventDefault();

    console.log('handleSendMsg currentChatId=', currentChatId);
    console.log('handleSendMsg messageText=', messageText);

    if (!messageText.trim()) return;

    const docRef = addDoc(collection(db, 'chats', currentChatId as string, 'messages'), {
      type: 'text',
      emoji: '',
      image: '',
      sentAt: serverTimestamp(),
      sentBy: currentUser.email,
      text: messageText.trim(),
    }).then((ref) => {
      console.log('New message created, ', ref.id);
    });

    setDoc(doc(db, 'users', currentUser.uid), { lastSeen: serverTimestamp() }, { merge: true });

    setMessageText('');
    //scrollToBottom();
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.keyCode === 13) {
      handleSendMsg(e);
      console.log('Entry key down');
    }
  };

  const handleTextChange = (text) => {
    console.log('handleTextChange = ', text);
    setMessageText(text);
  };

  const addEmoji = (e) => {
    const emoji = e.native;
    setMessageText(messageText + emoji);
    setShowEmoji(!showEmoji);
    document.getElementById('textField').focus();
    console.log('typed', messageText);
  };

  return (
    <Container disabled={disabled}>
      <Toolbox>
        <ToolItem onClick={handleEmojiClick}>
          <EmojiIcon size='25' data-tip data-for='emojiTip' />
          <ReactTooltip id='emojiTip' place='bottom' effect='solid' type='info'>
            Emoji
          </ReactTooltip>
        </ToolItem>
        <ToolItem onClick={handleSendFileClick}>
          <SendImageIcon size='25' data-tip data-for='sendFileTip' />
          <ReactTooltip id='sendFileTip' place='bottom' effect='solid' type='info'>
            Send picture
          </ReactTooltip>
        </ToolItem>
        {showEmoji && (
          <EmojiContainer>
            <Picker
              title='Pick your emoji . . . '
              set='apple'
              emoji='point_up'
              onSelect={addEmoji}
              showPreview={false}
              autoFocus={true}
              style={{ position: 'absolute', bottom: '20px', right: '20px', overflowY: 'auto' }}
            />
          </EmojiContainer>
        )}
      </Toolbox>
      <TextEditor>
        <textarea
          id='textField'
          placeholder='Say hello ...'
          onKeyDown={handleKeyDown}
          onChange={(event) => handleTextChange(event.target.value)}
          value={messageText}
        ></textarea>
      </TextEditor>
      <SendButton className={'chat-room-message-editor-btn'}>
        <Button onClick={handleSendMsg}>Send</Button>
      </SendButton>
    </Container>
  );
};

MessageEditor.propTypes = {};

export default MessageEditor;
