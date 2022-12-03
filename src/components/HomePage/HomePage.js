import '../HomePage/css/HomePage.css'
import '../HomePage/css/Heading.css'

import { Card, Button, Carousel } from 'react-bootstrap';
import BackgroudImage from '../../assests/png/backgroud-heading.png' 
import { BsFillTelephoneFill } from "react-icons/bs";
import AboutSection from '../../assests/png/about-section.png' 
import TP2 from '../../assests/png/tp2.png' 
import WHATSAPP from '../../assests/svg/WhatsApp.svg'
import INSTAGRAM from '../../assests/svg/Instagram.svg'
import GMAIL from '../../assests/svg/Gmail.svg'
import LOCATION from '../../assests/svg/Location.svg'
import YOUTUBE from '../../assests/svg/youtube.svg'


export default function HomePage () {
  return (
    <>
    {/* top heading components */}
    <Card className="bg-dark text-white background">
      <Card.Img src={BackgroudImage} alt="Card image" />
      <Card.ImgOverlay className='heading'>
        <div className='card-overlay-heading'>
          <Card.Title className='main-title-heading'>
            LORD'S DECOR
          </Card.Title>
          <Card.Text className='tag-line-heading'>
            Luxury Home & Office Decoration Service
          </Card.Text>
          <Card.Text>
            <Button variant="outline-light" className='button-heading'>OUR WORK</Button>
            <Button variant="outline-light" className='button-heading'>ABOUT US</Button>
          </Card.Text>
        </div>
        <div className='footer'>
          <Card.Footer className='card-footer'>
            <BsFillTelephoneFill/> 9970007890
          </Card.Footer>
        </div>
        
        
      </Card.ImgOverlay>
    </Card>

    <div className='tagline-heading'>
      STEP INTO YOUR DREAM HOUSE WITH THE HELP OF EXPERT
    </div>
    {/* about section */}
    <div className='about-section container'>
      <h1 style={{fontWeight: 'bold' }} >ABOUT US</h1>
      <div className='about-container-1'>
        <div className='container-item-1'>
          <img src={AboutSection} alt="about section" width='100%' height='100%'/>
        </div>
        <div className='container-item-2'>
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

      <div className='about-container-2'>
        <div className='contact-text'>
          CONTACT US ON: 
          <img className="svg-icon" alt='whatapp' src={WHATSAPP}/>
          <img className="svg-icon" alt='instagram' src={INSTAGRAM}/>
          <img className="svg-icon" alt='gmail' src={GMAIL}/>
          <img className="svg-icon" alt='youtube' src={YOUTUBE}/>

        </div>
        <div className='service-provide'>
          <img className="location-svg-icon" alt='location' src={LOCATION}/>
          We provide Service In Mumbai, Thane, Navi-Mumbai
        </div>
      </div>
    </div>

    <div className='work-section container'>
      <h1 style={{fontWeight: 'bold' }} >OUR WORK</h1>
      <div className='work-container-1'>
        <div className='product-item'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={TP2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={TP2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
          <Button variant="primary" className='product-button'>
            PRODUCT
          </Button>
        </div>
        <div className='service-item'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={TP2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={TP2}
                alt="Second slide"
              />
            </Carousel.Item>
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