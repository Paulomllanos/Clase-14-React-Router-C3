import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';


export default function Products() {


  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://fakestoreapi.com/products')
      const data2 =  await response.data
      setProducts(data2)
    }
    getData()
  }, [])
  
  console.log(products)
  

  return (
    <div>
      <h1>PRODUCTOS</h1>
      <Row xs={1} md={2} className="g-4">
      {
        products.map(product => (
        <Col>
          <Card style={{ width: '18rem' }}> 
            <Card.Img variant="top" src={product.image} style={{width: '250px', height: '150px'}}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text >
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        )
      )}
      </Row>
    </div>
  )
}