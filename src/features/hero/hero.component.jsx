import styled from "styled-components";
import Background from "../../assets/images/background.png";
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
          <Intro>
            <IntroHeader>Georgina Riebelle</IntroHeader>
            <Text>
              {" "}
              My Name is Gina and I am a Product Designer specializing in User
              Experience and User Interface Design. I take pride and have real
              passion for the entire design process from conceptualization and
              research to creating sitemaps, mockups, low fidelity and high
              fidelity designs.
            </Text>
          </Intro>
          {/* 
          <Text>You need me if you are looking for someone who can</Text>
          <TypeWritterWrapper>
            <TypeWritterText text={text}>{text}</TypeWritterText>
            <Cursor cursorColor="white" />
          </TypeWritterWrapper>
          <Text>Products and Brands</Text> */}
        </Inner>
        <ButtonsWrapper>
          <Button onClick={handleDownload}>Download Resume</Button>
          <Button>View Projects</Button>
        </ButtonsWrapper>
      </Overlay>
    </Container>
  );
}

export const Container = styled.main`
  position: relative;
  margin: 0 auto;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl4};

  &::before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
`;

export const Overlay = styled.div`
  opacity: 0.85;
  width: 100%;
`;

export const Inner = styled.div`
  padding: 200px 0 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1600px;
  font-size: ${({ theme }) => theme.fontSize.xl2};

  @media (min-width: ${({ theme }) => theme.bp.md}) {
    font-size: ${({ theme }) => theme.fontSize.xl3};
    line-height: 1.6;
  }

  @media (min-width: ${({ theme }) => theme.bp.lg}) {
    font-size: ${({ theme }) => theme.fontSize.xl4};
    line-height: 1.6;
  }
`;

export const Intro = styled.div`
  width: 90%;
  max-width: 500px;
  text-align: justify;
`;

export const IntroHeader = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl4};
`;

export const TypeWritterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
`;

export const TypeWritterText = styled.div`
  color: ${({ text }) => {
    switch (text[0]) {
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
  font-size: 24px;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;
