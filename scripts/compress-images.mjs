import { readdir, rename, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imageDirectory = path.resolve('dist', 'anarghyaimages');
const supportedFormats = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

async function getImageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await getImageFiles(entryPath));
    } else if (supportedFormats.has(path.extname(entry.name).toLowerCase())) {
      files.push(entryPath);
    }
  }

  return files;
}

function configureImage(image, extension) {
  switch (extension) {
    case '.jpg':
    case '.jpeg':
      return image.jpeg({ quality: 50, mozjpeg: true });
    case '.png':
      return image.png({ compressionLevel: 9, adaptiveFiltering: true });
    case '.webp':
      return image.webp({ quality: 50 });
    case '.avif':
      return image.avif({ quality: 50 });
    default:
      return image;
  }
}

async function compressImage(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const temporaryPath = `${filePath}.tmp`;
  const originalSize = (await stat(filePath)).size;

  await configureImage(sharp(filePath), extension).toFile(temporaryPath);
  const compressedSize = (await stat(temporaryPath)).size;

  if (compressedSize < originalSize) {
    await rm(filePath);
    await rename(temporaryPath, filePath);
    return originalSize - compressedSize;
  }

  await rm(temporaryPath);
  return 0;
}

try {
  const imageFiles = await getImageFiles(imageDirectory);
  let savedBytes = 0;
  let compressedFiles = 0;

  for (const filePath of imageFiles) {
    const saved = await compressImage(filePath);
    if (saved > 0) {
      savedBytes += saved;
      compressedFiles += 1;
    }
  }

  console.log(`Compressed ${compressedFiles} of ${imageFiles.length} images, saving ${(savedBytes / 1024).toFixed(1)} KB.`);
} catch (error) {
  console.error('Image compression failed:', error);
  process.exitCode = 1;
}
