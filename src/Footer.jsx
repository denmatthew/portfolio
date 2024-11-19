import fotoemail from "./images/email.png"
import fotolinke from "./images/linkedin.png"
import fotogithub from "./images/github.png"

function Footer(){
  return(
    <div className="footer">
      <div className="footer-kiri">
        <h3>Get in touch</h3>
        <p className="isifooter1">Feel free to connect with me on my social media or drop an email. Let's create something amazing together!</p>
        <p className="isifooter2">Can be send to:</p>
        <p><b>denismatthew04@gmail.com</b></p>
        <img src={fotoemail}></img>
        <img src={fotolinke}></img>
        <img src={fotogithub}></img>
        <p className="isifooter3">Some assets designed by freepik</p>
      </div>
    </div>
  );
}

export default Footer