
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
					hasSubcategories: false,
					...rentalPage,
				},
				pineLodge: {
					label: 'Pine Lodge',
					route: '/pine-lodge',
					hasSubcategories: false,
					...rentalPage,
				},
				reservations: {
					label: 'Reservations',
					route: '/reservations',
					hasSubcategories: false,
				},
			},
			subcategoriesAll: ['pineCone', 'pineLodge', 'reservations'],
		},
		explore: {
			label: 'Explore the Area',
			route: '/explore',
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
					hasSubcategories: false,
				},
				weddingAnniversity: {
					label: '50th Wedding Anniversary',
					route: '50th-wedding-anniversary',
					hasSubcategories: false,
				},
				monument: {
					label: 'Family Monument',
					route: 'monument',
					hasSubcategories: false,
				},
			},
			subcategoriesAll: ['heidi', 'weddingAnniversity', 'monument'],
		},
	},
	categoriesAll: ['aboutUs', 'rentals', 'explore', 'family']
}