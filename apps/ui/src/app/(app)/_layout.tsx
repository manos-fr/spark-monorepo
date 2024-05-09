import { Slot } from 'expo-router';
import { Footer } from '../../components/layout/Footer';

export default function AppLayout() {
  return (
    <>
      <Slot />
      <Footer />
    </>
  );
}
