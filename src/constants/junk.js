import styled from "styled-components";
import Udemy from "../../assets/images/udemy-logo.png";
import Uniben from "../../assets/images/uniben.png";
import Coursera from "../../assets/images/google-coursera.png";
import BYOL from "../../assets/images/byol.png";
import ZerotoMastery from "../../assets/images/zero-to-mastery.png";

export default function CertContainer() {
  const certList = [
    [
      { name: "Figma", icon: Uniben },
      { name: "Adobe XD", icon: ZerotoMastery },
      { name: "Photoshop", icon: BYOL },
    ],
    [
      { name: "Adobe Illustrator", icon: Coursera },
      { name: "HTML", icon: Udemy },
      { name: "CSS", icon: Udemy },
    ],
    // [{ name: "JavaScript", icon: Udemy }],
  ];

  return (
    <Container id="certifications">
      <table>
        {certList.map((row) => (
          <CertListRow row={row} />
        ))}
      </table>
    </Container>
  );
}

const CertListRow = ({ row }) => {
  console.log(row);
  return (
    <CertList>
      {row.map((cert) => (
        <CertListItem>
          <div
            style={{
              display: "flex",
              border: "solid 2px green",
            }}
          >
            <LogoContainer>
              <img src={cert.icon} alt={cert.name} />
            </LogoContainer>
            <p>{cert.name}</p>
          </div>
        </CertListItem>
      ))}
    </CertList>
  );
};

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
  max-width: 1600px;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: between;
`;

export const CertListItem = styled.td`
  // flex-basis: 50%;
  // display: flex;
  // justify-content:center;
  // align-items: center;
  // gap: 4px;
  min-width: 200px;
  border: solid 2px magenta;

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
