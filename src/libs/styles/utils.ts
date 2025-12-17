import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export type { ClassValue };

/**
 * cn or className utility function that merges tailwindcss classes with clsx classes
 * @param inputs ClassValue[]
 * @returns string
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default cn;
