import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from './redux/modalReducer';

const Test = () => {
    const dispatch = useDispatch()
    return (
        <>
            <h1>Soccer video</h1>
            <Button onClick={() => dispatch(openModal({modalType: 'YoutubeEmbed'}))} content='Play Video' color='blue' />
        </> 
        
     );
}
 
export default Test;