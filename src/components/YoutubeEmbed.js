import React from 'react';
import ModalWrapper from './modal/ModalWrapper';
import ReactPlayer from 'react-player'

const YoutubeEmbed = () => {
    return ( 
        <ModalWrapper className='modal-wrapper' size='small' header='Video'>
           <ReactPlayer 
           url='https://www.youtube.com/watch?v=h7Z0yUYHgP8'
           controls={true}
           playing={true}
          
           />
        </ModalWrapper>
        
     );
}
 
export default YoutubeEmbed;

// size='small' header='Video'
// className='modal-wrapper'