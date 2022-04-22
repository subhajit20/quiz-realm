import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box, Slider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Skills({ setLoad }) {
    setLoad(100)
    return (
        <div>
            <Box p={14} pb={42} height="auto" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Typography variant="h4" color="darkslategray" fontFamily="monospace">Skills</Typography>
                <Typography variant="h6" color="Highlight" pb={3}>My Technical Level</Typography>
                <Container>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h4" fontFamily="monospace"> <i class="uil uil-brackets-curly"></i> - Frontend Developer </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" fontFamily="sans-serif">
                                <i class="uil uil-html5">90%</i>
                                <Slider disabled defaultValue={90} />
                            </Typography>
                            <Typography variant="h5" fontFamily="sans-serif">
                                <i class="uil uil-css3-simple">80%</i>
                                <Slider disabled defaultValue={80} />
                            </Typography>
                            <Typography variant="h5" fontFamily="sans-serif">
                                <i class="uil uil-java-script">70%</i>
                                <Slider disabled defaultValue={70} />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography variant="h4"><i class="uil uil-server-network-alt"></i> - Backend Framework</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5" fontFamily="sans-serif">
                                <FontAwesomeIcon icon="fa-brands fa-node-js" />
                                Node Js 50%
                                <Slider disabled defaultValue={50} />
                            </Typography>
                            <Typography variant="h5" fontFamily="sans-serif">
                                Express Js 70%
                                <Slider disabled defaultValue={70} />
                            </Typography>
                            <Typography variant="h5" fontFamily="sans-serif">
                                MongoDB 50%
                                <Slider disabled defaultValue={50} />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography variant="h4"><i class="uil uil-fire"></i> - Frontend Framework</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h4" fontFamily="sans-serif">
                                <i class="uil uil-react"></i>React 50%

                                <Slider disabled defaultValue={50} />
                            </Typography>
                            <Typography variant="h5" fontFamily="sans-serif">
                                Boostrap 50%
                                <Slider disabled defaultValue={50} />
                            </Typography>
                            <Typography variant="h5" fontFamily="sans-serif">
                                Material Ui
                                <Slider disabled defaultValue={30} />
                            </Typography>
                            <Typography variant="h5" fontFamily="sans-serif">
                                Tailwind CSS
                                <Slider disabled defaultValue={40} />
                            </Typography>
                            <Typography variant="h5" fontFamily="sans-serif">
                                Chakra Ui
                                <Slider disabled defaultValue={30} />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Box>
        </div >
    );
}


