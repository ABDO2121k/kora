
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HtmlRenderer from '../../admin/news/htmlToText/F';

export default function AccordionAdmin({ faq }) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {faq?.title}
                </AccordionSummary>
                <AccordionDetails>
                <HtmlRenderer text={faq?.text} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}