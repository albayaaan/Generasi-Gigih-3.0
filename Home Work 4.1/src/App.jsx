import "./App.css";
import WrapperAlbum from "./components/WrapperAlbum";
import WrapperMusic from "./components/WrapperMusic";

function App() {
    return (
        <div className="screen">
            <div className="sidebar" />
            <div className="main">
                <div className="header">
                    <h3>Tsaqib Abyan</h3>
                </div>
                <div className="wrapper">
                    <h4>Top Album</h4>
                    <div className="albums">
                        <div className="album">
                            <img src="public/album.png" alt="belom ada" />
                            <p>Hip Hop</p>
                        </div>
                        <div className="album">
                            <img src="public/album.png" alt="belom ada" />
                            <p>Hip Hop</p>
                        </div>
                        <div className="album">
                            <img src="public/album.png" alt="belom ada" />
                            <p>Hip Hop</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <h4>Listening History</h4>
                    <div className="musics">
                        <div className="music">
                            <img src="public/music.png" alt="" />
                            <div className="text">
                                <h4>She Will Be Loved</h4>
                                <p>Maroon 5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
