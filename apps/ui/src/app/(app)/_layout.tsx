import { Redirect, Slot } from 'expo-router';
import Header from '../../layout/Header';
import { Footer } from '../../layout/Footer';

// import { useSession } from '../../ctx';

export default function AppLayout() {
  // const { session, isLoading } = useSession();
  const session = false;

  // You can keep the splash screen open, or render a loading screen like we do here.
  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    // TODO return <Redirect href="/signin" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <>
      <Header />
      <Slot />;
      <Footer />
    </>
  );
}
