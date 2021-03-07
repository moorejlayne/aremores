import React from 'react';
import { PrimaryImage } from '../components/images/primary-image';

export const Page = ({ primaryImage, pageName, pageContent }) => {
	return (
		<div className={`page-content ${pageName}`}>
			<div className={'page'}>
				<div className={'page-body'}>
					<PrimaryImage image={primaryImage.image} description={primaryImage.description}/>
					{ pageContent }
				</div>
			</div>
		</div>
	)
}