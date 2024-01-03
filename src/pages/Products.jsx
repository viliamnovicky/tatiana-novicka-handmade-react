import ProductBox from "../ui/ProductBox"
import ProductsContainer from "../ui/ProductsContainer"

function Products() {
    return (
        <div>
            <ProductsContainer>
                <ProductBox src={"/categories/ciapky.png"} category="čiapky"/>
                <ProductBox src={"/categories/kabelky.png"} category="kabelky"/>
                <ProductBox src={"/categories/vankuse.png"} category="vankúše"/>
                <ProductBox src={"/categories/saty.png"} category="šaty"/>
                <ProductBox src={"/categories/obliecky.png"} category="obliečky"/>
                <ProductBox src={"/categories/svetre.png"} category="svetre"/>
                <ProductBox src={"/categories/obrusy.png"} category="obrusy"/>
                <ProductBox src={"/categories/tasticky.png"} category="taštičky"/>
                <ProductBox src={"/categories/ciapky.png"} category="čiapky"/>
                <ProductBox src={"/categories/kabelky.png"} category="kabelky"/>
                <ProductBox src={"/categories/vankuse.png"} category="vankúše"/>
                <ProductBox src={"/categories/saty.png"} category="vankúše"/>
            </ProductsContainer>
        </div>
    )
}

export default Products
