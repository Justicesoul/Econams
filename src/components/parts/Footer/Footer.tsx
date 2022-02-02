import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__menu">
      <a href="#">
        <img
          className="footer-menu__logo"
          src="images/eko-nams-logo-footer.svg"
          alt="footer logo"
        />
      </a>
      <div className="footer-menu__nav">
        <a className="footer-menu__nav-item" href="#">
          Lejuplādes
        </a>
        <a className="footer-menu__nav-item" href="#">
          Sīkdatnes noteikumi
        </a>
        <a className="footer-menu__nav-item" href="#">
          Privātuma poltika
        </a>
      </div>
    </div>
    <img
      className="footer__ruler"
      src="images/lineals-footer.svg"
      alt="footer-ruler"
    />
    <div className="footer__socials">
      <p className="socials__text">
        © 2020 EKO NAMS. Visas tiesības aizsargātas
      </p>
      <a href="#" className="socials__creator">
        <img src="images/_caballero-digital-agency.svg" alt="caballero logo" />
      </a>
      <div className="socials__social-networks">
        <a href="">
          <img
            className="social-network__img"
            src="images/logo-fb-simple.svg"
            alt="facebook image"
          />
        </a>
        <a href="">
          <img
            className="social-network__img"
            src="images/linkedin (2).svg"
            alt="linkedIn image"
          />
        </a>
        <a href="">
          <img
            className="social-network__img"
            src="images/logo-youtube.svg"
            alt="youtube image"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
