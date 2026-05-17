import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Layout
import MobileContainer from './components/layout/MobileContainer';

// Pages
import SplashScreen from './pages/SplashScreen';
import AuthScreen from './pages/AuthScreen';
import HomeDashboard from './pages/HomeDashboard';
import NearbyShifts from './pages/NearbyShifts';
import ShiftDetails from './pages/ShiftDetails';
import AcceptedShift from './pages/AcceptedShift';
import Earnings from './pages/Earnings';
import Notifications from './pages/Notifications';
import Compliance from './pages/Compliance';
import Profile from './pages/Profile';
import PastShifts from './pages/PastShifts';
import Settings from './pages/Settings';
import HelpSupport from './pages/HelpSupport';

// Animated Route Wrapper for smooth page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/auth" element={<AuthScreen />} />

        {/* Main App Routes */}
        <Route path="/home" element={<HomeDashboard />} />
        <Route path="/shifts" element={<NearbyShifts />} />
        <Route path="/shift/:id" element={<ShiftDetails />} />
        <Route path="/accepted" element={<AcceptedShift />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/past-shifts" element={<PastShifts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<HelpSupport />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MobileContainer>
          <AnimatedRoutes />
        </MobileContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;

