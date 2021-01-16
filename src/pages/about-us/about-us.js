import React from 'react';
import '../common-styles.less'
import { PrimaryImage } from '../../components/images/primary-image';
import { PageNav } from '../../components/page-nav/page-nav';
import pic from '../../assets/trees.jpg';
import { pageData } from '../../components/page-nav/page-constants';

export const AboutUs = () => {
    return (
        <div className={'page'}>
            <div className={'page-body'}>
                <PrimaryImage image={pic} description={'A forest in late autumn.'}/>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
                <h1> Some more content </h1>
            </div>
            <div className={'page-nav'}>
                <PageNav page={pageData['aboutUs']}/>
            </div>
        </div>

    )


    // return (
    //     <div className={'page'}>
    //         <PrimaryImageCard image={pic} alt={'TREES'}/>
    //         <h1> About Us </h1>
    //     </div>
    // )
}