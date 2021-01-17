import React from 'react';
import '../common-styles.less'
import pic from '../../assets/about-us-main.jpg';
import { Page } from '../page-template';

export const Contact = () => {

    const pageName = 'contact';
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