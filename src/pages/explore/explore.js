import React from 'react';
import '../common-styles.less'
import { Page } from '../page-template';
import { pageDetails } from '../page-details';

export const Explore = () => {

    const pageName = 'explore';
    const pageContent = '';
    const featureImage = pageDetails.categoriesData[pageName].featureImage


    return (
        <Page
            pageName={pageName}
            pageContent={pageContent}
            featureImage={featureImage}
        />
    )
}