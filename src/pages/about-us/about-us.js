import React from 'react';
import '../common-styles.less'
import pic from '../../assets/about-us-main.jpg';
import staticMap from '../../assets/aremores-static-map.jpg';
import { Page } from '../page-template';
import { SectionTitle } from '../../components/section-title/section-title';

export const AboutUs = () => {

    const pageName = 'aboutUs';

    const primaryImage = {
        image: pic,
        description: 'A forest in late autumn'
    }

    const pageContent = (
        <>
            <SectionTitle id={'history'} title={''}/>
            <p>
                <strong>AREMORES, LLC</strong> is a family tree farm located in the Northwest Arkansas mountains. It is operated as a limited liability company whose members are legal descendents of Robin and Ruth Moore.

                <br/><br/>

                The founders' intent was that AREMORES exist in perpetuity as a haven attesting to the Glory of God’s creation by being available for the families of their descendents and their friends, by being profitable through best management practices of its resources, and by being a responsible community member through taxation and charitable giving. Rental accommodations are available on most weekends.

                <br/><br/>

                AREMORES members and its member-managers work to sustain the properties for indefinite use. Although timber management is of primary importance, AREMORES business activities also focus on sustainability considerations regarding soil and water conservation, recreational improvements, and wildlife habitat improvements.

                <br/><br/>

                Located near Ponca, Arkansas in the upper region of the Buffalo National River, AREMORES offers two idyllic rental accommodations - primitive PINE CONE CABIN and modern PINE LODGE CABIN. Nearby recreational and sightseeing activities are outstanding.
            </p>
            <SectionTitle id={'location'} title={'Location'}/>
            <p className={'page-content aboutUs__location'}>
                AREMORES is located in NW Arkansas, approximately 60 miles E of Fayetteville, and 10 miles SW of Compton. GPS: 36.04419, -93.41746.
            </p>
            <p>From Harrison, AR (~45 min)</p>
            <ol>
                <li>Go South on US 43 to Compton. Continue 4.9 mi south on US 43.</li>
                <li>Turn right (west) on blacktop (Firetower Road (N C 1300) - not Hwy 103)</li>
                <li>Continue 3.4 miles to crossroads (see Stoverville sign)</li>
                <li>Turn right (north) on gravel (N C 1350). Go 1 mile (always keeping left) to (N C 1355)</li>
                <li>Follow signs to <strong>check-in</strong></li>
            </ol>
            <p>You can also get to Firetower Road (N C 1300) from:
                <ul>
                    <li>Hwy 43 via Ponca from the south</li>
                    <li>Hwy 21 via Kingston from the north</li>
                    <li>Hwy 21 via Boxley from the south</li>
                </ul>
            </p>
            <div className={'maps'}>
                <div className={'map-static'}>
                    <img src={staticMap} alt={'Static map showing location of AREMORES cabin rentals'}/>
                </div>
                <div className={'map-embed'}>
                    <iframe
                        title="embedded-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9945.082654264503!2d-93.42313328855649!3d36.04489878515588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ce97ff06d728bd%3A0xfd9b0e70fb916b55!2sAremore&#39;s%20Pine%20Cone%20%26%20Pine%20Lodge%20Cabins!5e1!3m2!1sen!2sus!4v1610833598181!5m2!1sen!2sus"
                        width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen=""
                        aria-hidden="false" tabIndex="0"/>
                </div>
            </div>
        </>
    )

    return (
        <Page
            pageName={pageName}
            primaryImage={primaryImage}
            pageContent={pageContent}
        />
    )
}