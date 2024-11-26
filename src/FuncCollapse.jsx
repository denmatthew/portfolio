import React, {useState} from "react";
import Card from "./Card.jsx"
import foto1 from "./images/cinemacan.png"
import foto2 from"./images/datewarehouse.png"
import foto3 from"./images/analisisdata.png"
import foto4 from"./images/LED.jpeg"
import foto5 from"./images/motiong.png"
import video1 from "./images/bioskopvid.mp4"
import video2 from "./images/datawarehousevid.mp4"
import video3 from "./images/analisisdatavid.mp4"
import video4 from "./images/ledvid.mp4"
import video5 from "./images/motiongvid.mp4"

function Collapse(){
  const items = [
    {id: 1, title:"Websites", card: {image: foto1, video: video1, judul:"Cinemacan", deskripsi:(
      <>
        Pada bulan Mei hingga Juli, kelompok kami mendapatkan tugas untuk mengembangkan sebuah website dengan tema bebas. Kami memilih untuk membuat website bertema pembelian tiket bioskop secara online.<br /><br />
        Proses pengembangan dimulai dari mendesain antarmuka menggunakan Figma, yang kemudian diimplementasikan ke dalam Frontend menggunakan HTML, CSS, dan JavaScript, serta Backend menggunakan PHP dan phpMyAdmin.<br /><br />
        Website ini telah berhasil dihosting dan dapat diakses melalui tautan berikut: <a href="https://cinemacan.svr-on.com/" target="_blank">https://cinemacan.svr-on.com/</a>.<br />
        Untuk mencoba bagian frontend, gunakan username dan password: user.<br />
        Sedangkan untuk mengakses bagian backend, gunakan username: DennisM.
      </>
    )}},
    {id: 2, title:"Data Warehouses", card: {image: foto2, video: video2, judul:"Projek ETL", deskripsi:(
      <>
        Pada bulan Mei hingga Juli, kelompok kami mendapatkan tugas untuk mengembangkan sebuah datawarehouse dengan data bebas minimal 1000 row. Kami memilih data bertemakan daftar pemain bola dengan informasi-informasinya.<br /><br />
        Proses pengembangan dimulai dari membersihkan data terlebih dahulu dan disesuaikan dengan table masing-masing. Setelah itu, kami akan mengecek redudansi dan nilai null di primary key. Saat data bersih kami akan merancang datawarehouse diaplikasi Visual Studio SSIS. Lalu, data tersebut dimasukkan ke dalam SSMS (SQL Server Management Studio).
      </>
    )}},
    {id: 3, title:"Data Analysis", card: {image: foto3, video: video3, judul:"Projek Big Data", deskripsi:(
      <>
        Pada bulan Mei hingga Juli, saya diberikan tugas untuk menganalisis data dengan tema bebas di berbagai sumber. Saya mengambil tema BNI Stock Price yang didapat dari Google Scholar. Pertama saya membersihkan data terlebih dahulu, saat data bersih saya import data ke Visual Studio Code untuk dianalisis. Setelah itu saya membuat kolom baru yaitu Date berdasarkan tahun dan bulan dari data tersebut. Lalu saya menampilkan data tersebut menggunakan berbagai library (pandas, matplotlib, sesaborn, scipy, dan folium). Setelah itu saya akan menganalisis stock price untuk beberapa bulan kedepan dengan metode ARIMA.
      </>
    )}},
    {id: 4, title:"Mikrokontroller", card: {image: foto4, video: video4, judul:"LED Nirkabel", deskripsi:(
      <>
        Pada bulan Agustus hingga Oktober, kelompok saya mendapatkan tugas untuk membuat dokumentasi tentang pencahayaan yang juga berkaitan dengan jurusan masing masing muridnya. Saya memilih untuk membuat prototype LED dengan arduino menggunakan bluetooth untuk jaringan nirkabel. Pertama saya membeli barang yang dibutuhkan yaitu:<br />
        - Arduino<br />
        - LED<br />
        - Bluetooth HC06 <br />
        - Kabel Jumper Male to Female<br />
        - Kabel A to B<br /><br />
        Selanjutnya saya mulai menghubungkan menjadi siap gunakan. Berikutnya kita membuat programnya melalui Arduino IDE untuk membuat LED berfungsi. Akhirnya kami mendokumentasikan kegiatan kami selama pengerjaan tersebut.
      </>
    )}},
    {id: 5, title:"Motion Graphic", card: {image: foto5, video: video5, judul:"Ilustrasi Digital", deskripsi:(
      <>
        Pada bulan september saya mendapatkan tugas untuk membuat animasi dengan tema bebas menggunakan alat digital. Saya memilih animasikan seorang perempuan dengan pergerakan konsisten dibagian rambut, mata dan anting. Projek ini dibuat menggunakan aplikasi Aseprite dengan memiliki total 13 Frame.
      </>
    )}},
  ]

  const [isCollapsed, setCollapsed] = useState(null);
  
  const toggleCollapse = (id) =>{
    setCollapsed((prevId) => (prevId === id ? null : id));
  }

  return(
    <div className="container-collapse">
      <div className="collapse-item">
        {items.map((item) => (
          <div key={item.id} className="tombolcollapse">
            <button onClick={() => toggleCollapse(item.id)}>
              {isCollapsed === item.id ? ` ${item.title}` : item.title}
            </button>

            <div className={`style-card ${isCollapsed === item.id ? "show" : "hide"}`}>
              <Card
                image={item.card.image}
                video={item.card.video}
                judul={item.card.judul}
                deskripsi={item.card.deskripsi}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collapse

{/* <div className="container-collapse">
<div className="tombolcollapse">
  <button onClick={updateCollapse}>
    {isCollapsed ? "Websites" : "Websites"}
  </button>
  <div style={{display: isCollapsed ? "none" : "block"}}>
    <Card image={foto1} judul="Cinemacan" deskripsi ="Mei-Juli"></Card>
    <Card image={foto2} judul="Datawarehouse" deskripsi ="Mei-Juli"></Card>
    <Card image={foto3} judul="Data Analysis" deskripsi ="Mei-Juli"></Card>
    <Card image={foto4} judul="Kontrol LED Nirkabel" deskripsi ="Agustus-Oktober"></Card>
    <Card image={foto5} video={video1} judul="Motion Graphic" deskripsi ="September"></Card>
  </div>
</div>
</div> */}