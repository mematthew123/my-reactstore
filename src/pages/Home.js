import { ShopContext } from '../context/shopContext'
import { useContext, useEffect } from 'react'

const Home = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)
    useEffect(() => {
        fetchAllProducts()
    }, [])

    if(!products) return <div>Loadings...</div>

    return (
        <div>
            {
                products.map(product => (
                    <h1 key={product.id}>{product.title}</h1>
                ))
            }

        </div>
    )
}

export default Home
