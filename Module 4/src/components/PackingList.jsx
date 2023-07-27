function Item({ name, isPacked }) {
    return (
        <li className="item" style={{ listStyle: "none" }}>
            {name} {isPacked && "✔"}
        </li>
    );
}
export default function PackingList() {
    return (
        <section>
            <h2>Abyan Daily Tasks</h2>
            <ul>
                <Item name="Play Valorant" isPacked={false} />
                <Item name="Coding an hour" isPacked={true} />
                <Item name="Murojaah" isPacked={false} />
            </ul>
        </section>
    );
}
