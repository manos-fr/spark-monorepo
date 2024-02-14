import { Slot } from 'expo-router';
import Header from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';

export default function AppLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
