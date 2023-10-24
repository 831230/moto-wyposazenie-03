const Footer = () => {
  return ( 
    <footer className="footer">
        <address className="footer-address">
          <ul>
            <li><a href="https://maps.app.goo.gl/aHdDxXasnKaQUqYW6">32-086 Batowice ul. Akacjowa 48B, Poland </a></li>
            <li><a href="mailto:info@motowyposazenie.com">info@motowyposazenie.com</a></li>
            <li><a href="tel:48791859251">+48 791 859 251</a></li>
          </ul>
        </address>
        <div className="footer-img">
          <img src={require('..//../images/logo2.jpg')} alt="logo" width="150" height="75"/> 
        </div>
    </footer>
   );
}
 
export default Footer;