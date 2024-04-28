import styled from "styled-components";
import Background from "../../assets/images/background.png";
import AboutSummaryContainer from "./summary.component";
import CertContainer from "../certifications/certifications.component";
import ContactsContainer from "../contact/contact";

export default function AboutContainer() {
  const goals = [
    "To help solve users problems as creatively as possible.",
    "To improve my skills and grow professionally and one day soon proudly call myself a senior user experience designer.",
    "To share my designs with the world and strive to be the best person I can be.",
  ];
  return (
    <Container>
      <Content>
        <HeroContainer>
          <Overlay>
            <Inner>
              <h3>About Me</h3>
            </Inner>
          </Overlay>
        </HeroContainer>
      </Content>
      <CertContainer />
      <Content>
        <AboutSummaryContainer showImage={false} />
        <Goals>
          {goals.map((goal) => (
            <GoalItem>{goal}</GoalItem>
          ))}
        </Goals>
        <ContactsContainer />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 100px;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    background-size: 220px;
  }

  @media (min-width: ${(props) => props.theme.bp.md}) {
    background-position: 10% 100px, 95% 45%;
    background-size: 250px;
  }
`;

const HeroContainer = styled.main`
  position: relative;
  margin: 0 auto;
  width: 100%;
  background-image: url(${Background});
  background-size: cover;
  background-position: 50% 0;
  background-repeat: no-repeat;
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: ${(props) => props.theme.fontSize.xl3};
`;

export const Overlay = styled.div`
  opacity: 0.85;
  width: 100%;
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

const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Goals = styled.ul`
  margin-left: 30px;
  width: 85%;
  max-width: ${(props) => props.theme.bp.xs};
  font-size: ${(props) => props.theme.fontSize.xl};

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    margin-left: 70px;
    font-size: ${(props) => props.theme.fontSize.xl1};
    max-width: ${(props) => props.theme.bp.sm};
  }
`;

const GoalItem = styled.li`
  margin-bottom: 1em;
`;
