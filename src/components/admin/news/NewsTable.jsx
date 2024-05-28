import { useContext, useEffect, useState } from "react"
import { myContext } from "../../../context/GlobalContext"
import { DataGrid } from '@mui/x-data-grid'
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import HtmlRenderer from "./htmlToText/F";
import { Backdrop, CircularProgress } from "@mui/material";

const NewsTable = () => {
    const context = useContext(myContext);
    const [news, setNews] = useState([]);
    const [loading,setLoading]=useState(false)

    const deleteNews = async (newsId) => {
        try {
            const res = await context?.deleteNews(newsId)
            toast.success(res.message)
            const index = news.findIndex((row) => row._id.toString() === newsId);
            if (index !== -1) {
                console.log(index);
                setNews(news.slice(0, index).concat(news.slice(index + 1)));
            }
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    const columns = [
        {
            field: "images",
            headerName: "Images",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <img
                        src={params.formattedValue[0]}
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
            field: "text",
            headerName: "Text",
            width: 150,
            editable: true,
            renderCell: (params) => (
                <>
                    <HtmlRenderer text={params.value} />
                </>
            ),
        },
        {
            field: "nbI",
            headerName: "Images Number",
            type: "number",
            width: 150,
            editable: true,
        },
        {
            field: "nbC",
            headerName: "Comments Number",
            type: "number",
            width: 150,
            editable: true,
        },
        {
            field: "date",
            headerName: "Created At",
            width: 200,
            type: "dateTime"
        },
        {
            field: "_id",
            headerName: "edit",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <Link to={`/admin/news/update/${params.value}`} className="text-green-300"><EditIcon /></Link>
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
                setLoading(true)
                const res = await context?.getNews();
                setNews(
                    res.map((obj) => ({
                        ...obj,
                        id: obj._id.toString(),
                        id2: obj._id.toString(),
                        nbC: obj.comments?.length,
                        nbI: obj.images?.length,
                        date: new Date(
                            obj.createdAt?.toString().replace("T", " ").replace("Z", "")
                        ),
                    }))
                );
            } catch (err) {
                console.log(err);
            }
            setTimeout(()=>{
                setLoading(false)
            },500)
        };
        fetchData();
    }, []);

    return (
        <div style={{ height: 400, width: "100%" }}>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress style={{ color: "#ff1744" }} />
            </Backdrop>
            <DataGrid
                rows={news}
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
        </div>
    );
};


export default NewsTable