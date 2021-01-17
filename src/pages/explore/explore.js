import React from 'react';
import '../common-styles.less'
import pic from '../../assets/explore-main.jpg';
import { Page } from '../page-template';

export const Explore = () => {

    const pageName = 'explore';
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