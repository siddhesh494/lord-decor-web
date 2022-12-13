import './css/ProductPage.css'
import BackgroudImage from '../../assests/png/Product-Background.png'
import { Button, Card, Carousel } from 'react-bootstrap';
import { productDetailsImage } from '../../config/constant'
import { map } from 'lodash'

export default function ProductPage () {
  return (
    <>
      {/* top heading components */}
      <Card className="bg-dark text-white background">
        <Card.Img src={BackgroudImage} alt="Card image" />
      </Card>

      <div className='product-container'>
        <h1 className='sen'>OUR PRODUCTS</h1>
        {map(productDetailsImage, (item)=>{
          return (
            <div className='product-section'>
              <h2 className='sensation' >{item.name}</h2>
              <div className='product-inner-section'>
                <div className='product-img'>
                  <Carousel>
                  {map(item.image, (item) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={item}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    )
                  })}
                  </Carousel>
                </div>
                
                <div className='product-description'>
                  <p>
                    {item.description}
                  </p>
                  <Button className='btn-video'>
                    Video Link
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
        
      </div>

    </>
  );
}