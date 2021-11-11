import HeaderNav from './HeaderNav';
import ViewProfile from './ViewProfile';
import ViewClients from './ViewClients';

function MainHome() {
  return (
    <div>
      <HeaderNav />
      <ViewProfile />
      <ViewClients />
    </div>
  );
}

export default MainHome;
