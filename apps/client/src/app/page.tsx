import { getServerSession } from 'next-auth';

import Landing from '@/app/components/Landing';
import { authOptions } from '@/app/components/utils/authOptions';
import { useStore } from '@/app/store';

export default async function LandingPage() {
  useStore.setState({ name: 'PEPERONI' });
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main>
      <Landing />
    </main>
  );
}
