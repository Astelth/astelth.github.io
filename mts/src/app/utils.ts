export const loadImage = (url: string, images: (HTMLImageElement | null)[], index: number) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
      images[index] = image;
    });
    image.addEventListener('error', () => {
      reject();
      images[index] = null;
    });
    image.src = url;
  });
}
