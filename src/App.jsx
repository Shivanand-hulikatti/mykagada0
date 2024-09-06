import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ExamManagementLandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import DashBoard from './components/pages/DashBoard';
import CreateExam from './components/pages/CreateExam';
import SelectQuestions from './components/pages/SelectQuestions';
import AddedQuestions from './components/pages/AddedQuestions';
import Preview from './components/pages/Preview';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExamManagementLandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>} />
        <Route path="/exam" element={<ProtectedRoute><CreateExam /></ProtectedRoute>} />
        <Route path="/questions" element={<ProtectedRoute><SelectQuestions /></ProtectedRoute>} />
        <Route path="/addedQuestions" element={<ProtectedRoute><AddedQuestions /></ProtectedRoute>} />
        <Route path="/preview" element={<ProtectedRoute><Preview /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;