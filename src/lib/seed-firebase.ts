import { saveFormData } from './firebase';
import bcrypt from 'bcryptjs';

/**
 * Seed initial data to Firestore to "create" collections and fields.
 * This helps visualize the schema in the Firebase Console.
 */
export const seedInitialCollections = async () => {
  console.log('Starting Firebase initialization...');

  // 1. Initial "doctors" entry (Example)
  const sampleDoctor = {
    surname: 'Doe',
    givenName: 'John',
    specialty: 'Cardiology',
    email: 'john.doe@example.com',
  };
  await saveFormData('doctors', sampleDoctor);

  // 2. Initial "M_Users" entry
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('Vis@yasM3d', salt);

  const sampleUser = {
    UserID: 'admin_it',
    UserName: 'IT Administrator',
    Email: 'it@visayasmed.com'.toLowerCase(),
    Password: hashedPassword, 
    Role: 'Administrator',
  };
  await saveFormData('M_Users', sampleUser);

  console.log('Firebase initialization complete! Check your Firestore Console.');
};
