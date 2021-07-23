import React, { useState } from 'react';

import { Tag } from '../../components';
import {
  HomeIcon,
  SearchIcon,
  SmileIcon,
  RightArrowIcon,
  LeftArrowIcon,
} from '../../icons';
import {
  Container,
  SidebarHeader,
  SidebarOne,
  SidebarTwo,
  LinksGroup,
  SidebarLink,
} from './';

export const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container isVisible={isVisible}>
      {isVisible ? (
        <SidebarHeader>
          <h4>Заголовок</h4>
          <Tag onClick={() => setIsVisible(false)}>
            <LeftArrowIcon />
          </Tag>
        </SidebarHeader>
      ) : (
        <SidebarHeader>
          <Tag onClick={() => setIsVisible(true)}>
            <RightArrowIcon />
          </Tag>
        </SidebarHeader>
      )}

      <SidebarOne isVisible={isVisible}>
        <LinksGroup>
          <SidebarLink>
            <HomeIcon style={{ marginRight: 8 }} />
            Ссылка
          </SidebarLink>
          <SidebarLink>
            <SearchIcon style={{ marginRight: 8 }} />
            Ссылка
          </SidebarLink>
          <SidebarLink>
            <SmileIcon style={{ marginRight: 8 }} />
            Ссылка
          </SidebarLink>
        </LinksGroup>
      </SidebarOne>
      <SidebarTwo isVisible={isVisible}></SidebarTwo>
    </Container>
  );
};
