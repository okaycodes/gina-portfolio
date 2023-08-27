import styled from "styled-components";
import Udemy from "../../assets/images/udemy-logo.png";
import Uniben from "../../assets/images/uniben.png";
import Coursera from "../../assets/images/google-coursera.png";
import BYOL from "../../assets/images/byol.png";
import ZerotoMastery from "../../assets/images/zero-to-mastery.png";

export default function CertContainer() {
  const certList = [
    { name: "University of Benin", icon: Uniben },
    { name: "Zero to Mastery", icon: ZerotoMastery },
    { name: "Bring Your Own Laptop", icon: BYOL },
    { name: "Google Coursera", icon: Coursera },
    { name: "Udemy", icon: Udemy },
  ];
  return (
    <Container id="about">
      <CertList>
        {certList.map((cert) => (
          <CertListItem>
            <LogoContainer>
              <img src={cert.icon} alt={cert.name} />
            </LogoContainer>
            <p>{cert.name}</p>
          </CertListItem>
        ))}
      </CertList>
    </Container>
  );
}

export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  background-color: black;
`;

export const CertList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CertListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:nth-child(1){
   grid-column: span 2 / span 2;
  }

  & img{
   width: 100%;
   object-fit: cover;
   translateY(-20%);
 }

    &:nth-child(5) img {
      transform: translateY(35%) scale(150%);
    }

    &:nth-child(4) img {
      transform: translateY(-20%) scale(200%);
    }
`;

export const LogoContainer = styled.div`
  width: 30px;
  height: 30px;
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

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    font-size: ${(props) => props.theme.fontSize.xl3};
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
        return "green";
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
