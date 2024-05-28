import { useContext, useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid'
import { Link, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import { Backdrop, CircularProgress } from "@mui/material";
import { myContext } from "../../../../context/GlobalContext";

const PlaningTable = () => {
  const context = useContext(myContext);
  const [planing, setPlaning] = useState([]);
  const [loading, setLoading] = useState(false)
  const { idS } = useParams()

  const deleteNews = async (planingId) => {
    try {
      const res = await context?.deleteNews(planingId)
      toast.success(res.message)
      const index = planing.findIndex((row) => row._id.toString() === planingId);
      if (index !== -1) {
        console.log(index);
        setPlaning(planing.slice(0, index).concat(planing.slice(index + 1)));
      }
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  const columns = [
    {
      field: "stadiumImg",
      headerName: "Stadium Image",
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
      headerName: "Type",
      width: 150,
      editable: true,
    },
    {
      field: "monday",
      headerName: "Monday",
      width: 150,
      editable: true,
    },
    {
      field: "tuesday",
      headerName: "Tuesday",
      width: 150,
      editable: true,
    },
    {
      field: "wednesday",
      headerName: "Wednesday",
      width: 150,
      editable: true,
    },
    {
      field: "thursday",
      headerName: "thursday",
      width: 150,
      editable: true,
    },
    {
      field: "friday",
      headerName: "Friday",
      width: 150,
      editable: true,
    },
    {
      field: "saturday",
      headerName: "Saturday",
      width: 150,
      editable: true,
    },
    {
      field: "sunday",
      headerName: "Sunday",
      width: 150,
      editable: true,
    },
    {
      field: "nbH",
      headerName: "Hours number per week",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "reserH",
      headerName: "Reserved Hours",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "nbrReservation",
      headerName: "Number of reservations",
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

  ];


  // Function to format time range
  function getTimeRange(hour) {
    if (hour) {
      return `${formatTime(hour.startTime)}-${formatTime(hour.endTime)}`;
    } else {
      return "Closed"; // Or any default value if the hour is not available
    }
  }

  // Function to format time (add leading zero if needed)
  function formatTime(time) {
    return time < 10 ? `0${time}:00` : `${time}:00`;
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await context?.GetStadiumPlannings(idS);
        setPlaning(
          res.map((obj) => ({
            id: obj.planing._id.toString(),
            nbH: obj.numberH,
            reserH: obj.reserH,
            nbrReservation: obj.planing.reservations.length,
            stadiumImg: obj.planing.stadiumId.images,
            title: obj.planing.stadiumId.title,
            // Extracting days and corresponding time ranges
            monday:  `${obj.planing.availableHours[1]?.startTime} - ${obj.planing.availableHours[1]?.endTime}`,
            tuesday:  `${obj.planing.availableHours[2]?.startTime} - ${obj.planing.availableHours[2]?.endTime}`,
            wednesday:  `${obj.planing.availableHours[3]?.startTime} - ${obj.planing.availableHours[3]?.endTime}`,
            thursday:  `${obj.planing.availableHours[4]?.startTime} - ${obj.planing.availableHours[4]?.endTime}`,
            friday:  `${obj.planing.availableHours[5]?.startTime} - ${obj.planing.availableHours[5]?.endTime}`,
            saturday:  `${obj.planing.availableHours[6]?.startTime} - ${obj.planing.availableHours[6]?.endTime}`,
            sunday:  `${obj.planing.availableHours[0]?.startTime} - ${obj.planing.availableHours[0]?.endTime}`,
            date: new Date(obj.planing.createdAt?.toString().replace("T", " ").replace("Z", "")),
            text: obj.planing.stadiumId.currentPlaning.toString() == obj.planing._id.toString() ? "Current" : obj.planing.stadiumId.comingPlaning.toString() == obj.planing._id.toString() ? "Comming" : "past"
          }))
        );
        console.log({ planing })
        // console.log({ planing })
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        setLoading(false)
      }, 500)
    };
    fetchData();
  }, [idS]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress style={{ color: "#ff1744" }} />
      </Backdrop>
      <DataGrid
        rows={planing}
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


export default PlaningTable