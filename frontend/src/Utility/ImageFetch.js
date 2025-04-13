// src/utils/getImageUrls.js
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/FireBaseConfig";

export const getAllImageURLs = async (folderPath) => {
  const folderRef = ref(storage, folderPath);
  const result = await listAll(folderRef);
  const urls = await Promise.all(
    result.items.map((itemRef) => getDownloadURL(itemRef))
  );
  return urls;
};
