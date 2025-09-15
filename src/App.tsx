import { LanguageProvider } from './components/LanguageProvider';
import { Header } from './components/Header';
import { TextAnalyzer } from './components/TextAnalyzer';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <div className="py-8 sm:py-12">
          <Header />
        </div>
        <main className="pb-8 sm:pb-12">
          <TextAnalyzer />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}