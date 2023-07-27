function getImageUrl(person, size) {
    return `https://picsum.photos/id/${person.imageId}/${size}`;
}

function Avatar({ person, size = 200 }) {
    return (
        <div>
            <img
                className="avatar"
                src={getImageUrl(person, size)}
                alt={person.name}
                width={size}
                height={size}
            />
            <p>{person.name}</p>
        </div>
    );
}

export default function Profile() {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
            <Avatar person={{ name: "Image A", imageId: 22 }} />
            <Avatar person={{ name: "Image B", imageId: 27 }} />
        </div>
    );
}
