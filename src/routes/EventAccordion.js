import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import Test from '../TestVideo';

const EventAccordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''


    return (
        <React.Fragment key={item.title}>
            <Accordion.Title className={`title ${active}`} onClick={() => onTitleClick(index)} >
                <Icon name='dropdown' />
                {item.title}
            </Accordion.Title>
            <Accordion.Content className={`content ${active}`}>
                <p>
                    {item.content}
                </p>
                <p>    
                    <Test url={item.url} />
                    {console.log(Test)}
                </p>
            </Accordion.Content>
        </React.Fragment>
    )
    })
    return (
    <Accordion styled>
        {renderedItems}
    </Accordion>
    );

}
 
export default EventAccordion;

//reserve
