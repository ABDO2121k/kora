import { useContext, useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid'
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import { myContext } from "../../../../context/GlobalContext";
import HtmlRenderer from "../../news/htmlToText/F";
import SectionModal from "../modals/SectionModal";


const SectionTable = ({ counter, setCounter }) => {
    const context = useContext(myContext);
    const [sections, setSections] = useState([]);
    const [sectionOpen, setSectionOpen] = useState(false);
    const [selectedId, setSelectedId] = useState()

    const deleteNews = async (cardId) => {
        try {
            const res = await context?.deleteSection(cardId)
            toast.success(res.message)
            const index = sections.findIndex((row) => row._id.toString() === cardId);
            if (index !== -1) {
                console.log(index);
                setSections(sections.slice(0, index).concat(sections.slice(index + 1)));
            }
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    const columns = [
        {
            field: "image",
            headerName: "Image",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <img
                        src={params.value}
                        className="p-3 rounded-md"
                        style={{ width: "100px", height: "60px", margin: "auto" }}
                        alt="image"
                    />
                </>
            ),
        },
        {
            field: "title",
            headerName: "Title",
            width: 150,
            editable: true,
        },
        {
            field: "semiTitle",
            headerName: "semi Title",
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
            headerName: "Edit Section",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <EditIcon
                        onClick={() => (setSectionOpen(true), setSelectedId(params.value))}
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
                const res = await context?.getSections();
                setSections(
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
                rows={sections}
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
            <SectionModal open={sectionOpen} setOpen={setSectionOpen} type={'edit'} sectionId={selectedId} setCounter={setCounter} />
        </div>
    );
};


export default SectionTable