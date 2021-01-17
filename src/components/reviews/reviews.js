import React from 'react';
import './reviews.less';
import { Carousel, Card } from 'react-bootstrap';
import { rentalData } from '../../data/rental-data';
import { SectionTitle } from '../section-title/section-title';

export const Reviews = ({ rentalName }) => {

	const reviews = rentalData[rentalName].reviews;

	const iconColor = '#212529';
	const iconHeight = '50'

	const prevIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" width={iconHeight} height={iconHeight} fill={iconColor}
		     className="bi bi-chevron-left" viewBox="0 0 16 16">
			<path fillRule="evenodd"
			      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
		</svg>
	)

	const nextIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" width={iconHeight} height={iconHeight} fill={iconColor}
		     className="bi bi-chevron-right" viewBox="0 0 16 16">
			<path fillRule="evenodd"
			      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
		</svg>
	)

	return (
		<>
			<SectionTitle id={'reviews'} title={'Reviews'}/>
			<div className={'reviews-wrapper'}>
				<Carousel className={'reviews'} nextIcon ={nextIcon} prevIcon={prevIcon}>
					{
						Object.values(reviews).map(review => {
							return (
								<Carousel.Item>
									<Card bg={'light'}>
										{ review.review }
									</Card>
									<Carousel.Caption>
										<h3>{ review.author }</h3>
										<p>{ review.date }</p>
									</Carousel.Caption>
								</Carousel.Item>
							)
						})
					}
				</Carousel>
			</div>
		</>
	)
}