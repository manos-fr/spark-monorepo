import { Slot } from 'expo-router';
import { Footer } from '../../components/layout/Footer';
// import TouchHandler from '../../components/TouchHandler';

export default function AppLayout() {
  return (
    <>
      <Slot />
      <Footer />
    </>
  );
}
