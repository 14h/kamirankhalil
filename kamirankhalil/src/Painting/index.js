import React, {Component} from 'react';
import './style.css'
import Lightbox from 'react-images';

const photos = [
    { src: 'https://i.imgur.com/LgDkNaY.jpg', width: 589, height: 589, caption: '50x50cm  oil on canvas, 2017'},
    { src: 'https://i.imgur.com/NKRsUHJ.jpg', width:673 , height: 334 , caption:'200x400 cm oil on canvas 2017'},
    { src: 'https://i.imgur.com/DKGnmAR.jpg', width:336 , height: 566, caption:'100-60 cm  oil on canvas, 2016'},
    { src: 'https://i.imgur.com/mBOXMe8.jpg', width: 341, height: 566 , caption:'100-60 cm oil on canvas, 2016'},
    { src: 'https://i.imgur.com/rVRCeJ0.jpg', width: 341, height: 566 , caption:'100-60 cm, oil on canvas 2017'},
    { src: 'https://i.imgur.com/wTAyFum.jpg', width: 602, height: 600, caption: '50x 50 cm oil on canvas, 2016'},
    { src: 'https://i.imgur.com/pB7OX2s.jpg', width: 435, height: 759, caption: '100-60 cm  oil on canvas , 2016'},
    { src: 'https://i.imgur.com/rPzd5fy.jpg', width: 753, height: 759, caption: '140x140 cm oil on canvas, 2015'},
    { src: 'https://i.imgur.com/n83WjwG.jpg', width: 420, height: 566 , caption:'200x150 cm  oil on canvas, 2009'},
    { src: 'https://i.imgur.com/bNgXPbs.jpg', width:305 , height: 566 , caption:'260x 140 cm oil on canvas, 2011'},
    { src: 'https://i.imgur.com/4wm13FW.jpg', width: 424 , height: 566 , caption:'200x150 cm oil on canvas, 2011'},
    { src: 'https://i.imgur.com/FDYqthB.jpg', width: 426 , height: 566 , caption:'200x150 cm  oil on canvas, 2011'},
    { src: 'https://i.imgur.com/j4O2J9J.jpg', width: 571 , height: 566 , caption:'90x90cm  oil on canvas, 2010'},
    { src: 'https://i.imgur.com/a5Oyq9K.jpg', width:571 , height: 566 , caption:'120x120 cm oil on canvas,2009'},
    { src: 'https://i.imgur.com/wVFJMeI.jpg', width: 578, height: 566 , caption:'120x120 cm charcoal on canvas 2011'},
    { src: 'https://i.imgur.com/Rxy6nUy.jpg', width: 283, height: 566 , caption:'280x140 cm charcoal on canvas 2011'},
    { src: 'https://i.imgur.com/4f5181U.jpg', width:674 , height: 433 , caption:'190x120 cm  oil on canvas,2015' },
    { src: 'https://i.imgur.com/zQkxItw.jpg', width: 674 , height: 447, caption:'160x240 cm  oil on canvas, 2011' },
    { src: 'https://i.imgur.com/lQ49FKQ.jpg', width: 568, height: 566, caption:'150x150 cm  oil on canvas,2010' },
    { src: 'https://i.imgur.com/7FsRwd1.jpg', width:557 , height: 566 , caption:'150x150cm  oil on canvas, 2010' },
    { src: 'https://i.imgur.com/BtZ7HxS.jpg', width: 563, height: 566 , caption:'150x150 cm   oil on canvas,2010'},
    { src: 'https://i.imgur.com/EST2pk2.jpg', width:566 , height: 566 , caption:'150x150cm  oil on canvas, 2011'},
  ];

  export default  class Paintings extends Component{
    constructor() {
        super();
        this.state = { currentImage: 0 };
      }
      openLightbox = (event, obj) => {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox = () => {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious = () => {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext = () => {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }
      componentDidMount(){
        (function smoothscroll(){
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                  window.requestAnimationFrame(smoothscroll);
                  window.scrollTo (0,currentScroll - (currentScroll/5));
            }
        })();
        const painting = document.getElementById('painting');
        window.setTimeout(()=>{
          painting.style.opacity = 1;
        }, 200);
      }
      render() {
        return (
          <div id='painting'
          style={{
            transition      : 'all 0.5s linear',
            opacity         : 0,
          }}
          >
            <div className="breadcrumbs">
              <h3>{(this.props.language2 ==='EN')?("Paintings"):("Gemälde")}</h3>
            </div>
            <div
              style={{
                display         : 'flex',
                flexDirection   : 'row',
                flexWrap        : 'wrap',
                justifyContent  : 'space-around',
                alignItems      : 'center',
              }}
            >
              { photos.map( ( photo, index ) => (
                <img
                  key={ `painting${index}` }
                  src={ photo.src }
                  style={ {
                    width     : '40vw',
                    height    : 'auto',
                    marginTop  : '20px',
                    cursor    : 'pointer',
                  } }
                  onClick={ ()=> this.setState( { currentImage: index, lightboxIsOpen: true } ) } 
                />
              ) ) }
            </div>
            <Lightbox images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              backdropClosesModal={true}
            />
          </div>
        )
      }
}

