import React from 'react';
import '../common-styles.less'
import pic from '../../assets/about-us-main.jpg';
import { Page } from '../page-template';

export const Reservations = () => {

    const pageName = 'reservations';
    const primaryImage = {
        image: pic,
        description: 'Coming soon!',
    }

    const pageContent = '';

    return (
        <Page
            pageName={pageName}
            primaryImage={primaryImage}
            pageContent={pageContent}
        />
    )
}