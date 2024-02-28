import { Slot } from 'expo-router';
import Header from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import TouchHandler from '../../components/TouchHandler';

export default function AppLayout() {
  return (
    <TouchHandler>
      <Header />
      <Slot />
      <Footer />
    </TouchHandler>
  );
}
