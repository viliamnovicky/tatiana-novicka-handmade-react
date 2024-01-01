import ProductBox from "../ui/ProductBox"
import ProductsContainer from "../ui/ProductsContainer"

function Products() {
    return (
        <div>
            <ProductsContainer>
                <ProductBox src={"/01.jpg"} category="čiapky"/>
                <ProductBox src={"/02.jpg"} category="taštičky"/>
                <ProductBox src={"/01.jpg"} category="kabelky"/>
                <ProductBox src={"/02.jpg"} category="vankúše"/>
                <ProductBox src={"/02.jpg"} category="vankúše"/>
                <ProductBox src={"/02.jpg"} category="vankúše"/>
                <ProductBox src={"/02.jpg"} category="vankúše"/>
                <ProductBox src={"/02.jpg"} category="vankúše"/>
                <ProductBox src={"/02.jpg"} category="vankúše"/>
                <ProductBox src={"/02.jpg"} category="vankúše"/>
                <ProductBox src={"/02.jpg"} category="vankúše"/>
                <ProductBox src={"/02.jpg"} category="vankúše"/>
            </ProductsContainer>
        </div>
    )
}

export default Products
