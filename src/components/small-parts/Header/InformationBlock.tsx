const InformationBlock = () => {
  return (
    <div className="header__information-container">
      <div className="information-block">
        <div className="information-block__item">
          <h3 className="information-block__item--title">Ražošana</h3>
          <div className="information-block__item--subtitleBg">
            <h2 className="information-block__item--subtitle">DIGITĀLA</h2>
          </div>
          <p className="information-block__item--text">
            ietver tradīciju un kultūrvēsturiskā mantojuma glabāšanu
          </p>
        </div>
        <div className="information-block__item">
          <h3 className="information-block__item--title">
            Tehnoloģija un Pieredze
          </h3>
          <div className="information-block__item--wrapper">
            <div className="information-block__item block__item2">
              <div className="information-block__item--subtitleBg2">
                <h2 className="information-block__item--subtitle2">CAD CAM</h2>
              </div>
              <p className="information-block__item--text2">
                unikāla šīs metodes adaptācija
              </p>
            </div>
            <div className="information-block__item block__item2">
              <div className="information-block__item--subtitleBg2">
                <h2 className="information-block__item--subtitle2">20 gadi</h2>
              </div>
              <p className="information-block__item--text2">
                un 17 gadu pieredze ar CNC iekārtām
              </p>
            </div>
          </div>
        </div>
        <div className="information-block__item">
          <h3 className="information-block__item--title">
            Apjomi un Kapacitāte
          </h3>
          <div className="information-block__item--wrapper">
            <div className="information-block__item block__item2">
              <div className="information-block__item--subtitleBg2">
                <h2 className="information-block__item--subtitle2">670+</h2>
              </div>
              <p className="information-block__item--text2">
                piegādātas guļbūves
              </p>
            </div>
            <div className="information-block__item block__item2">
              <div className="information-block__item--subtitleBg2">
                <h2 className="information-block__item--subtitle2 block__item--m2 ">
                  30 000 m
                </h2>
              </div>
              <p className="information-block__item--text2">
                ražošanas telpu platība
              </p>
            </div>
          </div>
        </div>
        <div className="information-block__item">
          <h3 className="information-block__item--title">
            Kvalitāte un Garantija
          </h3>
          <div className="information-block__item--wrapper">
            <div className="information-block__item block__item2">
              <div className="information-block__item--subtitleBg2">
                <h2 className="information-block__item--subtitle2">0,5 mm</h2>
              </div>
              <p className="information-block__item--text2">
                apstrādes precizitāte
              </p>
            </div>
            <div className="information-block__item block__item2">
              <div className="information-block__item--subtitleBg2">
                <h2 className="information-block__item--subtitle2">98%</h2>
              </div>
              <p className="information-block__item--text2">
                eksports. Ražots Latvijā.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="information-block__ruler-image"
        src="./images/lineala-raksts.svg"
        alt="ruler"
      />
    </div>
  );
}

export default InformationBlock