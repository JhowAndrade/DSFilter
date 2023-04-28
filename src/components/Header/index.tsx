import { useContext } from "react";
import { ContextProductCount } from "../../utils/context-product";
import "./styles.css";

export default function Header() {
    const { contextProductCount } = useContext(ContextProductCount);
    
    return (
        <header>
            <div className="container title">
                <h1>DSFilter</h1>
                <div className="count">
                {contextProductCount} produto(s)
                </div>
            </div>
        </header>
    );
}