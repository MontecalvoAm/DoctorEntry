import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  where,
  limit,
  doc,
  updateDoc
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Checks if a document with specific field values already exists in a collection.
 * @param collectionName - The name of the Firestore collection.
 * @param fieldName - The name of the field to check.
 * @param value - The value to check for.
 * @param excludeDocId - Optional ID to exclude from the check (useful for updates).
 */
export const checkDuplicate = async (collectionName: string, fieldName: string, value: any, excludeDocId?: string) => {
  try {
    let q = query(
      collection(db, collectionName),
      where(fieldName, '==', value),
      limit(1)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return false;

    // If we have a match, check if it's the same document we're updating
    if (excludeDocId) {
      const match = querySnapshot.docs[0];
      return match.id !== excludeDocId;
    }

    return true;
  } catch (error) {
    console.error(`Error checking duplicate for ${fieldName}:`, error);
    return false;
  }
};

/**
 * Saves form data to a Firestore collection with mandatory audit columns.
 * @param collectionName - The name of the Firestore collection.
 * @param data - The form data to save.
 * @param currentUser - The user ID or name (defaults to 'System').
 */
export const saveFormData = async (collectionName: string, data: any, currentUser: string = 'System') => {
  try {
    const auditData = {
      ...data,
      CreatedAt: serverTimestamp(),
      UpdatedAt: serverTimestamp(),
      CreatedBy: currentUser,
      UpdatedBy: currentUser,
      IsActive: true,
    };

    const docRef = await addDoc(collection(db, collectionName), auditData);
    console.log('Document written with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding document: ', error);
    return { success: false, error };
  }
};

/**
 * Updates an existing document in a Firestore collection.
 * @param collectionName - The name of the Firestore collection.
 * @param docId - The ID of the document to update.
 * @param data - The data to update.
 * @param currentUser - The user ID or name (defaults to 'System').
 */
export const updateFormData = async (collectionName: string, docId: string, data: any, currentUser: string = 'System') => {
  try {
    const docRef = doc(db, collectionName, docId);
    const updateData = {
      ...data,
      UpdatedAt: serverTimestamp(),
      UpdatedBy: currentUser,
    };

    await updateDoc(docRef, updateData);
    console.log('Document updated with ID: ', docId);
    return { success: true };
  } catch (error) {
    console.error('Error updating document: ', error);
    return { success: false, error };
  }
};

/**
 * Fetches all documents from a Firestore collection.
 * @param collectionName - The name of the Firestore collection.
 */
export const getCollectionData = async (collectionName: string) => {
  try {
    const q = query(collection(db, collectionName), orderBy('CreatedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching collection data: ', error);
    return { success: false, error };
  }
};

const auth = getAuth(app);

export { db, auth, app };
