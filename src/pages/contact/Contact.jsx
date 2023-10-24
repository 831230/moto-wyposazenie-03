const Contact = () => {
  return (
    <div className="container">
      <div className="contact-hero">
        <h3>Pracujemy od poniedziałku do piątku w godzinach 08:00 do 16:00</h3>
        <p>Przed spotkaniem prosimy o kontakt telefoniczny.</p>
        <address className="contact-address">
          <ul>
            <li>
              <a
                className="contact-link"
                href="https://maps.app.goo.gl/aHdDxXasnKaQUqYW6"
              >
                32-086 Batowice ul. Akacjowa 48B, Poland{" "}
              </a>
            </li>
            <li>
              <a
                className="contact-link"
                href="mailto:info@motowyposazenie.com"
              >
                info@motowyposazenie.com
              </a>
            </li>
            <li>
              <a className="contact-link" href="tel:48791859251">
                +48 791 859 251
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="contact-form-container">
        <h2>Formularz kontaktowy</h2>
        <form className="form" action="">
          <label className="form-label-input" htmlFor="">
            <span>Imię / Nazwa firmy</span>
            <input type="text" />
          </label>
          <label className="form-label-input" htmlFor="">
            <span>Email</span>
            <input type="text" />
          </label>
          <label className="form-label-input" htmlFor="">
            <span>Telefon</span>
            <input type="text" />
          </label>
          <label className="form-label-input" htmlFor="">
            <span>Temat wiadomości</span>
            <input type="text" />
          </label>
          <label className="form-label-input" htmlFor="">
            <span>Treść wiadomości</span>
            <textarea type="text" />
          </label>
          <label htmlFor="">
            <input type="radio" />
            <span>Nie jestem robotem</span>
          </label>
          <button>Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
