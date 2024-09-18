import { firestore } from "../firebaseConfig";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, CollectionReference, DocumentData } from "firebase/firestore";

// Generic function to get a reference to a collection
const getCollectionRef = (collectionName: string): CollectionReference<DocumentData> => {
  return collection(firestore, collectionName);
};

// Create
export const createItem = async (collectionName: string, item: any): Promise<void> => {
  try {
    const collectionRef = getCollectionRef(collectionName);
    await addDoc(collectionRef, item);
  } catch (error) {
    console.error(`Error creating item in ${collectionName}: `, error);
  }
};

// Read
export const getItems = async (collectionName: string): Promise<any[]> => {
  try {
    const collectionRef = getCollectionRef(collectionName);
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as any),
    }));
  } catch (error) {
    console.error(`Error fetching items from ${collectionName}: `, error);
    return [];
  }
};

// Update
export const updateItem = async (collectionName: string, id: string, updatedItem: Partial<any>): Promise<void> => {
  try {
    const collectionRef = getCollectionRef(collectionName);
    const itemDoc = doc(collectionRef, id);
    await updateDoc(itemDoc, updatedItem);
  } catch (error) {
    console.error(`Error updating item in ${collectionName}: `, error);
  }
};

// Delete
export const deleteItem = async (collectionName: string, id: string): Promise<void> => {
  try {
    const collectionRef = getCollectionRef(collectionName);
    const itemDoc = doc(collectionRef, id);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error(`Error deleting item from ${collectionName}: `, error);
  }
};



//usage referance

// // Create an item
// const newItem = { name: "New Item", value: 100 };
// await createItem('items', newItem);

// // Get items
// const items = await getItems('items');
// console.log(items);

// // Update an item
// const itemId = "someItemId";
// const updatedItem = { value: 200 };
// await updateItem('items', itemId, updatedItem);

// // Delete an item
// await deleteItem('items', itemId);
