import CardMusic from "./CardMusic";

function WrapperMusic() {
    return (
        <div className="wrapper">
            <h4>Listening History</h4>
            <div className="musics">
                <CardMusic />
            </div>
        </div>
    );
}

export default WrapperMusic;
