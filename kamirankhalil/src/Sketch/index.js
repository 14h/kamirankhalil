import React, {Component} from 'react';
import './style.css'
import {Link} from 'react-router-dom';

import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';



const photos = [
  { src: 'https://i.imgur.com/2jdF3t7.jpg', width: 410, height: 566, caption:'34x 25 cm , oil on paper, 2018' },
  { src: 'https://i.imgur.com/aBNLxjp.jpg', width: 391 , height: 566 , caption:'29x 20 cm , oil on paper, 2018'},
  { src: 'https://i.imgur.com/3ocau34.jpg', width: 401, height: 566 , caption:'25x17,5 cm charcoal on paper, 2018'},
  { src: 'https://i.imgur.com/rpqEPXE.jpg', width: 427, height: 566, caption:'40x 30 cm , oil on paper, 2018' },
  { src: 'https://i.imgur.com/12jxCoC.jpg', width: 485 , height: 566 , caption:'35x 30 cm , oil on paper, 2018'},
  { src: 'https://i.imgur.com/KwymXQI.jpg', width: 430 , height: 566 , caption:'34,5x 26 cm oil on paper, 2018'},
  { src: 'https://i.imgur.com/QXFErmm.jpg', width: 489, height: 566  , caption: '35x 25 cm , oil on paper, 2018'},
  { src: 'https://i.imgur.com/N0LpKtX.jpg', width: 561, height: 566 , caption:'30x 29,5 cm , oil on paper, 2018'},
  { src: 'https://i.imgur.com/HU03aS0.jpg', width: 341, height: 566 , caption:'25x 15 cm , oil on paper, 2017'},
  { src: 'https://i.imgur.com/PAgn737.jpg', width: 607 , height: 608 , caption: '40x 40 cm oil on paper 2017'},
  { src: 'https://i.imgur.com/40Jew9V.jpg', width:316 , height: 450 , caption: '170 x 100 cm  oil on paper ,  2017'},
  { src: 'https://i.imgur.com/BHTUIE4.jpg', width: 270, height: 608 , caption: '200x90 cm  oil on paper ,  2018'},
  { src: 'https://i.imgur.com/TyjD0jZ.jpg', width: 247, height:  608 , caption: '170 x 75  cm  oil on paper ,  2017'},
  { src: 'https://i.imgur.com/Tlis6Jy.jpg', width: 257, height: 608 , caption: '170 x 75 cm  oil on paper , 2017'},
  { src: 'https://i.imgur.com/jTfx2WM.jpg', width: 257, height:608  , caption: '170 x 75 cm oil on paper ,  2017'},
  { src: 'https://i.imgur.com/tsVoU7d.jpg', width: 265, height: 608 , caption: '170 x 75  cm  oil on paper ,2017'},
  { src: 'https://i.imgur.com/yd5trfL.jpg', width: 436, height: 608 , caption: '70x50 cm  oil on paper ,2017'},
  { src: 'https://i.imgur.com/q7SzLea.jpg', width: 371, height: 566 , caption: '50x35 cm  oil on paper ,2017'},
  { src: 'https://i.imgur.com/eKXsPyG.jpg', width: 391, height: 566, caption: '35x25 cm  oil on paper, 2017' },
  { src: 'https://i.imgur.com/ns7Rokj.jpg', width: 410, height: 566, caption: '50x35 cm  oil on paper, 2017' },
  { src: 'https://i.imgur.com/CEOrJY7.jpg', width: 434, height: 608 , caption: '35x25 cm  oil on paper ,  2017'},  
  { src: 'https://i.imgur.com/zyJ35FJ.jpg', width: 432, height: 608 , caption: '29,5 x 21 cm oil on paper, 2015'},
  { src: 'https://i.imgur.com/0La9WZy.jpg', width: 374, height: 540  , caption: '65x50 cm oil on paper , 2015'},
  { src: 'https://i.imgur.com/hrmFvNV.jpg', width: 382, height: 608 , caption: '75x65 cm  oil on paper ,  2015'},
  { src: 'https://i.imgur.com/ptEKvs5.jpg', width: 413, height: 608 , caption: '80x70 cm oil on paper , 2015'},
  { src: 'https://i.imgur.com/zrxAVl1.jpg', width: 405, height: 608 , caption: '80x70 cm oil on paper, 2015'},
  { src: 'https://i.imgur.com/fANLZS9.jpg', width: 430, height: 608 , caption: '21x14,5cm oil on paper ,  2015'},
  { src: 'https://i.imgur.com/I1D1rvw.jpg', width: 577, height: 608 , caption: '74x70 cm  oil on paper ,  2015'},
  
  ];
  class Sketch extends Component{
      // handleClose = () => {
      //   isOpen: false
      // };
    
    
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
     

            {/* <PhotoSwipeGallery items={items} options={options} thumbnailContent={(item) => {
              return (
                <img src={item.src} width={120} height={90}/>
              );
            }}/> */}
            {/* <PhotoSwipe isOpen={isOpen} items={items}  onClose={()=>this.handleClose}/> */}
              <div className="breadcrumbs">
                <h3>{(this.props.language2 ==='EN')?("Sketches"):("Zeichnungen")}</h3>
              </div>
              <div id="Sketch">
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
            </div>
          )
        }
  }
  
  
  export default Sketch
  