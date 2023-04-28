import { useState } from "react";
import "./styles.css";

type FormData = {
  min?: number;
  max?: number;
};

type Props = {
  onFilter: Function;
};

export default function FilterCard({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const min = formData.min || 0;
    const max = formData.max || Number.MAX_VALUE;
    onFilter(min, max);
  }

  return (
    <form>
      <div className="container card-min-max mt20">
        <div className="min-max">
          <input
            name="min"
            value={formData.min || ""}
            type="text"
            placeholder="Preço mínimo"
            onChange={handleInputChange}
          />
        </div>
        <div className="min-max">
          <input
            name="max"
            value={formData.max || ""}
            type="text"
            placeholder="Preço máximo"
            onChange={handleInputChange}
          />
        </div>
        <div className="filter">
          <button onClick={handleSubmit}>Filtrar</button>
        </div>
      </div>
    </form>
  );
}