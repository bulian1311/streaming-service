import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../hooks';
import { Tag, Input } from '../../components';

import {
  RightArrowIcon,
  LeftArrowIcon,
  UsersIcon,
  SmileIcon,
} from '../../icons';
import { Container, ChatHeader, ChatBody, ChatFooter, StyledMessage } from './';

export const Chat = observer(() => {
  const { userStore, chatStore } = useStore();
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    chatStore.listenMessage();

    return () => {
      chatStore.disconnectChat();
    };
  }, [chatStore]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      chatStore.sendMessage('User', message);
      setMessage('');
    }
  };

  return (
    <Container isVisible={isVisible}>
      {isVisible ? (
        <ChatHeader>
          <Tag onClick={() => setIsVisible(false)}>
            <RightArrowIcon />
          </Tag>
          <h4>Чат трансляции</h4>
          <Tag>
            <UsersIcon />
          </Tag>
        </ChatHeader>
      ) : (
        <ChatHeader>
          <Tag onClick={() => setIsVisible(true)}>
            <LeftArrowIcon />
          </Tag>
        </ChatHeader>
      )}

      <ChatBody isVisible={isVisible}>
        {chatStore.messages.map(({ username, message }, i) => (
          <StyledMessage key={i}>
            {username}: {message}
          </StyledMessage>
        ))}
      </ChatBody>
      <ChatFooter isVisible={isVisible}>
        <Tag style={{ marginRight: '0.5rem' }}>
          <SmileIcon />
        </Tag>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={!userStore.isAuth}
        />
      </ChatFooter>
    </Container>
  );
});
