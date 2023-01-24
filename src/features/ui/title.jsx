import styled from "styled-components";

export default function Title({ children }) {
  return (
    <Container>
      <Name>{children}</Name>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  margin-bottom: 100px;
  border-bottom: solid 1px ${(props) => props.theme.colors.primary};
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.primary};
`;
