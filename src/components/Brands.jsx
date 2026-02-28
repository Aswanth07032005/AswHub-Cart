import { Col, Container, Image, Row } from "react-bootstrap";
import "./Brands.css";


const brands = [
  {
    
    name: "Vivo",
    price:"55999",
    desc: "Camera focused stylish smartphones",
    image: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1770699532282/84364144f01ff3742afb08d91c42d1cb.png",
  },
  {
     price:"43999",
    name: "Realme",
    desc: "Affordable phones with powerful specs",
    image: "https://static2.realme.net/images/realme-16-pro-plus-5g/1766629990230b96ea1f9cf084749b60eb2926fca8db7.webp",
  },
  {
     price:"130000",
    name: "Apple",
    desc: "Premium devices with smooth performance",
    image: "https://www.apple.com/in/iphone/home/images/overview/chapternav/nav_iphone_17pro__d60uog2c064i_large_2x.png",
  },
  {
    price:"85999",
    name: "Sony",
    desc: "High quality electronics and audio products",
    image: "https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_UP_Primary_image?$primaryshotPreset$&fmt=png-alpha",
  },
];


function Brands() {
  return (
    <Container className="two-banner-container">
       <Row className="mb-4">
        <Col className="text-center">
          <h2 className="fw-bolder text-danger">Brand</h2>
        </Col>
      </Row>
      <Row className="g-4">
      
       {brands.map((item,index)=>(
         <Col md={6} key={index}>
          <div className="promo-card left-card">
            <div className="promo-content">
              <h2>{item.name}</h2>
              <h4>₹{item.price}</h4>
              <p>{item.desc}</p>
            </div>

            <Image
              src={item.image}
              alt="Washing Machine"
              className="promo-img"
            />
          </div>
        </Col>
       ))}

      </Row>
    </Container>
  );
}

export default Brands;