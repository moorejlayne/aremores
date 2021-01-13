import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { menuPagePaths, cabinRentalsPaths, familyPaths } from './paths';
import { Header } from './components/header/header';
import { AboutUs } from './pages/about-us/about-us';
import { PineLodge } from './pages/pine-lodge/pine-lodge';
import { PineCone } from './pages/pine-cone/pine-cone';
import { Reservations } from './pages/reservations/reservations';
import { Contact } from './pages/contact/contact';
import { isMobile } from 'react-device-detect';

import './app.less';
import { Explore } from './pages/explore/explore';
import { MembersLogin } from './pages/members-login/members-login';
import { Heidi } from './pages/heidi/heidi';
import { WeddingAnniversary } from './pages/wedding-anniversary/wedding-anniversary';
import { Monument } from './pages/monument/monument';

export const App = () => {
  return (
   <div className={ `aremores ${ isMobile ? ' mobile ' : ''}`}>
       <Header/>
       <Switch>
           <Route exact path={ `${menuPagePaths.aboutUs}` } component={ AboutUs } />
           <Route exact path={ `${cabinRentalsPaths.pineLodge}` } component={ PineLodge } />
           <Route exact path={ `${cabinRentalsPaths.pineCone}` } component={ PineCone } />
           <Route exact path={ `${cabinRentalsPaths.reservations}` } component={ Reservations } />
           <Route exact path={ `${menuPagePaths.explore}` } component={ Explore } />
           <Route exact path={ `${menuPagePaths.contact}` } component={ Contact } />
           <Route exact path={ `${familyPaths.membersLogin}` } component={ MembersLogin } />
           <Route exact path={ `${familyPaths.heidi}` } component={ Heidi } />
           <Route exact path={ `${familyPaths.weddingAnniversity}` } component={ WeddingAnniversary } />
           <Route exact path={ `${familyPaths.monument}` } component={ Monument } />
       </Switch>
       {/*<Footer/>*/}
   </div>
  );
}

// <button onClick={() => props.history.push('/pathName')}>Button Text</button>
// <Link to='pathName'>Link Text</Link>

// import { withRouter{ from 'react-router-dom';
// export default withRouter(MenuItem); // <-- gives us access to history

// nodemailer contact form (use env variables to protect credentials)
// embed Google / Bing API for location map