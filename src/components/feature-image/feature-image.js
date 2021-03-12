import React from 'react';
import './feature-image.less';

export const FeatureImage = ({ featureImage }) => {
	return (
		<div className={`feature-image ${featureImage.filename}`} role={'presentation'}>
			<div className={'feature-image-title'}>
				{ featureImage.title }
			</div>
		</div>
	)
}