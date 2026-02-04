import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import {
  LazyProjectsPage,
  LazyProjectDetailPage,
  LazyAwardWinningProjectDetailPage
} from './components/LazyComponents';
import { HelmetProvider } from 'react-helmet-async';

// Import your service pages
import ConsultationPage from './pages/Services/consultation';
import SpacePlanningPage from './pages/Services/spaceplanning';
import ThreeDVisualizationPage from './pages/Services/ThreeDVisualizationPage';
import BedroomDesignPage from './pages/Services/BedroomDesignPage';
import LivingRoomPage from './pages/Services/livingroom';
import MaterialSelectionPage from './pages/Services/materialselection';

const LoadingSpinner = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-voala-secondary"></div>
  </div>
);

function App() {

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white font-louis-george-cafe">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="/projects/:projectId"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyProjectDetailPage />
              </Suspense>
            }
          />
          <Route
            path="/award-winning-projects/:projectId"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyAwardWinningProjectDetailPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={<ContactUs />}
          />

          {/* Service Routes */}
          <Route path="/services/consultation" element={<ConsultationPage />} />
          <Route path="/services/space-planning" element={<SpacePlanningPage />} />
          <Route path="/services/3d-visualization" element={<ThreeDVisualizationPage />} />
          <Route path="/services/bedroom-design" element={<BedroomDesignPage />} />
          <Route path="/services/living-room-design" element={<LivingRoomPage />} />
          <Route path="/services/material-selection" element={<MaterialSelectionPage />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;