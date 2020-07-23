import React from "react";
import styled from "styled-components";
import StyledModal from "styled-react-modal";
import Card from "../Card";
import Button from "../Button";

const Wrapper = StyledModal.styled`
  min-width: 400px;
`;

const Header = styled(Card.Header)`
  background-color: ${({ theme }) => theme.palettes.primary.background};
  color: ${({ theme }) => theme.palettes.primary.foreground};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h6`
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
`;

const Body = styled(Card.Body)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Footer = styled(Card.Footer)`
  border: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: flex-end;
  > * {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
`;

const ConfirmModal = React.memo(
  ({ title, isOpen, theme, cancelFn, confirmFn, children }) => (
    <Wrapper isOpen={isOpen} theme={theme}>
      <Card>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>{children}</Body>
        <Footer>
          <Button onClick={cancelFn}>Cancel</Button>
          <Button onClick={confirmFn} palette="primary">
            Ok
          </Button>
        </Footer>
      </Card>
    </Wrapper>
  )
);

ConfirmModal.defaultProps = {
  palette: "default",
  cancelFn: undefined,
  confirmFn: undefined
};

export default ConfirmModal;
