import musicImage from "../../public/music.png";

function CardMusic() {
    return (
        <div className="music">
            <img src={musicImage} alt="music" />
            <div className="text">
                <h4>She Will Be Loved</h4>
                <p>Maroon 5</p>
            </div>
        </div>
    );
}

export default CardMusic;
