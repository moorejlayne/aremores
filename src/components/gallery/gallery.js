import React from 'react';
import './gallery.less';
import { Modal, Card, CardColumns, Button, Carousel } from 'react-bootstrap';
import { SectionTitle } from '../section-title/section-title';

export const Gallery = ({ images, galleryTitle }) => {

	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [activeModalIndex, setActiveModalIndex] = React.useState(0);

	const handleModalOpen = (index) => {
		setIsModalOpen(true)
		setActiveModalIndex(index)
	}

	const imagesJsx = images.map((image, index) => {
		const imageFile = image.default;
		return (
			<Card key={index}>
				<Card.Img src={imageFile} alt={'imageAlt'} className={''} onClick={() => handleModalOpen(index)}/>
			</Card>
		)
	})

	return (
		<>
			<SectionTitle id={'gallery'} title={'Gallery'}/>
			<div className={'gallery-wrapper'}>
				<CardColumns className={'gallery'}>
					{ imagesJsx }
				</CardColumns>
			</div>
			<ModalImageGallery
				show={isModalOpen}
				onHide={()=> setIsModalOpen(false)}
				images={images}
				dialogClassName={'rental-modal'}
				activeModalIndex={activeModalIndex}
				galleryTitle={galleryTitle}
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
					{ props.galleryTitle }
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Carousel interval={null} defaultActiveIndex={props.activeModalIndex}>
					{
						images.map((image, index) => {
							return (
								<Carousel.Item key={index}>
									<div className={'carousel-image-wrapper'}>
										<img
											className=""
											src={`${image.default}`}
											alt="First slide"
										/>
									</div>
								</Carousel.Item>
							)
						})
				}
				</Carousel>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}