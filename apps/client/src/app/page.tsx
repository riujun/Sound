
import { useStore } from '@/app/store';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/components/utils/authOptions';
import Landing from '@/app/components/Landing';

export default async function Home() {
  useStore.setState({ name: 'PEPERONI' });
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main>
      <Landing />
    </main>
  );
}
