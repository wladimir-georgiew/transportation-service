import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  function GetRows(fromCity) {
    let data = t(fromCity, { returnObjects: true });
  
    return Object.keys(data).map(key => data[key])
  }

  return (
    <div className="site-section" id="pricing-section">
      <div className="container">
        <div className="row mb-5 lang-selector">
          <div className="block-heading-1 col-12 text-center">
            <h2>{t('pricing_list')}</h2>
          </div>
          {/* <LanguageSelector/> */}
        </div>

        {/* Plovdiv */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {t("plovdiv_main")}
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 300 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>{t('from_to')}</TableCell>
                    <TableCell align="right">{t('to_from')}</TableCell>
                    <TableCell align="right">{t('km')}</TableCell>
                    <TableCell align="right">{t('price')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {GetRows('plovdiv').map((row) => (
                    <TableRow
                      key={row.city}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {t("plovdiv_main")}
                      </TableCell>
                      <TableCell align="right">{row.city}</TableCell>
                      <TableCell align="right">{row.distance_km}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        {/* Sofia */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {t("sofia_main")}
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 300 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>{t('from_to')}</TableCell>
                    <TableCell align="right">{t('to_from')}</TableCell>
                    <TableCell align="right">{t('km')}</TableCell>
                    <TableCell align="right">{t('price')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {GetRows('sofia').map((row) => (
                    <TableRow
                      key={row.city}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {t("sofia_main")}
                      </TableCell>
                      <TableCell align="right">{row.city}</TableCell>
                      <TableCell align="right">{row.distance_km}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
