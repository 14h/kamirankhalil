import React, {Component} from 'react';
import './style.css'
import {Link} from 'react-router-dom';

import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';

const photos = [

  { src: 'https://i.imgur.com/w9mn6gp.jpg', width: 480 , height: 480, caption: 'Poster/ exibition/ Sandviken/ Sweden 2018'},
  { src: 'https://i.imgur.com/TXgJ2EE.jpg', width: 412, height: 274, caption: 'Sandviken / Sweden/ exibition 2018'},
  { src: 'https://i.imgur.com/NiKNnTn.jpg', width: 412, height: 274, caption: 'Sandviken / Sweden/ exibition 2018'},
  { src: 'https://i.imgur.com/ZrujF0q.jpg', width: 718 , height: 478, caption: 'UDK Berlin 2017'},
  { src: 'https://i.imgur.com/xlFglcl.jpg', width:715 , height: 475, caption: 'UDK Berlin  2017'},
  { src: 'https://i.imgur.com/gAHgeUN.jpg', width: 399, height:566 , caption: ''},
  { src: 'https://i.imgur.com/byFZiBY.jpg', width: 589, height:589 , caption: ''},
  { src: 'https://i.imgur.com/0i5l51z.jpg', width:412 , height:412 , caption: ''},
  { src: 'https://i.imgur.com/szcSMYb.jpg', width: 566, height: 566, caption: 'Woman through the Eyes , Tajalliyat Art Gallery, Beirut  2015'},
  { src: 'https://i.imgur.com/RAQJT5g.jpg', width: 566 , height:566 , caption: 'Woman through the Eyes , Tajalliyat Art Gallery, Beirut 2015'},
  
  { src: 'https://i.imgur.com/r7eEsEq.jpg', width: 718, height: 403, caption: 'Art House in Vienna'},
  
  { src: 'https://i.imgur.com/FClI8B8.jpg', width:718 , height: 538, caption: 'Khawatem Art and Jewelry, Beirut 2015'},
  { src: 'https://i.imgur.com/61CJ0vH.jpg', width: 718, height: 538 , caption: 'Khawatem Art and Jewelry, Beirut  2015'},
  { src: 'https://i.imgur.com/M6cLABB.jpg', width: 718, height: 449, caption: ''},
  { src: 'https://i.imgur.com/XdlZOGr.jpg', width: 718, height: 538 , caption: 'Art Center Bahrain 2013'},


  
  { src: 'https://i.imgur.com/K0oUc9M.jpg', width: 1181 , height: 1654 , caption: ''},
  { src: 'https://i.imgur.com/8aioswh.jpg', width: 566, height:566 , caption: ''},
  { src: 'https://i.imgur.com/k6mXikH.jpg', width: 566, height: 566, caption: ''},
  
  

  { src: 'https://i.imgur.com/bS6G46A.jpg', width: 539, height: 566, caption: 'Art House    Damascus 2011'},
  { src: 'https://i.imgur.com/5fDmbTt.jpg', width: 640, height: 566 , caption: 'Art House    Damascus  2011'},
  { src: 'https://i.imgur.com/Ou43Adk.jpg', width: 424, height:566 , caption: 'Art House    Damascus  2011'},
  { src: 'https://i.imgur.com/vWt2XjG.jpg', width: 424, height: 566, caption: 'Art House    Damascus  2011'},
  { src: 'https://i.imgur.com/DDpvG0f.jpg', width: 718, height: 538, caption: 'Art House    Damascus  2011'},
  { src: 'https://i.imgur.com/g1LibN9.jpg', width: 718, height: 538, caption: 'French Cultural Center, Damascus 2010'},
  
  
  
  
  
  

    

    
    
    
    
  ];

  
  // to best see the results, click the popout button in the preview browser
  // and resize your browser

class Media extends Component{
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }
      render() {
        return (
          <div>
            <div className="breadcrumbs">
              <h3>{(this.props.language2 ==='EN')?("Media"):("Presse und Fotos")}</h3>
            </div>
            <div id="Media">
              <Gallery photos={photos} onClick={this.openLightbox} />
              <Lightbox images={photos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                backdropClosesModal={true}
              />
            </div>
            <hr/>
            <h2>1 x 1 – KUNST IM QUADRAT, 2016 :  <a href="https://www.vietinghoff-art.de/wp-content/uploads/2016/01/RZ_1x1_Katalog_Pfade_endLOW.pdf"> Catalog</a></h2>
            <hr/>
            <h2>Artscoops Auction , Beirut, 2016 :  <a href="https://www.scribd.com/embeds/379471297/content?start_page=1&view_mode=scroll&access_key=key-6oGg3zGeBZfuimXRTMAZ"> Catalog</a></h2>
            <hr/>
            <h2>" Syrian Aesthetical  Scream" in Konsthallen Sandviken / Sweden 2018  :  <a href="https://www.scribd.com/embeds/380579365/content?start_page=1&view_mode=scroll&access_key=key-pfZd1a7HVV35yAMOCGeq"> Catalog</a></h2>

            <h3>
            
            </h3>
          </div>
        )
      }
}


export default Media
