import fotoinsta from "./images/instagram.png"
import fotolinke from "./images/linkedin.png"
import fotoemail from "./images/email.png"

function Footer(){
  return(
    <div id="footer" className="footer">
      <div className="footer-kiri">
        <h3>Get in touch</h3>
        <p className="isifooter1">Feel free to connect with me on my social media or drop an email. Let's create something amazing together!</p>
        <p className="isifooter2">Can be send to:</p>
        <p><b>denismatthew04@gmail.com</b></p>
        <a href="https://www.instagram.com/denismattheww/" target="_blank">
          <img src={fotoinsta}></img>
        </a>
        <a href="https://www.linkedin.com/in/denis-matthew-27b108337/" target="_blank">
          <img src={fotolinke}></img>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=denismatthew04@example.com&su=Hello&body=I%20have%20a%20question" target="_blank" >
          <img src={fotoemail}></img>
        </a>
        <p className="isifooter3">Some assets designed by freepik</p>
      </div>
    </div>
  );
}

export default Footer