const Products = () => {
  return (
    <section className="main__products">
      <div className="products">
        <h2 className="products__content--title">Produkts</h2>
        <p className="products__content--text">
          Guļbūve ir viena no senākajām ēku konstrukcijām, kura, nezaudējot savu
          īpašo vērtību un nozīmi, saglabājusies līdz pat mūsdienām. Aizvien
          vairāk pilsētnieku izjūt nepieciešamību dzīvot ekoloģiski tīrā un
          mājīgā vidē, būt harmonijā ar dabu, ar sevi. Meistarīgi veidota
          guļbūve apvienojumā ar modernām tehnoloģijām palīdz šos sapņus
          realizēt dzīvē.
        </p>
        <div className="products__content--button">
          <a className="button__link" href="#">
            Vairāk par produktu
            <span className="button__link--arrow"></span>
          </a>
        </div>
      </div>
      <img
        className="products__content--image"
        src="./images/Rectangle_3.jpg"
        alt="image"
      />
      <div className="main__gray-box--right"></div>
    </section>
  );
};

export default Products;
