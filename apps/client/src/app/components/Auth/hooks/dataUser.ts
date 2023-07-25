/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

export interface UserData {
  id: string;
  // Otros campos que pueda tener tu objeto JSON
}

export const useDataUser = (): UserData | null => {
  const [respuestaGuardada, setRespuestaGuardada] = useState<UserData | null>(null);

  useEffect(() => {
    // Recuperar los datos del Local Storage al cargar el componente
    const respuestaApi = localStorage.getItem('respuestaApi');
    if (respuestaApi != null) {
      const userData: UserData = JSON.parse(respuestaApi) as UserData; // Explicitly type as UserData
      setRespuestaGuardada(userData);
    }
  }, []);

  return respuestaGuardada;
};
