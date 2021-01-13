export const basePath = '/aremores';

export const menuPagePaths = {
    aboutUs: basePath,
    cabinRentals: `${basePath}/cabin-rentals`,
    explore: `${basePath}/explore`,
    reviews: `${basePath}/reviews`,
    contact: `${basePath}/contact`,
    family: `${basePath}/family`,
};

export const cabinRentalsPaths = {
    pineLodge: `${menuPagePaths.cabinRentals}/pine-lodge`,
    pineCone: `${menuPagePaths.cabinRentals}/pine-cone`,
    reservations: `${menuPagePaths.cabinRentals}/reservations`,
}

// The Aremores Family
export const familyPaths = {
    membersLogin: `${menuPagePaths.family}/members-login`,
    heidi: `${menuPagePaths.family}/heidi`,
    weddingAnniversity: `${menuPagePaths.family}/50th-wedding-anniversary`,
    monument: `${menuPagePaths.family}/monument`,
}

// ALL
export const allPaths = {
    ...menuPagePaths,
    ...cabinRentalsPaths,
    ...familyPaths
}