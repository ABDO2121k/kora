
import HtmlRenderer from "../../admin/news/htmlToText/F";
import CardStyle from "./styles/Card.module.css";

const CardAdmin = ({ card }) => {
    return (
        <div className={CardStyle.card}>
            <p className={`${CardStyle.cardtitle} break-words`}>{card?.title}</p>
            <p className={CardStyle.smalldesc}>
                <HtmlRenderer text={card?.text} />
            </p>
        </div>
    )
}

export default CardAdmin