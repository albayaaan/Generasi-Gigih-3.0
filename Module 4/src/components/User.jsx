function Item({ name, isMale }) {
    return (
        <li
            className="item"
            style={{ listStyle: "none", color: isMale ? "cyan" : "magenta" }}
        >
            {name}
        </li>
    );
}
export default function User() {
    return (
        <section>
            <ul>
                <Item name="Abizar Bahi" isMale={true} />
                <Item name="Adyatma Mahavir Bagaskara" isMale={true} />
                <Item name="Luisa Kyla Hermione" isMale={false} />
            </ul>
        </section>
    );
}
