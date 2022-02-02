const Events = () => {
  return (
    <section className="main__events">
      <div className="main__gray-box--left"></div>
      <div className="events__background"></div>
      <div className="events__content">
        <h2 className="events__content-title">Aktualitātes</h2>
        <div className="events__content-block">
          <div className="events__content--left">
            <img
              className="events__content-image"
              src="images/veggtykkelser-2160x1453.jpg"
              alt="image"
            />
            <a className="events__content-link content__link--left" href="#">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </a>
          </div>
          <div className="events__content--right">
            <img
              className="events__content-image"
              src="images/kontor-2160x1082.jpg"
              alt="image"
            />
            <a className="events__content-link content__link--right" href="#">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events