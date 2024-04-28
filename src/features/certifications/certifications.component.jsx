import styled from "styled-components";
import Figma from "../../assets/images/figma.png";
import AdobeXd from "../../assets/images/adobexd.png";
import Photoshop from "../../assets/images/photoshop.png";
import Illustrator from "../../assets/images/illustrator.png";
import HTML from "../../assets/images/html5.png";
import CSS from "../../assets/images/css3.png";
import Javascript from "../../assets/images/javascript.png";

export default function CertContainer() {
  const certList = [
    { name: "Figma", icon: Figma },
    { name: "Adobe XD", icon: AdobeXd },
    { name: "Photoshop", icon: Photoshop },
    { name: "Adobe Illustrator", icon: Illustrator },
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: Javascript },
  ];

  return (
    <Container id="certifications">
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
  padding: 2em 0;
  position: relative;
  margin: 0 auto;
  width: 100%;
  background-color: #323232;
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (min-width: ${({ theme }) => theme.bp.md}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const CertList = styled.tr`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CertListItem = styled.tr`
  flex-basis: 50%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #3A3A3A;
  border-radius: 8px;
  padding: 20px 0;
  margin: 5px;

  &:hover {
    transform: scale(1.05)
  }

  & img{
   width: 100%;
   object-fit: cover;
   translateY(-20%);
  }

  @media (min-width: ${({ theme }) => theme.bp.md}) {
    flex-basis: 25%;
  }


`;

export const LogoContainer = styled.div`
  width: 30px;
  height: 30px;
`;
