import { useEffect, useState } from 'react';

import { useDataUser } from '@/app/components/Auth/hooks/dataUser';

interface FetchedUserData {
  _id: string;
  name: string;
  surname: string;
  artist: boolean;
  username: string;
  profilePhoto: string;
}

const useDataUsuario = () => {
  const data = useDataUser();
  const [userData, setUserData] = useState<FetchedUserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (data?._id !== null && data?._id !== undefined) {
        try {
          const url = `http://localhost:4000/user/${data._id}`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const fetchedUserData: FetchedUserData = (await response.json()) as FetchedUserData;
          setUserData(fetchedUserData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    void fetchData();
  }, [data]);

  return userData;
};

export default useDataUsuario;
