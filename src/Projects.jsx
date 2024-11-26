import Card from "./Card.jsx"
import FuncCollapse from "./FuncCollapse.jsx"
import foto1 from "./images/cinemacan.png"
import foto2 from"./images/datewarehouse.png"
import foto3 from"./images/analisisdata.png"
import foto4 from"./images/LED.jpeg"
import foto5 from"./images/motiong.png"
import video1 from "./images/motiongvid.mp4";


function Projects() {
  return(
    <>
      <h1 id="project" className="judulprojek">Projects</h1>
      <FuncCollapse/>
      {/* <div className="card-container">
        <Card image={foto1} judul="Cinemacan" deskripsi ="Mei-Juli"></Card>
        <Card image={foto2} judul="Datawarehouse" deskripsi ="Mei-Juli"></Card>
        <Card image={foto3} judul="Data Analysis" deskripsi ="Mei-Juli"></Card>
        <Card image={foto4} judul="Kontrol LED Nirkabel" deskripsi ="Agustus-Oktober"></Card>
        <Card image={foto5} video={video1} judul="Motion Graphic" deskripsi ="September"></Card>
      </div> */}
    </>
  )
}
  
export default Projects