import { Card } from "@/components/Card"
import { useAppContext } from "@/context/AppContext"
import { MainLayout } from "@/layouts/MainLayout"

export const Cart = () => {
    const {productInCart} = useAppContext();

    console.log({productInCart})

    return (
        <MainLayout>
        <section id="products">
            <div className="headline">
                <h2 className="title-b">Carrito</h2>
                </div>
                {productInCart.length === 0 ?
                <p> No tienes productos en el carrito aun </p>
                :
                    productInCart.map((product, index) => <Card key={index} data={product}/>)
                    }
                </section>
        </MainLayout>
    )   
}
        