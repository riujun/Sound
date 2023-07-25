/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { useEffect, useState } from 'react';

export interface UserData {
  id: number;
  name: string;
  email: string;
}

export function useUserData(): UserData | null {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const getUserDataFromToken = () => {
      const token = localStorage.getItem('Token');
      if (token != null) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const decodedToken = jwt.decode(token) as JwtPayload;
          if (decodedToken !== null) {
            setUserData({
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              id: decodedToken.id as number,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              name: decodedToken.name as string,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              email: decodedToken.email as string,
            });
          }
        } catch (error) {
          console.error('Error al decodificar el token:', error);
        }
      }
    };

    getUserDataFromToken();
  }, []);

  return userData;
}
