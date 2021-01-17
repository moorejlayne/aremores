import React from 'react';
import '../common-styles.less'
import pic from '../../assets/pine-lodge-main.jpg';
import { Page } from '../page-template';
import { Reviews } from '../../components/reviews/reviews';

export const PineLodge = () => {

    const pageName = 'pineLodge';
    const primaryImage = {
        image: pic,
        description: 'A place to gather.',
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