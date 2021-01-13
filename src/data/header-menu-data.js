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
                pineCone: 'Pine Cone',
                pineLodge: 'Pine Lodge',
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
    },
    menuCategoriesAll: ['aboutUs', 'rentals', 'explore', 'contact']
}

export const headerMenuFamilyCategories = {
    menuCategoriesByName: {
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
    menuCategoriesAll: ['family'],
}