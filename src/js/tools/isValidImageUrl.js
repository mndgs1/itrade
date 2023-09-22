export function isValidImageUrl(url) {
  // Define a list of valid image file extensions
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];

  // Extract the file extension from the URL
  const urlExtension = url.split(".").pop().toLowerCase();

  if (imageExtensions.includes(urlExtension)) {
    return true;
  } else {
    return false;
  }
}
