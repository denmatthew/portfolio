import fotodiri from "./images/denismatthewfotodiri.png"

function AboutMe(){
  return(
    <>
      <h1 id="about-me" className="judulaboutme">About Me</h1>
      <div className="diri">
        <img src={fotodiri}></img>
        <p> Hello! My name is Denis Matthew, i am an active student at Tarumanagara University, majoring in Information Systems. With a 
            strong interest in programming, web development, and graphic design. Throughout my 
            studies, I have gained valuable experience and improved my skills in using a variety of 
            technologies and tools, I am eager to apply these skills in a professional setting and am 
            particularly interested in pursuing roles as a Web Developer or Software Developer</p>
      </div>
    </>
  );
}

export default AboutMe