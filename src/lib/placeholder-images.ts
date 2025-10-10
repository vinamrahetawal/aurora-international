import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

const imagesById = new Map(placeholderImages.map(img => [img.id, img]));

export function getImageById(id: string): ImagePlaceholder | undefined {
  return imagesById.get(id);
}
