import React, { useState } from 'react';

import { Tag, Icons } from 'bulian-ui';

import {
  Container,
  SidebarHeader,
  SidebarOne,
  SidebarTwo,
  LinksGroup,
  SidebarLink,
} from './sidebar.styled';

export const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container isVisible={isVisible}>
      {isVisible ? (
        <SidebarHeader>
          <h4>Заголовок</h4>
          <Tag title="свернуть" onClick={() => setIsVisible(false)}>
            <Icons.LeftArrowIcon />
          </Tag>
        </SidebarHeader>
      ) : (
        <SidebarHeader>
          <Tag title="развернуть" onClick={() => setIsVisible(true)}>
            <Icons.RightArrowIcon />
          </Tag>
        </SidebarHeader>
      )}

      <SidebarOne isVisible={isVisible}>
        <LinksGroup>
          <SidebarLink>
            <Icons.HomeIcon style={{ marginRight: 8 }} />
            Ссылка
          </SidebarLink>
          <SidebarLink>
            <Icons.SearchIcon style={{ marginRight: 8 }} />
            Ссылка
          </SidebarLink>
          <SidebarLink>
            <Icons.SmileIcon style={{ marginRight: 8 }} />
            Ссылка
          </SidebarLink>
        </LinksGroup>
      </SidebarOne>
      <SidebarTwo isVisible={isVisible}></SidebarTwo>
    </Container>
  );
};
