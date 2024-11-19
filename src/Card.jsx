import PropTypes from 'prop-types'

function Card(props){
  return(
    <div className="cards">
      <div className='media'>
        <img src={props.image} alt="profile picture" className="card-image"></img>
        <video src={props.video} autoPlay className="card-video" loop muted></video>
      </div>
      <h3>{props.judul}</h3>
      <p>{props.deskripsi}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  video: PropTypes.string,
  judul: PropTypes.string,
  deskripsi: PropTypes.string,
}

Card.defaultProps = {
  image: "https://via.placeholder.com/350x400",
  video: "https://www.w3schools.com/html/mov_bbb.mp4",
  judul: "Tidak ada judul film",
  deskripsi: "Tidak ada deskripsi"
}

export default Card