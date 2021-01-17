import React from 'react';
import '../common-styles.less'
import pic from '../../assets/pine-lodge-main.jpg';
import { Page } from '../page-template';

export const PineLodge = () => {

    const pageName = 'pineLodge';
    const primaryImage = {
        image: pic,
        description: 'A place to gather.',
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