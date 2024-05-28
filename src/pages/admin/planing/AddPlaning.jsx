import React, { useContext, useEffect, useState } from "react";
import { Backdrop, CircularProgress, Grid } from "@mui/material";
import { toast } from "react-hot-toast";
import { myContext } from "../../../context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs"; // Import dayjs for date manipulation

function getDayOfWeek(dayIndex) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[dayIndex];
}

const AddPlaning = () => {
  const [inputV, setInputV] = useState([
    { daysOfWeek: [1], startTime: "", endTime: "" },
    { daysOfWeek: [2], startTime: "", endTime: "" },
    { daysOfWeek: [3], startTime: "", endTime: "" },
    { daysOfWeek: [4], startTime: "", endTime: "" },
    { daysOfWeek: [5], startTime: "", endTime: "" },
    { daysOfWeek: [6], startTime: "", endTime: "" },
    { daysOfWeek: [0], startTime: "", endTime: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const context = useContext(myContext);
  const navigate = useNavigate();
  const { idP } = useParams();
  const [stadium, setStadium] = useState(null);

  const handleAddPlaning = async () => {
    try {
      setLoading(true);
      const data = { availableHours: inputV, stadiumId: idP };
        setInputV([
          { daysOfWeek: [1], startTime: "", endTime: "" },
          { daysOfWeek: [2], startTime: "", endTime: "" },
          { daysOfWeek: [3], startTime: "", endTime: "" },
          { daysOfWeek: [4], startTime: "", endTime: "" },
          { daysOfWeek: [5], startTime: "", endTime: "" },
          { daysOfWeek: [6], startTime: "", endTime: "" },
          { daysOfWeek: [0], startTime: "", endTime: "" },
        ]);
  
      let res = await context?.addPlaning(data);

      toast.success(res.message);
      setTimeout(() => {
        navigate(-1);
      }, 5000);
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const stadium1 = await context?.getOneStadium(idP);
        setStadium(stadium1);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [context, idP]);

  const handleTimeChange = (index, field, value) => {
    const hour = value ? value.$H : "";
    setInputV((prevState) => {
      const newState = [...prevState];
      newState[index] = { ...newState[index], [field]: hour+":00" };
      return newState;
    });
    console.log(inputV[0].startTime.split(":")[0])
  };
  const getD = (hour) => {
    let date  
    if (hour) {
      date=new Date();
      date.setHours(hour);
      date.setMinutes("00");
    }else{
      date=null
    }
    

    return date;
  };

  const roundToHour = (time) => {
    const hour = time.hour();
    return dayjs()
      .set("hour", hour)
      .set("minute", 0)
      .set("second", 0)
      .set("millisecond", 0);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress style={{ color: "#ff1744" }} />
        </Backdrop>
        <div className="p-4">
          <h1 className="mb-4 text-xl text-center break-words font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            {idP ? `Add Planning for ` : "Update Planning for "}{" "}
            {stadium?.title}
          </h1>
        </div>
        <Grid container>
          {inputV.map((schedule, index) => (
            <Grid item xs={12} key={index}>
              <h1 className="mt-5 font-bold text-lg">
                {getDayOfWeek(schedule.daysOfWeek[0])} :{" "}
              </h1>
              <div className="flex justify-around">
                <div className="p-3 mr-2">
                  <TimePicker
                    label="Start Hour"
                    value={dayjs(getD(schedule.startTime))}
                    onChange={(newValue) =>
                      handleTimeChange(
                        index,
                        "startTime",
                        roundToHour(newValue)
                      )
                    }
                  />
                </div>
                <div className="p-3 mr-2">
                  <TimePicker
                    label="End Hour"
                    value={dayjs(getD(schedule.endTime))}
                    onChange={(newValue) =>
                      handleTimeChange(index, "endTime", roundToHour(newValue))
                    }
                  />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        <div className="mt-10 w-full flex items-center justify-center">
          <button
            className="btn btn-outline btn-error"
            onClick={handleAddPlaning}
          >
            Add
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default AddPlaning;
