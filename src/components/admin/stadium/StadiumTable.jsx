import { useContext, useEffect, useState } from "react"
import { myContext } from "../../../context/GlobalContext"
import { DataGrid } from '@mui/x-data-grid'
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import toast from "react-hot-toast";
import HtmlRenderer from "../news/htmlToText/F";
import { Backdrop, CircularProgress } from "@mui/material";


const StadiumTable = () => {
    const context = useContext(myContext);
    const [stadiums, setStadiums] = useState([]);
    const [loading, setLoading] = useState(false)

    const deleteStadium = async (stadiumId) => {
        try {
            const res = await context?.deleteStadium(stadiumId)
            toast.success(res.message)
            const index = stadiums.findIndex((row) => row._id.toString() === stadiumId);
            if (index !== -1) {
                console.log(index);
                setStadiums(stadiums.slice(0, index).concat(stadiums.slice(index + 1)));
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
            headerName: "Stadium Name",
            width: 250,
            editable: true,
        },
        {
            field: "prix",
            headerName: "Total Price",
            width: 150,
            type: 'number',
            editable: true,
        },
        {
            field: "taille",
            headerName: "Team Size",
            width: 150,
            type: 'number',
            editable: true,
        },
        {
            field: "details",
            headerName: "Stadium Details",
            width: 300,
            editable: true,
            renderCell: (params) => (
                <>
                    <HtmlRenderer text={params.value} />
                </>
            )
        },
        {
            field: "typeG",
            headerName: "Type of Grass",
            width: 200,
            editable: true,
        },
        {
            field: "city",
            headerName: "City",
            width: 150,
            editable: true,
        },
        {
            field: "nbR",
            headerName: "Ratings Number",
            type: "number",
            width: 150,
            editable: true,
        },
        {
            field: "nbF",
            headerName: "Amenities Number",
            type: "number",
            width: 150,
            editable: true,
        },
        {
            field: "id",
            headerName: "View Planing",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <Link to={`/admin/stadium/planing/${params.value}`} className="text-green-300"><VisibilityIcon /></Link>
                </>
            ),
        },
        {
            field: "_id",
            headerName: "edit",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <Link to={`/admin/stadium/update/${params.value}`} className="text-green-300"><EditIcon /></Link>
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
                        onClick={() => deleteStadium(params.value)}
                    />
                </>
            ),
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await context?.getStadiums();
                setStadiums(
                    res.map((obj) => ({
                        ...obj,
                        id: obj._id.toString(),
                        id2: obj._id.toString(),
                        nbR: obj.ratings?.length,
                        nbF: obj.facilities?.length
                    }))
                );
            } catch (err) {
                console.log(err);
            }
            setTimeout(() => {
                setLoading(false)
            }, 500)
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
                rows={stadiums}
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


export default StadiumTable