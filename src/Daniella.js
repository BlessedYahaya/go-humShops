import logo from './logo.svg';
import {Button, Row, Col, Card, CardGroup, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Image from 'react-bootstrap/Image'
import {createLinkClickRecord} from './firebase'
import ReactAudioPlayer from 'react-audio-player';
import { Player } from 'video-react';

import './App.css';
import { async } from '@firebase/util';

const influencerId = "DaniellaHumShop"

function Daniella() {
  return (
  
     <div>


       <Row className="mt-5 ml-9 mx-auto" style={{display:'flex', justifyContent:'center'}}>
        
          <Col sm="2" style={{float: 'right', display: 'flex', flexDirection: 'row'}}>
            <Image src={"https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Webp.net-resizeimage%20(1).png?alt=media&token=c9f8fc72-b442-4bf3-9f1e-f7e74eb8b581"} roundedCircle />
            <h5 style={{marginTop: 15, marginBottom:0, paddingLeft: 5}}>
              <b>Daniella Store</b>
            </h5>
          </Col>


         </Row>
<Row className="mt-5 mx-auto" style={{display:'flex', justifyContent:'center'}}>

  <Col sm="4">
  <Card>

        <CardImg
          alt="Card image cap"
          src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/product%202%20top%20yellow%20arras.jpeg?alt=media&token=1f1a27e4-e28f-4e0a-8704-b53d4f13f429"
          height={410}
          
          
        />

    
    <CardBody>
      <CardTitle tag="h5">
        Yellow arras jacket
      </CardTitle>
      <ReactAudioPlayer
            src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/audio%20product%202%20top%20yellow%20arras.mp4?alt=media&token=74e77667-a592-4007-a3c5-d19eb9a84ef5"
            autoPlay
            controls
            />
      <CardText>
        
      </CardText>
      <Button onClick={ async () => {
        await await createLinkClickRecord(influencerId)
        {window.open('https://www.arras.in/product-page/turmeric-yellow-cropped-jacket','_blank')}
        
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
      src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/rug%20cover.jpeg?alt=media&token=d1e18d61-4cf7-4d3e-8851-2500dc6f6f03"
      top
      width="100%"
      height={410}
    />
    <CardBody>
      <CardTitle tag="h5">
        Sukhi Rug
      </CardTitle>
      <ReactAudioPlayer
            src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Sukhi%20rug.mp4?alt=media&token=2f92f89a-9edc-46e6-ac60-03a4b0e97539"
            autoPlay
            controls
            />
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
            <CardImg
            alt="Card image cap"
            src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/daniela%20in%20nairobi.jpeg?alt=media&token=91f14507-16e4-4c74-bd8a-5248bf7b832a"
            top
            width="100%"
            height={420}
            />
            <CardBody>
            <CardTitle tag="h5">
                White Team
            </CardTitle>
            <ReactAudioPlayer
                    src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/white%20team%20audio%20note.mp4?alt=media&token=bbe54ada-074f-4950-919e-009a5f44a846"
                    autoPlay
                    controls
                    />
            <CardText>
                
            </CardText>
            <Button onClick={ async () => 
                {
                await createLinkClickRecord(influencerId)
                window.open('https://www.elizabetharden.co.uk/white-tea---eau-de-toilette-fragrance-1003A0106000.html?cgid=white-tea','_blank')}}>
                Add to Cart
            </Button>
            </CardBody>
        </Card>
  </Col>

  <Col sm="4">
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/Daniela%20in%20Nairobi.png?alt=media&token=ee3ba1ef-3111-4f25-8070-40cfa93388e6"
      top
      width="100%"
      height={420}
    />
    <CardBody>
      <CardTitle tag="h5">
        Densifique Shampoo
      </CardTitle>
      <ReactAudioPlayer
            src="https://firebasestorage.googleapis.com/v0/b/go-hum-test.appspot.com/o/densifique%20shampoo.mp4?alt=media&token=d3e8f892-8dc5-46bd-92a1-9d47b3b24d12"
            autoPlay
            controls
            />
      <CardText>
        
      </CardText>
      <Button onClick={ async () => 
         {
           await createLinkClickRecord(influencerId)
          window.open('https://www.amazon.co.uk/Kerastase-Densifique-Densite-250-ml/dp/B01LKZ0Q20/ref=sr_1_1_mod_primary_new?crid=38GW3PZBN8XR7&keywords=densifique+shampoo&qid=1636563623&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=densi%2Caps%2C171&sr=8-1','_blank')}}>
        Add to Cart
      </Button>
    </CardBody>
  </Card>
  </Col>

  </Row>
  </div>
   
  );
}

export default Daniella;
