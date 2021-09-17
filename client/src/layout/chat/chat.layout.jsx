import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../hooks';
import { Tag, Input } from '../../components';

import io from 'socket.io-client';

import {
  RightArrowIcon,
  LeftArrowIcon,
  UsersIcon,
  SmileIcon,
} from '../../icons';
import { Container, ChatHeader, ChatBody, ChatFooter, StyledMessage } from './';

let socket;

export const Chat = observer(() => {
  const { userStore } = useStore();
  const [username, setUsername] = useState('User');
  const [users, setUsers] = useState('');
  const [roomId, setRoomId] = useState('main');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isRoomInfo, setIsRoomInfo] = useState(false);

  useEffect(() => {
    socket = io('localhost:8080', { withCredentials: true });

    socket.emit('join', { username, roomId }, (err) => {
      if(err) {
        alert(err.message);
      }
    });

    return () => {
      socket.emit('disconect', {username, roomId});
      socket.off();
    };
    
  }, []);

  useEffect(() => {
    console.log('qqqq');
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const handleKeyPress = (e) => {
    if (message && e.key === 'Enter') {
      socket.emit('message', {username, message, roomId});
      setMessage('');
    }
  };

  const renderMessages = () => {
    return messages.map(({ username, message }, i) => (
      <StyledMessage key={i}>
        {username}: {message}
      </StyledMessage>
    ))
  };

  const renderUsers = () => {
    return users.map((username) => (
      <StyledMessage key={username}>
        {username}
      </StyledMessage>
    ))
  };

  return (
    <Container isVisible={isVisible}>
      {isVisible ? (
        <ChatHeader>
          <Tag title="свернуть" onClick={() => setIsVisible(false)}>
            <RightArrowIcon />
          </Tag>
          <h4>Чат трансляции</h4>
          <Tag title="пользователи чата" isActive={isRoomInfo} onClick={() => setIsRoomInfo(!isRoomInfo)}>
            <UsersIcon />
          </Tag>
        </ChatHeader>
      ) : (
        <ChatHeader>
          <Tag title="развернуть" onClick={() => setIsVisible(true)}>
            <LeftArrowIcon />
          </Tag>
        </ChatHeader>
      )}

      <ChatBody isVisible={isVisible}>
        {isRoomInfo ? renderUsers() : renderMessages()}
      </ChatBody>
      <ChatFooter isVisible={isVisible}>
        <Tag title="смайлики" style={{ marginRight: '0.5rem' }}>
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
