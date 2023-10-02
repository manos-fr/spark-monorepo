import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Slot />
      <Footer />
    </QueryClientProvider>
  );
}
