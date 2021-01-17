
const rentalPage = {
	categoriesByName: {
		details: {
			label: 'Details',
			link: '#details',
		},
		amenities: {
			label: 'Amenities',
			link: '#amenities',
		},
		gallery: {
			label: 'Gallery',
			link: '#gallery',
		},
		reviews: {
			label: 'Reviews',
			link: '#reviews',
		},
	},
	categoriesAll: ['details', 'amenities', 'gallery', 'reviews'],
}


export const pageData = {
	aboutUs: {
		label: 'About Us',
		categoriesByName: {
			history: {
				label: 'History',
				link: '#history',
			},
			location: {
				label: 'Location',
				link: '#location',
			},
		},
		categoriesAll: ['history', 'location'],
	},
	pineLodge: {
		label: 'Pine Lodge Cabin Rental',
		...rentalPage,
	},
	pineCone: {
		label: 'Pine Cone Cabin Rental',
		...rentalPage,
	},
	reservations: {
		label: 'Reservations',
		categoriesByName: {
			pineLodge: {
				label: 'Pine Lodge',
				link: '#pineLodge',
			},
			pineCone: {
				label: 'Pine Cone',
				link: '#pineCone',
			},
		},
		categoriesAll: ['pineLodge', 'pineCone'],
	},
	explore: {
		label: 'Explore the Area',
		categoriesByName: {
			comingSoon: {
				label: 'Coming Soon',
				link: '#comingSoon',
			}
		},
		categoriesAll: ['comingSoon'],
	},
	contact: {
		label: 'Contact Us',
	}
}
