import styled from "styled-components";
import Luffy from "../../assets/images/luffy.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../ui/button";

export default function HeroContainer() {
  const [text] = useTypewriter({
    words: ["Research", "Design", "Support"],
    loop: false,
  });

  const handleDownload = () => {
    fetch("./pdf/georgina_riebelle.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "georgina_riebelle_resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <Container id="about">
      <Overlay>
        <Inner>
          <Text> Hi there, 👋🏾</Text>
          <Text> My Name is Gina and</Text>
          <TypeWritterWrapper>
            <Text> i </Text>
            <TypeWritterText text={text}>{text}</TypeWritterText>
            <Cursor cursorColor="white" />
          </TypeWritterWrapper>
          <Text>Products and Brands</Text>
          <ButtonsWrapper>
            <Button variant="SECONDARY" onClick={handleDownload}>
              Download Resume
            </Button>
            <Button>View Projects</Button>
          </ButtonsWrapper>
        </Inner>
      </Overlay>
    </Container>
  );
}

export const Container = styled.main`
  position: relative;
  margin: 0 auto;
  width: 100%;
  background-color: black;
  background-image: url(${Luffy});
  background-size: cover;
  background-position: 50% 0;
  background-repeat: no-repeat;
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: ${(props) => props.theme.fontSize.xl3};
`;

export const Overlay = styled.div`
  opacity: 0.85;
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutralBlackDarker};
`;

export const Inner = styled.div`
  padding: 160px 0 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  max-width: 750px;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.xl2};

  @media (min-width: ${(props) => props.theme.bp.md}) {
    font-size: ${(props) => props.theme.fontSize.xl3};
    line-height: 1.6;
  }

  @media (min-width: ${(props) => props.theme.bp.lg}) {
    font-size: ${(props) => props.theme.fontSize.xl4};
    line-height: 1.6;
  }
`;

export const TypeWritterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
`;

export const TypeWritterText = styled.div`
  color: ${(props) => {
    switch (props.text[0]) {
      case "R":
        return "yellow";
      case "D":
        return "cyan";
      case "S":
        return "magenta";
      default:
        return "white";
    }
  }};
  margin-left: 8px;
  text-align: center;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;
