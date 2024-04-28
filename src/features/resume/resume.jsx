import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { ImPrevious } from "react-icons/im";
import { ImNext } from "react-icons/im";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import Button from "../ui/button";
import { useWindowResize } from "../../hooks/useWindowResize";

export default function ResumeItem({ pageNumber }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const { width } = useWindowResize();
  const pdfWidth = width * 0.9 <= 900 ? width * 0.9 : 900;

  const handleDownload = () => {
    fetch("./pdf/gina_riebelle.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "gina_riebelle_resume.pdf";
        alink.click();
      });
    });
  };

  const handlePrev = () => {
    const element = document.getElementById("page-1");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    const element = document.getElementById("page-2");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container id={`page-${pageNumber}`}>
        <Actions>
          <PageActions>
            <PageNumber>Page: {pageNumber}/2</PageNumber>

            <SwitchPage>
              <Button
                variant="ICON"
                iconName="prev"
                onClick={handlePrev}
                animateIconLeft
                disabled={pageNumber === 1}
              >
                <ImPrevious />
              </Button>

              <Button
                variant="ICON"
                iconName="next"
                onClick={handleNext}
                animateIconRight
                disabled={pageNumber === 2}
              >
                <ImNext />
              </Button>
            </SwitchPage>
          </PageActions>

          <Button
            variant="ICON"
            iconName="download"
            animateIconDown
            onClick={handleDownload}
          >
            <AiOutlineDownload />
          </Button>
        </Actions>

        <Document file={"./pdf/gina_riebelle.pdf"} externalLinkTarget="_blank">
          <Page
            width={pdfWidth}
            pageNumber={pageNumber}
            renderAnnotationLayer={true}
          />
        </Document>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 0;
  margin-bottom: 0;
  max-width: 1000px;
`;

const Actions = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  margin: 0 auto;
  width: 90%;
`;

const PageActions = styled.div`
  display: flex;
`;

const SwitchPage = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 70px;
`;

const PageNumber = styled.p`
  font-size: ${(props) => props.theme.fontSize.m};
  margin-right: 1em;
`;
