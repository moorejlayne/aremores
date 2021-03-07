export const basePath = '';

export const menuCategoryPaths = {
    aboutUs: `${basePath}/about`,
    cabinRentals: `${basePath}/cabin-rentals`,
    explore: `${basePath}/explore`,
    reviews: `${basePath}/reviews`,
    family: `${basePath}/family`,
};

export const aboutUsPaths = {
    history: `${menuCategoryPaths.aboutUs}/history`,
    location: `${menuCategoryPaths.aboutUs}/location`,
    contact: `${menuCategoryPaths.aboutUs}/contact`,
}

export const cabinRentalsPaths = {
    pineLodge: `${menuCategoryPaths.cabinRentals}/pine-lodge`,
    pineCone: `${menuCategoryPaths.cabinRentals}/pine-cone`,
    reservations: `${menuCategoryPaths.cabinRentals}/reservations`,
}

// The Aremores Family
export const familyPaths = {
    membersLogin: `${menuCategoryPaths.family}/members-login`,
    heidi: `${menuCategoryPaths.family}/heidi`,
    weddingAnniversity: `${menuCategoryPaths.family}/50th-wedding-anniversary`,
    monument: `${menuCategoryPaths.family}/monument`,
}

// ALL
export const allPaths = {
    ...menuCategoryPaths,
    ...aboutUsPaths,
    ...cabinRentalsPaths,
    ...familyPaths
}