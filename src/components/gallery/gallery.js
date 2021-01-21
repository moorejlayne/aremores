import React from 'react';
import './gallery.less';
import { Modal, Card, CardColumns, Button, Carousel } from 'react-bootstrap';
import { SectionTitle } from '../section-title/section-title';

export const Gallery = ({ images }) => {

	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const imagesJsx = images.map(image => {
		const imageFile = image.default;
		return (
			<Card>
				<Card.Img src={imageFile} alt={'imageAlt'} key={imageFile} className={''} onClick={() => setIsModalOpen(true)}/>
			</Card>
		)
	})

	return (
		<>
			<SectionTitle id={'gallery'} title={'Gallery'}/>
			<div className={'gallery-wrapper'}>
				<CardColumns>
					{ imagesJsx }
				</CardColumns>
			</div>
			<ModalImageGallery
				show={isModalOpen}
				onClose={()=> setIsModalOpen(false)}
				images={images}
			/>
		</>
	)
}

export const ModalImageGallery = (props) => {
	const { images } = props

	return (
		<Modal
			{...props}
			size={'lg'}
			aria-labelledby={'image-gallery-modal'}
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id={'image-gallery'}>
					Image Gallery
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Carousel>
					{
						images.map(image => {
							return (
								<Carousel.Item>
									<img
										className="d-block w-100"
										src={`${image.default}`}
										alt="First slide"
									/>
								</Carousel.Item>
							)
						})
				}
				</Carousel>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onClose}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}