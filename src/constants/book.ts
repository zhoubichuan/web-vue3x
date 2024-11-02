export const CBookType = {
    Standard_Product: 1,
    School_Book: 2
} as const;

export type TBookType = typeof CBookType;

export type KBookType = keyof TBookType;

export type VBookType = TBookType[KBookType];
