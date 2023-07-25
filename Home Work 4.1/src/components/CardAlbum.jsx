import albumImage from "../../public/album.png";

function CardAlbum() {
    return (
        <div className="album">
            <img src={albumImage} alt="album" />
            <p>Hip Hop</p>
        </div>
    );
}

export default CardAlbum;
