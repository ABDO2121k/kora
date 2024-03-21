import WelecomStyle from "./styles/WelecomParg.module.css";
export default function WelecomParg() {
  return (
    <div className={WelecomStyle.container}>
      <h5 className={WelecomStyle.title}>
        Welcom to <span className={WelecomStyle.ftb}>FtbHub</span>
      </h5>
      <h2 className={WelecomStyle.secondTitle}>
        <span className={WelecomStyle.Letter}>We</span> all share passion for{" "}
        <span className={WelecomStyle.Letter}>F</span>oo
        <span className={WelecomStyle.Letter}>tb</span>all{" "}
      </h2>
      <p className={WelecomStyle.paragraphe}>
        Football isn t just a sport, it s a way of life. At <strong>FtbHub</strong> ,
        we understand that burning desire to play, strategize, and dominate.
        That s why we provide a platform to ignite your football passion. Here,
        you can create your own football identity, connect with a vibrant
        community, and leverage powerful tools to elevate your game. Join us and
        transform your love for football into a winning advantage!
      </p>
    </div>
  );
}
