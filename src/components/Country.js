
const Country = ({ lightMode}) => {
  return (
    <section className="countries">
        <div className={`country ${lightMode ? "lightMode" : ""}`} key="">
          <div className="flag">
            <img src="flag" alt="" />
          </div>
          <div className={`details ${lightMode ? "lightMode" : ""}`}>
            <h3>
              <span>"name"</span>
            </h3>
            <h4>
              Population: <span>"population"</span>
            </h4>
            <h4>
              Region: <span>"region"</span>
            </h4>
            <h4>
              Capital: <span>"capital"</span>
            </h4>
          </div>
        </div>
    </section>
  );
};

export default Country;
