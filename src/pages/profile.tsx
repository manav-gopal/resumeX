// profile.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface userData {
  name: string;
  email: string;
}
const Profile = () => {
  // To get the user data by authenticating it with token
  const [userData, setUserData] = useState<userData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/auth/'); // Updated endpoint to fetch user data
        setUserData(response.data.user);
        // console.log('fetched user data', response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add other user details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
