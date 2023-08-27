import styled from "styled-components";

export const SectionBaseStyles = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1100px;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

export const Divider = styled.hr`
  width: 68%;
  border: none;
  max-width: 1400px;
  border-top: 1.2px solid ${(props) => props.theme.colors.primary};
  margin: 100px auto;
`;
