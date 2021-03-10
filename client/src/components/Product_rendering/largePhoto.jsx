import React, {useEffect} from 'react';
import Magnifier from 'react-magnifier';
import Magnify from './Magnify.jsx';
 var largePhoto = (props) => {
   switch(props.direction) {
     case 'right': return (props.photo ?
        <Magnifier key={props.photo} onClick={props.fullscreen} className='largeImageR' id='lg' src={props.photo} width='auto' height='600'></Magnifier>
        : <div>
          <img className='largeImage' id='lg' src='https://www.porcelaingres.com/img/collezioni/JUST-GREY/big/just_grey_light_grey.jpg' width='auto' height='600'></img>
        </div>)

      case 'left': return (props.photo ?
        <Magnifier key={props.photo} onClick={props.fullscreen} className='largeImageL' id='lg' src={props.photo} width='auto' height='600'></Magnifier>
        : <div>
          <img className='largeImage' id='lg' src='https://www.porcelaingres.com/img/collezioni/JUST-GREY/big/just_grey_light_grey.jpg' width='auto' height='600'></img>
        </div>)
      default :  return (props.photo ?
        <Magnifier key={props.photo} onClick={props.fullscreen} id='lg' src={props.photo} width='auto' height='600'></Magnifier>
        : <div>
          <img className='largeImage' id='lg' src='https://www.porcelaingres.com/img/collezioni/JUST-GREY/big/just_grey_light_grey.jpg' width='auto' height='600'></img>
        </div>)
    }
  }

  export default largePhoto;


