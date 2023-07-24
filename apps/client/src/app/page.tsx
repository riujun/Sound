import Landing from '@/app/components/Landing';
import { useStore } from '@/app/store';

export default async function LandingPage() {
  useStore.setState({ name: 'PEPERONI' });

  return (
    <main>
      <Landing />
    </main>
  );
}
