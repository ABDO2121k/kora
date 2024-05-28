import { useContext, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import dayjs from "dayjs"; // Import dayjs for date manipulation
import { myContext } from "../../../../context/GlobalContext";
import {
  Backdrop,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import EventName from "./EventName";
import { toast } from "react-hot-toast";
import Paiment from "./Paiment";

export default function Plan() {
  const context = useContext(myContext);
  const [stadiums, setStadiums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentS, setCurrentS] = useState();
  const [availableHours, setAvailableHours] = useState([]);
  const [events, setEvents] = useState([]);
  const [submitted2, setSubmitted2] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [inputV, setInputV] = useState();
  const [selectedInfo, setSelectedInfo] = useState();
  const [counter, setCounter] = useState(0);
  const [allStadiums, setAll] = useState();
  const [planingId, setPlaningId] = useState();

  //afficher  current week
  const today = dayjs();
  let startOfWeek, endOfWeek;
  if (today.day() >= 5) {
    startOfWeek = today.startOf("week");
    endOfWeek = today.endOf("week").add(1, "week");
  } else {
    startOfWeek = today.startOf("week");
    endOfWeek = today.endOf("week");
  }
  // const [selectedWeek, setSelectedWeek] = useState(null);
  //

  //initial events
  // const [initialEvents, setInitialEvents] = useState([
  //   {
  //     id: Math.random(),
  //     title: "All-day event",
  //     start: today.toISOString(), // Use today's date
  //   },
  // ]);
  //
  //

  // hadi baxi kanjibo selected weeek walakin 5asna nbrko
  // const handleDateClick = (arg) => {
  //   const startDate = arg.date;
  //   const endDate = new Date(startDate);
  //   endDate.setDate(endDate.getDate() + 6);

  //   setSelectedWeek({ start: startDate, end: endDate });

  // };

  //

  // hafi bayna
  function renderEventContent(eventInfo) {
    // console.log(eventInfo.event.extendedProps);
    // console.log("current", context?.currentUser?._id.toString());
    // console.log("user", eventInfo.event.extendedProps.user);
    return (
      <Grid
        container
        className={`h-full w-full ${(eventInfo.event.extendedProps.isPaid &&
            context?.currentUser?.role == "admin") ||
            (eventInfo.event.extendedProps.isPaid &&
              context?.currentUser?._id.toString() ==
              eventInfo.event.extendedProps.user._id.toString())
            ? "bg-green-500"
            : !eventInfo.event.extendedProps.isPaid &&
              context?.currentUser?.role == "admin"
              ? "bg-yellow-400"
              : !eventInfo.event.extendedProps.isPaid &&
                context?.currentUser?._id.toString() ==
                eventInfo.event.extendedProps.user?._id?.toString()
                ? "bg-blue-500"
                : "bg-red-500"
          } overflow-auto`}
      >
        <Grid
          item
          xs={12}
          className="break-words text-center w-full p-3 text-semibold text-md h-[30%]"
        >
          <b>{eventInfo.timeText}</b>
        </Grid>
        <Grid
          item
          xs={12}
          className="break-words text-center w-full p-3 text-semibold text-md h-[30%]"
        >
          {" "}
          <b>
            {eventInfo?.event?.extendedProps?.user?._id?.toString() ==
              context?.currentUser?._id?.toString() &&
              context?.currentUser?.role != "admin"
              ? "You are who reserved"
              : ""}
          </b>
          <div>
            {eventInfo?.event?.extendedProps?.user?._id?.toString() ==
              context?.currentUser?._id?.toString() &&
              context?.currentUser?.role != "admin"
              ? eventInfo?.event?.extendedProps?.isPaid == true
                ? "Paid"
                : "Not Paid"
              : ""}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          className="break-words text-center w-full p-3 text-semibold text-md h-[30%]"
        >
          {context?.currentUser?.role === "admin" && (
            <i>
              {eventInfo.event.title ||
                (eventInfo?.event?.extendedProps?.user
                  ? `${eventInfo?.event?.extendedProps?.user?.firstName} ${eventInfo?.event?.extendedProps?.user?.lastName}`
                  : "")}
            </i>
          )}
        </Grid>
      </Grid>
    );
  }

  //

  //  hadi dial add Event
  function handleDateSelect(selectedI) {
    setOpen(true);
    setSelectedInfo(selectedI);
    // let title = prompt("Please enter a new title for your event");
    // let calendarApi = selectedI.view.calendar;
    // calendarApi.unselect();

    // if (inputV) {
    // calendarApi.addEvent({
    //   id: Math.random(),
    //   title,
    //   start: selectedI.startStr,
    //   end: selectedI.endStr,
    //   allDay: selectedI.allDay,
    //   payed: context?.currentUser?.role
    // });
    // }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setInputV();
        // setEvents([...events, {
        //   id: Math.random(),
        //   title: inputV,
        //   start: selectedInfo.startStr,
        //   end: selectedInfo.endStr,
        //   payed: context?.currentUser?.role,
        //   current: context?.currentUser?._id.toString()
        // }])

        const res = await context?.addReservation(planingId, {
          title: inputV,
          start: selectedInfo.startStr,
          end: selectedInfo.endStr,
          isPaid: context?.currentUser?.role == "admin" ? true : false,
          user: context?.currentUser?._id.toString(),
          stadium: currentS,
        });
        toast.success(res.message);
      } catch (err) {
        toast.error(err.message);
      }
      setCounter(counter + 1);
      setSelectedInfo();
      setSubmitted(false);
      setLoading(false);
    };

    if (submitted && selectedInfo) {
      fetchData();
    }
  }, [submitted]);
  //

  //  hadi dial delete
  const handleEventClick = async (clickInfo) => {
    setLoading(true);
    try {
      // if (
      //   context?.currentUser?.role == "admin" ||
      //   clickInfo.event.extendedProps.current ==
      //     context?.currentUser?._id.toString()
      // ) {
      if (context?.currentUser?.role == "admin" || clickInfo.event?.extendedProps.user?._id.toString() == context?.currentUser?._id.toString()) {
        setOpen2(true);
        setSelectedInfo(clickInfo);
      }

      // if (
      //   confirm(
      //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
      //   )
      // ) {
      //   const res = await context?.deleteReservation(
      //     currentS,
      //     clickInfo.event.extendedProps._id.toString()
      //   );
      //   toast.success(res.message);
      //   setCounter(counter + 1);
      // }
      // }
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  //

  // hadi kat3mr select
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await context?.getStadiums();
        setStadiums(
          res
            .map((obj) => {
              if (obj?.currentPlaning) {
                return {
                  id: obj._id.toString(),
                  nom: obj.title,
                };
              }
              return null;
            })
            .filter((obj) => obj !== null)
        );
        setCurrentS(res[0]?._id?.toString());
        setAll(res);
        console.log({ currentS });
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  //
  // hadi katjib planing
  useEffect(() => {
    const fetchData = async () => {
      try {
        setEvents([]);
        setLoading(true);
        const res = await context?.GetCurrentPlaning(planingId);
        setAvailableHours(res.availableHours);
        setEvents(res.reservations);
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    if (planingId) {
      fetchData();
    }
  }, [planingId, counter]);
  //

  // hadi dial l header disabled
  function isDayDisabled(dayOfWeek) {
    const currentDate = dayjs();
    const currentDayOfWeek = currentDate.day();
    return currentDayOfWeek > dayOfWeek;
  }

  //

  // hadi dial planing li mselecter
  useEffect(
    () => {
      if (currentS) {
        const p = allStadiums
          .find((e) => e._id.toString() == currentS)
          .currentPlaning.toString();
        setPlaningId(p);
      }
    }, [currentS]
  );
  //

  return (
    <div className="demo-app">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress style={{ color: "#ff1744" }} />
      </Backdrop>
      <div className="demo-app-main">
        <Grid container>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Stadium</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentS}
                label="Age"
                onChange={(e) => setCurrentS(e.target.value)}
              >
                {stadiums.map((e, i) => (
                  <MenuItem
                    value={e.id}
                    key={i}
                    selected={e?.id.toString() === currentS ? true : false}
                  >
                    {e.nom}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={12} xs={12}>
            <div className="p-10">
              <FullCalendar
                plugins={[listPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: `${context?.currentUser?.role == "admin"
                      ? "timeGridWeek,timeGridDay,list"
                      : "timeGridWeek,timeGridDay"
                    }`,
                }}
                editable={false}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                // initialEvents={initialEvents}
                select={handleDateSelect}
                eventContent={renderEventContent}
                eventClick={handleEventClick}
                businessHours={availableHours}
                initialView="timeGridWeek"
                initialDate={startOfWeek.toISOString()}
                // dateClick={handleDateClick}
                eventColor={`${context?.currentUser?.role == "admin"
                    ? "transparent"
                    : "transparent"
                  }`}
                selectConstraint={"businessHours"}
                validRange={
                  context?.currentUser?.role !== "admin"
                    ? {
                      start: startOfWeek.toISOString(),
                      end: endOfWeek.toISOString(),
                    }
                    : {
                      start: startOfWeek.toISOString(),
                    }
                }
                dayHeaderContent={({ date }) => {
                  const dayOfWeek = dayjs(date).day();
                  const isDisabled = isDayDisabled(dayOfWeek);
                  return isDisabled ? (
                    <span className="text-gray-400">{date.getDate()}</span>
                  ) : (
                    <span>{date.getDate()}</span>
                  );
                }}
                slotDuration="01:00:00"
                events={events}
              />
            </div>
          </Grid>
          {/* <Grid item xs={12}>
          <h1>hello</h1>
            <Sidebar currentEvents={events} />
          </Grid> */}
        </Grid>
        <EventName
          open={open}
          setOpen={setOpen}
          setInputV={setInputV}
          inputV={inputV}
          setSubmitted={setSubmitted}
        />
        <Paiment
          open={open2}
          setOpen={setOpen2}
          setSubmitted={setSubmitted2}
          currentS={planingId}
          selectedEvent={selectedInfo}
          setSelectedEvent={setSelectedInfo}
          counter={counter}
          setCounter={setCounter}
        />
      </div>
    </div>
  );
}
