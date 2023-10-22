import { Slot } from 'expo-router';
import Header from '../../layout/Header';
import { Footer } from '../../layout/Footer';

export default function AppLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
