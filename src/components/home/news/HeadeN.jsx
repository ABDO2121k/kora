import img from "../../../assets/2.jpg";
import headerStyles from './styles/Header.module.css'

const HeadeN = () => {
  return (
    <div>
      <section
        className={headerStyles.breadcrumb}
        style={{ backgroundImage: `url(${img})`,objectFit:'cover' }}
      >
        <div className="container">
          <div className="grid">
            <div>
              <div>
                <h2 className={headerStyles.h2}>News</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadeN;
