import HtmlRenderer from "../../admin/news/htmlToText/F";
import sectionStyles from "./styles/section.module.css";

const AdminSection = ({ section, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="py-10 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <div className="section-heading">
                        <h3 className={sectionStyles.h3}>
                            {section?.semiTitle}
                        </h3>
                        <h2 className={sectionStyles.sectionTitle}>
                            {section?.title}
                        </h2>
                    </div>
                    <HtmlRenderer text={section?.text} />
                </div>
                <div className={`pb-5 ${isEven ? 'order-first' : 'order-last'}`}>
                    <div className={`${sectionStyles.bgaa} mt-10 ml-5 rounded-md`}>
                        <img
                            className={`rounded-md absolute ml-10 object-cover h-full w-[80%] ${sectionStyles.img}`}
                            src={section?.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminSection;
