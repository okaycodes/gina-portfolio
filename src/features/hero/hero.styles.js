import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl3};
  color: white;
  line-height: 1.6;
  display: inline;
`;

export const Text = styled.p`
  display: inline;
`;

export const TextAccent = styled.span`
  display: inline;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin: 190px 0 100px;
  background-color: white;
  border-radius: 50%;
`;
// additional 90px is added to the avatar to account for the
// default height of the fixed header

export const Intro = styled.div`
  font-size: 1.25rem;
  width: 85%;
  max-width: 750px;
  text-align: center;
`;