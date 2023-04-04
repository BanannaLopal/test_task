export const cropString = (string: string, end: number = 35): string => string.length > end ? `${string.substring(0, end)}...` : string;
