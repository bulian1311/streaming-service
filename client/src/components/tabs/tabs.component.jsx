import React from "react";

import { Container, StyledUl, StyledLi, StyledA } from "./tabs.styled";

export const Tabs = ({ tabs, activeTab, setActiveTab, ...props }) => {
  return (
    <Container {...props}>
      <StyledUl>
        {tabs.map((tab) => (
          <StyledLi key={tab}>
            <StyledA
              onClick={() => setActiveTab(tab)}
              isActive={tab === activeTab}
            >
              {tab}
            </StyledA>
          </StyledLi>
        ))}
      </StyledUl>
    </Container>
  );
};
