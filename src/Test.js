import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from './redux/modalReducer';

const TestVideo = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Button onClick={() => dispatch(openModal({modalType: 'YoutubeEmbed'}))} content='Play Video' color='blue' />
        </> 
        
     );
}
 
export default TestVideo;

// 