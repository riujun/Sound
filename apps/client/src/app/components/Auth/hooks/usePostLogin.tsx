/* eslint-disable prettier/prettier */
interface ApiResponse {
  token: string;
  nombre: string;
  email: string;
  id: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface PostLoginResult {
  ok: boolean;
  token: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const usePostLogin = async (postRoute: string, data: LoginData): Promise<PostLoginResult> => {
  try {
    const responseData: ApiResponse = {
      token: 'your_token_here',
      nombre: 'John Doe',
      email: 'john.doe@example.com',
      id: '123456789',
    };

    const { token, nombre, email, id } = responseData;

    localStorage.setItem('Token', token);

    const userData = { nombre, email, id };
    localStorage.setItem('UserData', JSON.stringify(userData));

    return { ok: true, token };
  } catch (error) {
    throw new Error('Error occurred during login');
  }
};
