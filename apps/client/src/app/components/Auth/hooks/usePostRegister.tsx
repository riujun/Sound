/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import axios, { type AxiosError, type AxiosResponse } from 'axios';
import { useState } from 'react';

import type { dataFetch } from '../FormRegister';

interface PostRegisterResult {
  ok: boolean;
  errorMessage?: any;
}

const usePostRegister = (postRoute: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const postRegister = async (data: dataFetch): Promise<PostRegisterResult> => {
    setIsLoading(true);

    try {
      const response: AxiosResponse = await axios.post(postRoute, data);
      const { status } = response;

      setIsLoading(false);
      console.log('[REGISTRO EXITOSO]');
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      return { ok: status === 200 };
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      const response = axiosError.response;
      const errorMessage = response != null ? response.data : 'No hay mensaje';
      console.error('El error de fetch operacion es:', error);
      console.error('El mensaje de server es:', errorMessage);
      setIsLoading(false);
      return { ok: false, errorMessage };
    }
  };

  return { isLoading, postRegister };
};

export default usePostRegister;
