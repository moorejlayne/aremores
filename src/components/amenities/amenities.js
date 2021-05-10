import React from 'react';
import './amenities.less';

export const Amenities = ({ amenities }) => {

	return (
		<div className={'amenities-container'}>
			{
				amenities.map(amenity => {
					return (
						<div className={'amenity-card'}>
							<div className={'amenity-icon'}>{amenity.icon}</div>
							<div className={'amenity-label'}>{amenity.label}</div>
						</div>
					)
				})
			}
		</div>
	)
}