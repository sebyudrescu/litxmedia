import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ChatbotAIPage = lazy(() => import('./pages/ChatbotAIPage'));
const SitiWebPage = lazy(() => import('./pages/SitiWebPage'));
const GoogleReviewsPage = lazy(() => import('./pages/GoogleReviewsPage'));
const DatabaseReactivationPage = lazy(() => import('./pages/DatabaseReactivationPage'));
const AutomazioniPersonalizzatePage = lazy(() => import('./pages/AutomazioniPersonalizzatePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'servizi',
        element: (
          <Suspense fallback={<Loading />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: 'servizi/chatbot-ai',
        element: (
          <Suspense fallback={<Loading />}>
            <ChatbotAIPage />
          </Suspense>
        ),
      },
      {
        path: 'servizi/siti-web-professionali',
        element: (
          <Suspense fallback={<Loading />}>
            <SitiWebPage />
          </Suspense>
        ),
      },
      {
        path: 'servizi/google-review-automation',
        element: (
          <Suspense fallback={<Loading />}>
            <GoogleReviewsPage />
          </Suspense>
        ),
      },
      {
        path: 'servizi/database-reactivation',
        element: (
          <Suspense fallback={<Loading />}>
            <DatabaseReactivationPage />
          </Suspense>
        ),
      },
      {
        path: 'servizi/automazioni-personalizzate',
        element: (
          <Suspense fallback={<Loading />}>
            <AutomazioniPersonalizzatePage />
          </Suspense>
        ),
      },
      {
        path: 'servizi/:slug',
        element: (
          <Suspense fallback={<Loading />}>
            <ServiceDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loading />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'portfolio',
        element: (
          <Suspense fallback={<Loading />}>
            <PortfolioPage />
          </Suspense>
        ),
      },
      {
        path: 'portfolio/:slug',
        element: (
          <Suspense fallback={<Loading />}>
            <CaseStudyDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'contatti',
        element: (
          <Suspense fallback={<Loading />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: 'privacy-policy',
        element: (
          <Suspense fallback={<Loading />}>
            <PrivacyPolicyPage />
          </Suspense>
        ),
      },
      {
        path: 'cookie-policy',
        element: (
          <Suspense fallback={<Loading />}>
            <CookiePolicyPage />
          </Suspense>
        ),
      },
      {
        path: 'termini-servizio',
        element: (
          <Suspense fallback={<Loading />}>
            <TermsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}