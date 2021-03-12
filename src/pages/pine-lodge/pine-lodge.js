import React from 'react';
import '../common-styles.less'
import { Page } from '../page-template';
import { Reviews } from '../../components/reviews/reviews';
import { pageDetails } from '../page-details';

export const PineLodge = () => {

    const pageName = 'pineLodge';
    const pageContent = (
        <Reviews rentalName={pageName}/>
    );
    const featureImage = pageDetails.categoriesData.rentals.subcategoriesData[pageName].featureImage

    return (
        <Page
            pageName={pageName}
            pageContent={pageContent}
            featureImage={featureImage}
        />
    )
}