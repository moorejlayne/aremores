import React from 'react';
import '../common-styles.less'
import pic from '../../assets/pine-cone-main.jpg';
import { Page } from '../page-template';
import { Reviews } from '../../components/reviews/reviews';
import { Gallery } from '../../components/gallery/gallery';
import { importAll } from '../../helpers/importAllImages';
import { pageData } from '../../components/page-nav/page-constants';

const images = importAll(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/));

export const PineCone = () => {

    const pageName = 'pineCone';
    const primaryImage = {
        image: pic,
        description: 'An isolated cabin in the woods.',
    }

    const pageContent = (
        <>
            <Gallery images={images} galleryTitle={pageData[pageName].label}/>
            <Reviews rentalName={pageName}/>
        </>
    );

    return (
        <Page
            pageName={pageName}
            primaryImage={primaryImage}
            pageContent={pageContent}
        />
    )
}