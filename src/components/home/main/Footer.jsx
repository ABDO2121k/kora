import styles from "./styles/Footer.module.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Footer = () => {
  // const elements=[]

  return (
    <div className="bg-[#18141c]">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="block h-3 fill-white"
        ></path>
      </svg>
      <footer className={styles.footer}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
          <div className={styles.footerL}>
            <h3 className={styles.footerH}>Office Contact</h3>
            <ul>
              <li className={styles.footerLink}>
                <span className="mr-2">
                  <LocationOnIcon />
                </span>{" "}
                Boulevard Bischoffsheim 39/4 1000 Bruxelles
              </li>
              <li className={styles.footerLink}>
                {" "}
                <span className="mr-2">
                  <LocalPhoneIcon />
                </span>{" "}
                +(212)7 1167 0149
              </li>
              <li className={styles.footerLink}>
                {" "}
                <span className="mr-2">
                  <EmailIcon />
                </span>{" "}
                contact@infotext.tst
              </li>
            </ul>
          </div>
          <div className={styles.footerL}>
            <h3 className={styles.footerH}>Services Areas</h3>
            <ul>
              <li className={styles.footerLink}>
                <span className="mr-2">
                  <SportsSoccerIcon />
                </span>
                Match & Competition Recognition
              </li>
              <li className={styles.footerLink}>
                {" "}
                <span className="mr-2">
                  <SportsSoccerIcon />
                </span>
                Player Information
              </li>
              <li className={styles.footerLink}>
                {" "}
                <span className="mr-2">
                  <SportsSoccerIcon />
                </span>{" "}
                Competition Management
              </li>
              <li className={styles.footerLink}>
                {" "}
                <span className="mr-2">
                  <SportsSoccerIcon />
                </span>{" "}
                Planing Management
              </li>
              <li className={styles.footerLink}>
                {" "}
                <span className="mr-2">
                  <SportsSoccerIcon />
                </span>{" "}
                Booking System
              </li>
            </ul>
          </div>
          <div className={styles.footerL}>
            <h3 className={styles.footerH}>Location</h3>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.9212649972314!2d-5.0158834258045175!3d34.02023191942253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b1c83940641%3A0x20b4dedb0f447c16!2scit%C3%A9%20de%20sports%20adarissa!5e0!3m2!1sfr!2sma!4v1710116600557!5m2!1sfr!2sma"
                width="300"
                height="200"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.copy}>
          <p>
            &copy; <a>ftbHub</a>, All Right Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
