import React, {Component} from 'react';
import './style.css'
import Lightbox from 'react-images';

const photos = [
  { src: 'https://i.imgur.com/qhP3m6D.jpg', width: 718, height: 538, caption: 'MIT ILLUSION Berlin 2019'},
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

export default class Media extends Component{
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
    const media = document.getElementById('media');
    window.setTimeout(()=>{
      media.style.opacity = 1;
    }, 200);
  }
  render() {
    return (
      <div id='media'
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
        <hr/>
        <h2>MIT ILLUSION , Berlin, 2019 :  <a href="https://www.scribd.com/embeds/399824437/content?start_page=1&view_mode=scroll&access_key=key-6oGg3zGeBZfuimXRTMAZ"> Catalog</a></h2>
        <hr/>
        <h2>1 x 1 – KUNST IM QUADRAT, 2016 :  <a href="https://www.vietinghoff-art.de/wp-content/uploads/2016/01/RZ_1x1_Katalog_Pfade_endLOW.pdf"> Catalog</a></h2>
        <hr/>
        <h2>Artscoops Auction , Beirut, 2016 :  <a href="https://www.scribd.com/embeds/379471297/content?start_page=1&view_mode=scroll&access_key=key-6oGg3zGeBZfuimXRTMAZ"> Catalog</a></h2>
        <hr/>
        <h2>" Syrian Aesthetical  Scream" in Konsthallen Sandviken / Sweden 2018  :  <a href="https://www.scribd.com/embeds/380579365/content?start_page=1&view_mode=scroll&access_key=key-pfZd1a7HVV35yAMOCGeq"> Catalog</a></h2>

        <h3>
        
        </h3>
        
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

