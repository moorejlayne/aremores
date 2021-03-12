import React from 'react';
import { FeatureImage } from '../components/feature-image/feature-image';

export const Page = ({ pageName, pageContent, featureImage }) => {
	return (
		<div className={`page-content ${pageName}`}>
			{featureImage && <FeatureImage featureImage={ featureImage } />}
			<div className={'page'}>
				<div className={'page-body'}>
					{ pageContent }
				</div>
			</div>
		</div>
	)
}