import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { menuCategoryPaths, cabinRentalsPaths, familyPaths } from './paths';
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
       <Header />
       <Switch>
           <Route exact path={ '/' } > <Redirect to='/aremores' /> </Route>
           <Route exact path={ `${menuCategoryPaths.aboutUs}` } component={ AboutUs } />
           <Route exact path={ `${cabinRentalsPaths.pineLodge}` } component={ PineLodge } />
           <Route exact path={ `${cabinRentalsPaths.pineCone}` } component={ PineCone } />
           <Route exact path={ `${cabinRentalsPaths.reservations}` } component={ Reservations } />
           <Route exact path={ `${menuCategoryPaths.explore}` } component={ Explore } />
           <Route exact path={ `${menuCategoryPaths.contact}` } component={ Contact } />
           <Route exact path={ `${familyPaths.membersLogin}` } component={ MembersLogin } />
           <Route exact path={ `${familyPaths.heidi}` } component={ Heidi } />
           <Route exact path={ `${familyPaths.weddingAnniversity}` } component={ WeddingAnniversary } />
           <Route exact path={ `${familyPaths.monument}` } component={ Monument } />
       </Switch>
       {/*<Footer/>*/}
   </div>
  );
}

// nodemailer contact form (use env variables to protect credentials)
// embed Google / Bing API for location map