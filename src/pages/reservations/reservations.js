import React from 'react';
import '../common-styles.less'
import { Page } from '../page-template';
import { pageDetails } from '../page-details';

export const Reservations = () => {

    const pageName = 'reservations';
    const pageContent = '';
    const featureImage = pageDetails.categoriesData.rentals.subcategoriesData[pageName].featureImage


    return (
        <Page
            pageName={pageName}
            pageContent={pageContent}
            featureImage={featureImage}
        />
    )
}