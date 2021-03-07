export const headerMenuCategories = {
    menuCategoriesByName: {
        aboutUs: {
            label: 'About Us',
            subcategoriesByName: {},
            subcategoriesAll: [],
        },
        rentals: {
            label: 'Cabin Rentals',
            subcategoriesByName: {
                pineCone: {
                    label: 'Pine Cone',
                    hasSubcategories: true,
                },
                pineLodge: {
                    label: 'Pine Lodge',
                    hasSubcategories: true,
                },
                reservations: 'Reservations',
            },
            subcategoriesAll: ['pineCone', 'pineLodge', 'reservations'],
        },
        explore: {
            label: 'Explore the Area',
            subcategoriesByName: {},
            subcategoriesAll: [],
        },
        contact: {
            label: 'Contact Us',
            subcategoriesByName: {},
            subcategoriesAll: [],
        },
        family: {
            label: 'Family',
            subcategoriesByName: {
                membersLogin: 'Members Login',
                heidi: 'Heidi',
                weddingAnniversity: '50th Wedding Anniversary',
                monument: 'Family Monument',
            },
            subcategoriesAll: ['heidi', 'weddingAnniversity', 'monument', 'membersLogin'],
        },
    },
    menuCategoriesAll: ['aboutUs', 'rentals', 'explore', 'contact', 'family']
}