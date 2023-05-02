import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";
import FilterCard from "../FilterCard";
import ListingCard from "../ListingCard";
import "./styles.css";
import { ContextProductCount } from "../utils/context-product";

type MinMax = {
    min: number;
    max: number;
  };

export default function ListingBody() {

    const [product, setProduct] = useState<ProductDTO[]>([]);

    const { setContextProductCount } = useContext(ContextProductCount);

    const [minMax, setMinMax] = useState<MinMax>({
        min: 0,
        max: Number.MAX_VALUE,
    });

    
  useEffect(() => {
    setProduct(productService.findByPrice(minMax.min, minMax.max));
    setContextProductCount(
      productService.findByPrice(minMax.min, minMax.max).length
    );
  }, [minMax]);

  function handleFilter(min: number, max: number) {
    setMinMax({ ...minMax, min: min, max: max });
  }

    return (
        <main>
            <section>
                <FilterCard onFilter={handleFilter} />
                <div className="container card-list mt20 mb20">
                    {product.map((product) => (
                        <ListingCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );

}