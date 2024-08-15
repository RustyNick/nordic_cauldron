export default function CardItem({product}){
    
    return(
        <li>
            <div className="cardItem">
                <label>{product.name}</label>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div>
        </li>
    );
}