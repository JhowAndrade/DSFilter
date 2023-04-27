import "./styles.css";

export default function Header() {

    return (
        <header>
            <div className="container title">
                <h1>DSFilter</h1>
                <div className="count">
                    produto(s)
                </div>
            </div>
        </header>
    );
}