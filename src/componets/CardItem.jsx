export default function CardItem({product}){
    const imgSource = '/src/assets/'

    return(
        <li>
            <div className="cardItem">
                <div className="image-container">
                    <img src={imgSource + product.img} alt={product.name}/>
                </div>
                <div className="card-content">
                    <label>{product.name}</label>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            </div>
        </li>
    );
}