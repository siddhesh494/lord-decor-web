import './css/ServicePage.css'
import BackgroudImage3 from '../../assests/png/Service-Background3.png'
import TP2 from '../../assests/png/t.png' 
import { Card } from 'react-bootstrap';
import { map } from 'lodash'
import { livingImage, kitchenImage, bathroomImage, bedroomImage, balconyImage, otherImage } from '../../config/constant';


export default function ServicePage () {
  return (
    <>
      {/* top heading components */}
    <Card className="bg-dark text-white background">
      <Card.Img src={BackgroudImage3} alt="Card image" />
    </Card>


    <div className='service-provide'>
      <h1>Service We Provide</h1>


        <div className='room-section'>
          <h2>Perfect Living Room</h2>
          <div className='owl-carousel'>
            {map(livingImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2>Modern Kitchen</h2>
          <div className='owl-carousel'>
            {map(kitchenImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2>Elegant Bathroom/Toilet</h2>
          <div className='owl-carousel'>
            {map(bathroomImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2>Cosy Bedroom</h2>
          <div className='owl-carousel'>
            {map(bedroomImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2>Airy Balcony</h2>
          <div className='owl-carousel'>
            {map(balconyImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2>Other Lavishing Work</h2>
          <div className='owl-carousel'>
            {map(otherImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>
      

    </div>
    </>
  );
}