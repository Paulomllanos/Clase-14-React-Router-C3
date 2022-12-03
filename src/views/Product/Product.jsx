
import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import axios from 'axios'


export default function Product() {

  const [products, setProducts] = useState([])

  let { productId } = useParams()

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://fakestoreapi.com/products')
      const data2 =  await response.data
      //le digo que busque al objeto que contenga la id señalada en los parametros
      let productSelected =  data2.find(product => product.id == productId)
      
      setProducts(productSelected)
    }
    getData()
  }, [])

  return (
    <div>
        <h1>{products.title}</h1>
        <img src={products.image} alt={products.title}/>
    </div>
  )
}