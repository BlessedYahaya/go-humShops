import logo from './logo.svg';
import {Button, Row, Col, Card, CardGroup, CardBody, CardImg, CardTitle, CardSubtitle, CardText, i } from 'reactstrap'
import Image from 'react-bootstrap/Image'
import {createLinkClickRecord} from './firebase'
import './App.css';

const influencerId = "fatumaHumShop"

function Fatuma() {
  return (
  
     <div>
       <Row className="mt-5 ml-9 mx-auto" style={{display:'flex', justifyContent:'center'}}>
        
          <Col sm="2" style={{float: 'right', display: 'flex', flexDirection: 'row'}}>
            <Image src={"https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Fatuma.jpg?alt=media&token=927ddf1b-084e-4549-99d5-3d6c0e248d75"} roundedCircle />
            <h5 style={{marginTop: 15, marginBottom:0, paddingLeft: 5}}>
              <b>Fatuma Store</b>
            </h5>
          </Col>


         </Row>

        <Row className="mt-5 mx-auto" style={{display:'flex', justifyContent:'center'}}>

  <Col sm="4">
  <Card>

        <CardImg
          alt="Card image cap"
          src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Miniboost%20IG_1UGC.png?alt=media&token=9bab1412-2a8d-45c5-a50d-d6d14d0b1d96"
          height={410}         
          
        />

    
    <CardBody>
      <CardTitle tag="h5">
        Miniboost IG Content
      </CardTitle>
      <img className=".img-responsive" alt="" src={"https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Miniboost%20IG_1Thumb.png?alt=media&token=0069264d-f379-4fbb-903c-62ce5826ec03"} width={80} height={80} />
      <CardText>
        .
      </CardText>
      <Button  onClick={ async () => {
        await createLinkClickRecord(influencerId)
        window.open('https://revivme.com/therapies/miniboost/','_blank')
    }}>
        Add to Cart <i class="bi "></i>
      </Button>
    </CardBody>
  </Card>
  </Col>
  
  <Col sm="4">
  
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Nivea%20Super%20Water%20Gel%20Sunscreen_2UGC.png?alt=media&token=1985297c-bcd8-4f97-963f-8825d301cda6"
      top
      width="100%"
      height={410}
    />
    <CardBody>
      <CardTitle tag="h5">
        Nivea Super Water Gel Sunscreen 
      </CardTitle>
      <img className=".img-responsive" alt="" src={'https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Nivea%20Super%20Water%20Gel%20Sunscreen_2Thumb.jpeg?alt=media&token=f7d38918-1955-491f-959e-dd26b66e3040'} width={80} height={80} />
      <CardText>
        .
      </CardText>
      <Button onClick={ async () => {
        await createLinkClickRecord(influencerId)
        window.open('https://beautysquareke.com/product/nivea-super-water-gel-sunscreen-spf-50/','_blank')
    }}>
        Add to Cart
      </Button>
    </CardBody>
  </Card>

  </Col>

        </Row>   

        <Row className="mt-5 mx-auto" style={{display:'flex', justifyContent:'center'}}>

<Col sm="4">
<Card>

      <CardImg
        alt="Card image cap"
        src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/The%20Ordinary%20Mandelic%20Acid_3UGC.png?alt=media&token=fc0c5921-9977-47fa-bc40-0f28d3061c3e"
        height={410}
        
        
      />

  
  <CardBody>
    <CardTitle tag="h5">
        Ordinary Mandelic Acid
    </CardTitle>
    <img className=".img-responsive" alt="" src={"https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/The-Ordinary_-Mandelic-Acid_3thumb.jpeg?alt=media&token=a2a07255-f51a-4ecf-b1ed-488689939e7a"} width={80} height={80} />
    <CardText>
      .
    </CardText>
    <Button onClick={ async () => {
        await createLinkClickRecord(influencerId)
        window.open('https://beautysquareke.com/product/the-ordinary-mandelic-acid/','_blank')
    }}>
        Add to Cart
    </Button>
  </CardBody>
</Card>
</Col>

<Col sm="4">

<Card>
  <CardImg
    alt="Card image cap"
    src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Safari%20Drawstring%20Shacket_4UGC.png?alt=media&token=abe54fab-6b78-4ce6-b4ac-2bbc233d320a"
    top
    width="100%"
    height={410}
  />
  <CardBody>
    <CardTitle tag="h5">
        Safari Drawstring Shacket
    </CardTitle>
    <img className=".img-responsive" alt="" src={'https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Fatuma_4thumb.png?alt=media&token=8aa7cb64-41cb-4fab-81c9-6d4ab23c99d7'} width={80} height={80} />
    <CardText>
      .
    </CardText>
    <Button onClick={ async () => {
        await createLinkClickRecord(influencerId)
        window.open('https://shopzetu.com/collections/jackets-coats/products/safari-drawstring-shacket-maroon','_blank')
    }}>
        Add to Cart
    </Button>
  </CardBody>
</Card>

</Col>

        </Row>  
  
        <Row className="mt-5 mx-auto" style={{display:'flex', justifyContent:'center'}}>

<Col sm="4">
<Card>

      <CardImg
        alt="Card image cap"
        src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/MAC%20Mineralize%20Charged%20Water%20Charcoal_5UGC.png?alt=media&token=ce8644d9-ad43-4446-bdb0-2c5fb60d2115"
        height={410}
        
        
      />

  
  <CardBody>
    <CardTitle tag="h5">
    MAC Mineralize Charged Water Charcoal Spray
    </CardTitle>
    <img className=".img-responsive" alt="" src={"https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/MAC%20Mineralize%20Charged%20Water%20Charcoal_5Thumb.jpeg?alt=media&token=7d6d8f5c-192a-49bf-a08b-580aab660fc5"} width={80} height={80} />
    <CardText>
      .
    </CardText>
    <Button onClick={ async () => {
        await createLinkClickRecord(influencerId)
        window.open('https://www.jumia.co.ke/mac-mineralize-charged-water-charcoal-spray-28946488.html','_blank')
    }}>
        Add to Cart
    </Button>
  </CardBody>
</Card>
</Col>

<Col sm="4">

<Card>
  <CardImg
    alt="Card image cap"
    src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/MAC%20Lipstick_6UGC.png?alt=media&token=dbed8891-7027-4d82-abe7-2bc42d43a380"
    top
    width="100%"
    height={410}
  />
  <CardBody>
    <CardTitle tag="h5">
    MAC Lipstick
    </CardTitle>
    <img className=".img-responsive" alt="" src={'https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/MAC%20Lipstick_6thumb.jpeg?alt=media&token=6ee5517d-f883-47b6-a3d5-a8a18e7b2a69'} width={80} height={80} />
    <CardText>
      .
    </CardText>
    <Button onClick={ async () => {
        await createLinkClickRecord(influencerId)
        window.open('https://www.jumia.co.ke/mac-lipstick-cyber-28990616.html','_blank')
    }}>
        Add to Cart
    </Button>
  </CardBody>
</Card>

</Col>

        </Row>  




  </div>
   
  );
}

export default Fatuma;
