import logo from './logo.svg';
import {Button, Row, Col, Card, CardGroup, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Image from 'react-bootstrap/Image'
import {createLinkClickRecord} from './firebase'
import { Player } from 'video-react';

import './App.css';
import { async } from '@firebase/util';

const influencerId = "selamHumShop"

function Selam() {
  return (
  
     <div>


       <Row className="mt-5 ml-9 mx-auto" style={{display:'flex', justifyContent:'center'}}>
        
          <Col sm="2" style={{float: 'right', display: 'flex', flexDirection: 'row'}}>
            <Image src={"https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/salem.jpg?alt=media&token=f02ec392-88d3-4667-9359-2ca87f2d94bc"} roundedCircle />
            <h5 style={{marginTop: 15, marginBottom:0, paddingLeft: 5}}>
              <b>Selam Store</b>
            </h5>
          </Col>


         </Row>
<Row className="mt-5 mx-auto" style={{display:'flex', justifyContent:'center'}}>

  <Col sm="4">
  <Card>

        <CardImg
          alt="Card image cap"
          src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Selam_Product1UGC.png?alt=media&token=f961342d-7ff8-4aee-be5e-e010e861c90d"
          height={410}
          
          
        />

    
    <CardBody>
      <CardTitle tag="h5">
        Lady White
      </CardTitle>
      <img className=".img-responsive" alt="" src={"https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Selam_Product1-thumbnail.png?alt=media&token=2e06814a-fc95-4bf7-baa4-8ba2126dcaee"} width={80} height={80} />
      <CardText>
        
      </CardText>
      <Button onClick={ async () => {
        await await createLinkClickRecord(influencerId)
        {window.open('https://hemptemple.org/products/lady-white?_pos=2&_sid=ddd54511a&_ss=r','_blank')}
        
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
      src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Selam_Product4UGC.png?alt=media&token=31e0e6fb-837d-41d7-a0b6-ce570322ad80"
      top
      width="100%"
      height={410}
    />
    <CardBody>
      <CardTitle tag="h5">
      `Gold Draping Head Chain Crown
      </CardTitle>
      <img className=".img-responsive" alt="" src={'https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Selam_Product4-thumbnail.png?alt=media&token=17bafe44-6586-4c23-b22c-5e4d16e1623f'} width={80} height={80} />
      <CardText>
        
      </CardText>
      <Button onClick={ async () => 
         {
           await createLinkClickRecord(influencerId)
          window.open('hhttps://www.amazon.co.uk/Drifter-Designer-Sunglasses-UV400-Protection/dp/B0059W3ERA/ref=sr_1_1?dchild=1&qid=1635863816&s=clothing&sr=1-1','_blank')}}>
        Add to Cart
      </Button>
    </CardBody>
  </Card>

  </Col>

  </Row>   

  
  <Row className="mt-3 mx-auto" style={{display:'flex', justifyContent:'center'}}>
  <Col sm="4">
  <Card>
  <Player
      playsInline
      poster="/assets/poster.png"
      height={410}
      src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Selam_Product2UGC.mp4?alt=media&token=472ca19e-cdb1-4f8a-97f4-491db9b57a97"
    />
    <CardBody>
      <CardTitle tag="h5">
       Sun Glasses
      </CardTitle>
      <img className=".img-responsive" alt="" src={'https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Selam_Product4-thumbnail.png?alt=media&token=17bafe44-6586-4c23-b22c-5e4d16e1623f'} width={80} height={80} />
      <CardText>
        
      </CardText>
      <Button onClick={ async() => 
         {
          await await createLinkClickRecord(influencerId)
        window.open('https://www.ebay.co.uk/itm/272940763290?hash=item3f8c89889a:g:cRsAAOSwUlxaD10b','_blank')}}>
        Add to Cart
      </Button>
    </CardBody>
  </Card>
  </Col>

  <Col sm="4">
  <Card>
  <Player
      playsInline
      poster="/assets/poster.png"
      height={410}
      src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Selam_Product3UGC.mp4?alt=media&token=531800dd-7427-44b9-860b-6170b4eaf976"
    />
    <CardBody>
      <CardTitle tag="h5">
      MAFI MAFI
      </CardTitle>
      <img className=".img-responsive" alt="" src={'https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Selam_Product3-thumbnail.png?alt=media&token=c0b13173-1e72-47ce-bd40-0888580a2139'} width={80} height={80} />
      <CardText>
        
      </CardText>
      <Button onClick={ async () => 
         {
          await await createLinkClickRecord(influencerId)
        window.open('https://www.instagram.com/p/CT45YNGo7z8/ ','_blank')}}>
        Add to Cart
      </Button>
    </CardBody>
  </Card>
  </Col>

  </Row>
  </div>
   
  );
}

export default Selam;
