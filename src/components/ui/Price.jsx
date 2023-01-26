import React from "react";

const Price = ({ price, salePrice }) => {
    return (
        <div className="book__price">
            {salePrice ?
                (<><span className="book__price--normal">£{price.toFixed(2)}</span> £{salePrice.toFixed(2)}</>)
                : (<>£{price.toFixed(2)}</>)}
        </div>
    )
}

export default Price;