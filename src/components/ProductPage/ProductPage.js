import './css/ProductPage.css'
import BackgroudImage from '../../assests/png/Product-Background.png'
import { Card } from 'react-bootstrap';

export default function ProductPage () {
  return (
    <>
      {/* top heading components */}
      <Card className="bg-dark text-white background">
        <Card.Img src={BackgroudImage} alt="Card image" />
      </Card>
    </>
  );
}