import { lazy } from 'react';

// Lazy load components that are not immediately visible
export const LazyAboutSection = lazy(() => import('./AboutSection'));
export const LazySignatureProjects = lazy(() => import('./SignatureProjects'));
export const LazyTestimonialCarousel = lazy(() => import('./TestimonialCarousel'));
export const LazyCallUsNowCTA = lazy(() => import('./CallUsNowCTA'));
export const LazyRecognitionGrid = lazy(() => import('./RecognitionGrid'));
export const LazyFooter = lazy(() => import('./Footer'));
export const LazyProjectsPage = lazy(() => import('../pages/ProjectsPage'));
export const LazyProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'));
export const LazyAwardWinningProjectDetailPage = lazy(() => import('../pages/AwardWinningProjectDetailPage'));