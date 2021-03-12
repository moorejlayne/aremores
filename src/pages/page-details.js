
export const basePath = '/aremores';

const rentalPage = {
	subcategoriesData: {
		details: {
			label: 'Details',
			route: '#details',
			hasSubcategories: false,
		},
		amenities: {
			label: 'Amenities',
			route: '#amenities',
			hasSubcategories: false,
		},
		gallery: {
			label: 'Gallery',
			route: '#gallery',
			hasSubcategories: false,
		},
		reviews: {
			label: 'Reviews',
			route: '#reviews',
			hasSubcategories: false,
		},
	},
	subcategoriesAll: ['details', 'amenities', 'gallery', 'reviews'],
}

export const pageDetails = {
	categoriesData: {
		aboutUs: {
			label: 'About Us',
			hasSubcategories: true,
			route: `/about`,
			featureImage: {
				filename: 'about-us-main',
				title: 'About Us',
			},
			subcategoriesData: {
				history: {
					label: 'History',
					route: '/history',
					hasSubcategories: false,
				},
				location: {
					label: 'Location',
					route: '/location',
					hasSubcategories: false,
				},
				contact: {
					label: 'Contact',
					route: '/contact',
					hasSubcategories: false,
				},
			},
			subcategoriesAll: ['history', 'location', 'contact'],
		},
		rentals: {
			label: 'Cabin Rentals',
			route: '/cabin-rentals',
			hasSubcategories: true,
			subcategoriesData: {
				pineCone: {
					label: 'Pine Cone',
					route: '/pine-cone',
					featureImage: {
						filename: 'pine-cone-main',
						title: 'Pine Cone Cabin Rental',
					},
					hasSubcategories: false,
					...rentalPage,
				},
				pineLodge: {
					label: 'Pine Lodge',
					route: '/pine-lodge',
					featureImage: {
						filename: 'pine-lodge-main',
						title: 'Pine Lodge Cabin Rental',
					},
					hasSubcategories: false,
					...rentalPage,
				},
				reservations: {
					label: 'Reservations',
					route: '/reservations',
					featureImage: {
						filename: 'reservations-main',
						title: 'Reservations',
					},
					hasSubcategories: false,
				},
			},
			subcategoriesAll: ['pineCone', 'pineLodge', 'reservations'],
		},
		explore: {
			label: 'Explore the Area',
			route: '/explore',
			featureImage: {
				filename: 'explore-main',
				title: 'Explore the Area',
			},
			hasSubcategories: false,
		},
		family: {
			label: 'Family',
			route: '/family',
			hasSubcategories: true,
			subcategoriesData: {
				heidi: {
					label: 'Heidi',
					route: 'heidi',
					featureImage: {
						filename: 'heidi-main',
						title: 'Heidi',
					},
					hasSubcategories: false,
				},
				weddingAnniversity: {
					label: '50th Wedding Anniversary',
					route: '50th-wedding-anniversary',
					featureImage: {
						filename: '50th-wedding-main',
						title: '50th Wedding Anniversary',
					},
					hasSubcategories: false,
				},
				monument: {
					label: 'Family Monument',
					route: 'monument',
					featureImage: {
						filename: 'monument-main',
						title: 'Family Monument',
					},
					hasSubcategories: false,
				},
			},
			subcategoriesAll: ['heidi', 'weddingAnniversity', 'monument'],
		},
	},
	categoriesAll: ['aboutUs', 'rentals', 'explore', 'family']
}