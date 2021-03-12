import React from 'react';
import '../common-styles.less'
import { Page } from '../page-template';
import { Reviews } from '../../components/reviews/reviews';
import { Gallery } from '../../components/gallery/gallery';
import { importAll } from '../../helpers/importAllImages';
import { pageDetails } from '../page-details';

const images = importAll(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/));

export const PineCone = () => {

    const pageName = 'pineCone';
    const pageContent = (
        <>
            <Gallery images={images} galleryTitle={'Pine Cone Gallery'}/>
            <Reviews rentalName={pageName}/>
        </>
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