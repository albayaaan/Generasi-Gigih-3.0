import CardAlbum from "./CardAlbum";

function WrapperAlbum() {
    return (
        <div className="wrapper">
            <h4>Top Album</h4>
            <div className="albums">
                <CardAlbum />
                <CardAlbum />
                <CardAlbum />
            </div>
        </div>
    );
}

export default WrapperAlbum;
