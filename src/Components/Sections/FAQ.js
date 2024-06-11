import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="site-section bg-light" id="faq-section">
      <div className="container">
        <div className="row mb-5">
          <div className="block-heading-1 col-12 text-center">
            <h2>{t("faq.faq_name")}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {t("faq.q1")}
              </AccordionSummary>
              <AccordionDetails>{t("faq.q1_details")}</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {t("faq.q2")}
              </AccordionSummary>
              <AccordionDetails>{t("faq.q2_details")}</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {t("faq.q3")}
              </AccordionSummary>
              <AccordionDetails>{t("faq.q3_details")}</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {t("faq.q4")}
              </AccordionSummary>
              <AccordionDetails>{t("faq.q4_details")}</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {t("faq.q5")}
              </AccordionSummary>
              <AccordionDetails>{t("faq.q5_details")}</AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
