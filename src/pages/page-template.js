import React from 'react';
import { PrimaryImage } from '../components/images/primary-image';
import { PageNav } from '../components/page-nav/page-nav';
import { pageData } from '../components/page-nav/page-constants';

export const Page = ({ primaryImage, pageName, pageContent }) => {
	return (
		<div className={'page'}>
			<div className={'page-body'}>
				<PrimaryImage image={primaryImage.image} description={primaryImage.description}/>
				{ pageContent }
			</div>
			<div className={'page-nav'}>
				<PageNav page={pageData[pageName]}/>
			</div>
		</div>
	)
}