import '../HomePage/css/HomePage.css'
import '../HomePage/css/Heading.css'

import { Card, Button, Carousel } from 'react-bootstrap';
import BackgroudImage from '../../assests/png/backgroud-heading.png' 
import { BsFillTelephoneFill } from "react-icons/bs";
// import AboutSection from '../../assests/png/about/2.png' 
import WHATSAPP from '../../assests/svg/WhatsApp.svg'
import INSTAGRAM from '../../assests/svg/Instagram.svg'
import GMAIL from '../../assests/svg/Gmail.svg'
import LOCATION from '../../assests/svg/Location.svg'
import YOUTUBE from '../../assests/svg/youtube.svg'
import { productImage, serviceImage, aboutImage } from '../../config/constant'
import { map } from 'lodash'

export default function HomePage () {
  return (
    <>
      {/* top heading components */}
      <Card className="bg-dark text-white background">
        <Card.Img src={BackgroudImage} alt="Card image" />
        <Card.ImgOverlay className='heading'>
          <div className='card-overlay-heading'>
            <Card.Title className='main-title-heading sensation'>
              LORD'S DECOR
            </Card.Title>
            <Card.Text className='tag-line-heading sensation'>
              Luxury Home & Office Decoration Service
            </Card.Text>
            {/* <Card.Text>
              <Button variant="outline-light" className='button-heading'>OUR WORK</Button>
              <Button variant="outline-light" className='button-heading'>ABOUT US</Button>
            </Card.Text> */}
          </div>
          <div className='footer'>
            <Card.Footer className='card-footer'>
              <BsFillTelephoneFill/> 9970007890
            </Card.Footer>
          </div>
          
          
        </Card.ImgOverlay>
      </Card>

      <div className='tagline-heading sensation'>
        STEP INTO YOUR DREAM HOUSE WITH THE HELP OF EXPERT
      </div>
      
      {/* about section */}
      <div className='about-section container'>
        <h1 className='sen' >ABOUT US</h1>
        <div className='about-container-1'>
          <img
            className="d-block w-100"
            src={aboutImage[4]}
            alt="First slide"
          />
          <div className='container-item-2 sen'>
            {/* information */}
            <h2 className='welcome-text'>
              WELCOME
            </h2>
            <p className='design-text'>
              TO DESIGN WORLD
            </p>
            <p className='about-text'>
              Lord's Decor is the place where every design solution is possible,
              We enjoy challenge and non-standard rooms where we can be as creative as
              possible.
            </p>
            <p className='about-text'>
              We are happy to complete the most complex projects and to provide
              you with the interior of your dream. 
            </p>
          </div>
        </div>

        <div className='about-container-2 sen'>
          <div className='contact-text sen'>
            CONTACT US ON: 
            <img className="svg-icon" alt='whatapp' src={WHATSAPP}/>
            <img className="svg-icon" alt='instagram' src={INSTAGRAM}/>
            <img className="svg-icon" alt='gmail' src={GMAIL}/>
            <img className="svg-icon" alt='youtube' src={YOUTUBE}/>

          </div>
          <div className='service-provide sen'>
            <img className="location-svg-icon" alt='location' src={LOCATION}/>
            We Provide Service In Mumbai, Thane, Navi-Mumbai
          </div>
        </div>
      </div>

      {/* work section  */}
      <div className='work-section container'>
        <h1 className='sen'>OUR WORK</h1>
        <div className='work-container-1'>
          <div className='product-item'>
            <Carousel>
              {map(productImage, (item) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.image}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <p style={{fontWeight: "bold"}}>{item.name}</p>
                    </Carousel.Caption> 
                  </Carousel.Item>
                )
              })}
              
            </Carousel>
            <Button variant="primary" className='product-button' href='/product'>
              PRODUCT
            </Button>
          </div>

          <div className='service-item'>
            <Carousel>
              {map(serviceImage, (item) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.image}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <p style={{fontWeight: "bold"}}>{item.name}</p>
                    </Carousel.Caption> 
                  </Carousel.Item>
                )
              })}
            </Carousel>
            <Button variant="primary" className='service-button' href='/service'>
              SERVICE
            </Button>
          </div>
        </div>
        
      </div>
    </>
    
  );
}