import CardStyle from "./styles/Card.module.css";
export default function Card() {
  return (
    <div className={CardStyle.dad}>
      <div className={CardStyle.card}>
        <p className={CardStyle.cardtitle}>Tell Your Football Story</p>
        <p className={CardStyle.smalldesc}>
          Create your profile and let your talent shine! Upload compelling
          pictures and action videos that demonstrate your playing style,
          highlight your key strengths in your playing position role, and
          showcase your technical and tactical abilities.
        </p>
      </div>
      <div className={CardStyle.card}>
        <p className={CardStyle.cardtitle}>The Pitch Is Awaiting</p>
        <p className={CardStyle.smalldesc}>
          <strong>Select Your Preferred Stadium:</strong> Choose from a variety
          of venues that cater to different playing surfaces, sizes, and
          amenities. <br />
          <strong>ScheduleYour Match:</strong> Pick a convenient time slot that
          fits your teams schedule. <br />
          {/* <strong>Specify Player Count: </strong>Inform us of the number of
          players participating to ensure proper planning and resource
          allocation. <br />
          <strong>Reserve and Play!:</strong>Confirm your booking and get ready
          to hit the field! <br /> */}
        </p>
      </div>

      <div className={CardStyle.card}>
        <p className={CardStyle.cardtitle}>BE THE GOAT</p>
        <p className={CardStyle.smalldesc}>
          Captivate viewers with compelling pictures and action videos
          showcasing your skills. Position yourself as a valuable asset by
          demonstrating your strengths in your playing position. Become
          discoverable by coaches and teams seeking talented players.
        </p>
      </div>
    </div>
  );
}

