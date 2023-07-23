/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface LoginData {
  email: string;
  password: string;
}

interface PostLoginResult {
  ok: boolean;
  errorMessage?: string;
  respuestaApi?: string;
}

const usePostLogin =
  (postRoute: string) =>
  async (data: LoginData): Promise<PostLoginResult> => {
    let response: Response | null = null;

    try {
      response = await fetch(postRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('No hay un ok');
      }

      console.log('[LOGIN SUCCESS]');

      const respuestaApi = response != null ? await response.text() : 'No hay mensaje';

      if (response.ok) {
        localStorage.setItem('jwtToken', await response.json());
      }
      return { ok: true, respuestaApi };
    } catch (error) {
      const errorMessage = response != null ? await response.text() : 'No hay mensaje';
      console.error('El error de fetch operacion es:', error);
      console.error('El mensaje de server es:', errorMessage);
      return { ok: false, errorMessage };
    }
  };

export default usePostLogin;
