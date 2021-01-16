import React from 'react';
import './images.less';
import { Card } from 'react-bootstrap';

export const PrimaryImage = ({ image, description }) => {

    return (
        <div className={'primary-image'}>
            <Card border={'secondary'} maxWidth={'70%'}>
                <Card.Body>
                    <Card.Img variant={'bottom'} src={image} aria-hidden={true} />
                    <Card.Text>
                        { description }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
