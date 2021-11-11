import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './components/HeaderNav';
import ViewProfile from './components/ViewProfile';
import ViewClients from './components/ViewClients';

function App() {
  return (
    <>
      <HeaderNav />
      <ViewProfile />
      <ViewClients />
    </>
  );
}

export default App;
