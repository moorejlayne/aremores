import React from 'react';
import '../common-styles.less'
import pic from '../../assets/pine-cone-main.jpg';
import { Page } from '../page-template';
import { Reviews } from '../../components/reviews/reviews';

export const PineCone = () => {

    const pageName = 'pineCone';
    const primaryImage = {
        image: pic,
        description: 'An isolated cabin in the woods.',
    }

    const pageContent = (
        <Reviews rentalName={pageName}/>
    );

    return (
        <Page
            pageName={pageName}
            primaryImage={primaryImage}
            pageContent={pageContent}
        />
    )
}