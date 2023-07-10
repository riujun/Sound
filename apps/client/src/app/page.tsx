import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/components/utils/authOptions';

import Landing from './components/Landing';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main>
      <Landing />
    </main>
  );
}
