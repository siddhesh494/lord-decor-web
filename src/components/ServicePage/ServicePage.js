import './css/ServicePage.css'
import BackgroudImage3 from '../../assests/png/Service-Background3.png'
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


    <div className='service-provide-container'>
      <h1 className='sen' >SERVICE WE PROVIDE</h1>

        <div className='room-section'>
          <h2 className="sensation">Perfect Living Room</h2>
          <div className='owl-carousel'>
            {map(livingImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2 className="sensation">Modern Kitchen</h2>
          <div className='owl-carousel'>
            {map(kitchenImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2 className="sensation">Elegant Bathroom/Toilet</h2>
          <div className='owl-carousel'>
            {map(bathroomImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2 className="sensation">Cosy Bedroom</h2>
          <div className='owl-carousel'>
            {map(bedroomImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2 className="sensation">Airy Balcony</h2>
          <div className='owl-carousel'>
            {map(balconyImage, (item) => {
              return <div><img className="carousel-img" src={item} alt="First slide"/></div>
            })}
          </div>
        </div>

        <div className='room-section'>
          <h2 className="sensation">Other Lavishing Work</h2>
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