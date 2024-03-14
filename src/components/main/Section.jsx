import section from "../../assets/section.jpg";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import sectionStyles from "./styles/section.module.css";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <div className="section-heading">
            <h3 className={sectionStyles.h3}>
              Match Recognition & Player Community Website
            </h3>
            <h2 className={sectionStyles.sectionTitle}>
              Explore Our Platform for Match Reservations and Player Interaction
            </h2>
            <p className={sectionStyles.sectionSubtitle}>
              Discover a Community for Connecting with Players, Reserving
              Matches, and Enhancing Your Sporting Experience.
            </p>
          </div>
          <p>
            At <b>Our Platform</b>, we pride ourselves on facilitating match
            reservations and fostering player connections. Our platform
            specializes in providing tailored solutions to meet the diverse
            needs of players and match organizers within the sporting community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-2">
            <div className="mb-2">
              <p className="font-bold mb-2">
                <DoneOutlineIcon sx={{ color: "#ff4321" }} /> Match Reservation
              </p>
              <p className="font-bold mb-2">
                <DoneOutlineIcon sx={{ color: "#ff4321" }} /> Player
                Communication
              </p>
              <p className="font-bold mb-2">
                <DoneOutlineIcon sx={{ color: "#ff4321" }} /> Player Profiles &
                Stats
              </p>
            </div>
            <div className="mb-2">
              <p className="font-bold mb-2">
                <DoneOutlineIcon sx={{ color: "#ff4321" }} /> Flexible Match
                Selection
              </p>
              <p className="font-bold mb-2">
                <DoneOutlineIcon sx={{ color: "#ff4321" }} /> Community
                Engagement
              </p>
              <p className="font-bold mb-2">
                <DoneOutlineIcon sx={{ color: "#ff4321" }} /> Enhanced Sporting
                Experience
              </p>
            </div>
          </div>
          <p className="mb-4">
            By joining <b>Our Platform</b>, you gain access to a vibrant
            community of players and match organizers. We are committed to
            providing you with tools and features to elevate your sporting
            journey and connect with like-minded individuals.
          </p>
          <div className="mt-10">
            <Link className={`${sectionStyles.btnF}`} to={"/contact"}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="pb-5 ">
          <div className={`${sectionStyles.bgaa} mt-10 ml-5 rounded-md`}>
            <img
              className={`rounded-md absolute ml-10 object-cover h-100 w-[90%] ${sectionStyles.img}`}
              src={section}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
