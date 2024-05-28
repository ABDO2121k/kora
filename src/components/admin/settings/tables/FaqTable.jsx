import { useContext, useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid'
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import { myContext } from "../../../../context/GlobalContext";
import HtmlRenderer from "../../news/htmlToText/F";
import FaqModal from "../modals/FaqModal";


const Faq = ({ counter, setCounter }) => {
    const context = useContext(myContext);
    const [faqs, setFaqs] = useState([]);
    const [faqOpen, setFaqOpen] = useState(false);
    const [selectedId, setSelectedId] = useState()

    const deleteNews = async (faqId) => {
        try {
            const res = await context?.deleteFaq(faqId)
            toast.success(res.message)
            const index = faqs.findIndex((row) => row._id.toString() === faqId);
            if (index !== -1) {
                console.log(index);
                setFaqs(faqs.slice(0, index).concat(faqs.slice(index + 1)));
            }
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    const columns = [
        {
            field: "title",
            headerName: "Question",
            width: 150,
            editable: true,
        },
        {
            field: "text",
            headerName: "answer",
            width: 150,
            editable: true,
            renderCell: (params) => (
                <>
                    <HtmlRenderer text={params.value} />
                </>
            ),
        },
        {
            field: "date",
            headerName: "Created At",
            width: 200,
            type: "dateTime"
        },
        {
            field: "_id",
            headerName: "Edit Faq",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <EditIcon
                        onClick={() => (setFaqOpen(true), setSelectedId(params.value))}
                    />
                </>
            ),
        },
        {
            field: "id2",
            headerName: "delete",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <DeleteIcon
                        className="cursor-pointer text-red-300 m-auto"
                        onClick={() => deleteNews(params.value)}
                    />
                </>
            ),
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await context?.getFaqs();
                setFaqs(
                    res.map((obj) => ({
                        ...obj,
                        id: obj._id.toString(),
                        id2: obj._id.toString(),
                        date: new Date(
                            obj.createdAt?.toString().replace("T", " ").replace("Z", "")
                        ),
                    }))
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [counter]);

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={faqs}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[2, 5, 10]}
            />
            <FaqModal open={faqOpen} setOpen={setFaqOpen} type={'edit'} faqId={selectedId} setCounter={setCounter} />
        </div>
    );
};


export default Faq