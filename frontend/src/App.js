import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import FirstPage from './screens/FirstPage/FirstPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import Profile from './screens/Profile/Profile';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import ViewClients from './screens/ViewClients/ViewClients';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<FirstPage />} exact />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/clients" element={<ViewClients />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
