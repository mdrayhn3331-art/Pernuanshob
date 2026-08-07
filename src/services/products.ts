import {
  collection,
  getDocs
} from "firebase/firestore";

import { db } from "../firebase";
import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {

  const snapshot = await getDocs(
    collection(db, "products")
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Product[];

}
