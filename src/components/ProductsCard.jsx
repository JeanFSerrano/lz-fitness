import { Link } from "react-router-dom"
import { modeloLancamento } from "../assets/imgs"

const ProductsCard = ({ name, image, price, id }) => {

    return (
        <Link to={`/products/${id}`}>
            <div className="flex flex-col bg-white p-4 mb-4">
                <figure className="mb-4 flex items-center">
                    <img src={image || modeloLancamento} alt="Produto"/>
                </figure>
                <span className="italic text-black text-sm mb-2">{name || 'Conjunto Calça Básica - ChocoBasic'}</span>
                <span className="italic" >{price || 'R$ 125,00'}</span>
            </div>
        </Link>
    )
}

export default ProductsCard