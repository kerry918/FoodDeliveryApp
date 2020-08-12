import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

// import MuiTheme from './theme';

// Layout Blueprints

// import { PresentationLayout } from './layout-blueprints';

// Example Pages

// import Buttons from './example-pages/Buttons';
// import Dropdowns from './example-pages/Dropdowns';
// import NavigationMenus from './example-pages/NavigationMenus';
// import ProgressBars from './example-pages/ProgressBars';
// import Pagination from './example-pages/Pagination';
// import Scrollable from './example-pages/Scrollable';
// import Badges from './example-pages/Badges';
// import Icons from './example-pages/Icons';
// import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
// import RegularTables1 from './example-pages/RegularTables1';
// import RegularTables4 from './example-pages/RegularTables4';
// import FormsControls from './example-pages/FormsControls';
import utilities from './pages/utilities'; 
// const ListGroups = lazy(() => import('./example-pages/ListGroups'));
// const Accordions = lazy(() => import('./example-pages/Accordions'));
// const Modals = lazy(() => import('./example-pages/Modals'));
// const Notifications = lazy(() => import('./example-pages/Notifications'));
// const Carousels = lazy(() => import('./example-pages/Carousels'));
// const Popovers = lazy(() => import('./example-pages/Popovers'));
// const Tabs = lazy(() => import('./example-pages/Tabs'));
// const Cards3 = lazy(() => import('./example-pages/Cards3'));
// const LandingPage = lazy(() => import('./example-pages/LandingPage'));
// const Maps = lazy(() => import('./example-pages/Maps'));
// const ApexCharts = lazy(() => import('./example-pages/ApexCharts'));

const Routes = () => {
//   const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    // <ThemeProvider theme={MuiTheme}>
    //   <AnimatePresence>
    //     <Suspense
    //       fallback={
    //         <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
    //           <div className="w-50 mx-auto">
    //             Please wait while we load the live preview examples
    //           </div>
    //         </div>
    //       }>
          <Switch>
            <Redirect exact from="/" to="/LandingPage" />
            <Route path="/utilities" component={utilities}/>
            <Route
              path={[
                // '/Buttons',
                // '/Dropdowns',
                // '/NavigationMenus',
                // '/ProgressBars',
                // '/Pagination',
                // '/Scrollable',
                // '/Badges',
                // '/Icons',
                // '/UtilitiesHelpers',
                // '/ListGroups',
                // '/Accordions',
                // '/Modals',
                // '/Notifications',
                // '/Carousels',
                // '/Popovers',
                // '/Tabs',
                // '/Cards3',
                // '/LandingPage',
                // '/RegularTables1',
                // '/RegularTables4',
                // '/FormsControls',
                // '/Maps',
                // '/ApexCharts'
                '/utilities'
              ]}>
              {/* <PresentationLayout> */}
                {/* <Switch location={location} key={location.pathname}> */}
                <Switch>
                  {/* <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/Buttons" component={Buttons} />
                    <Route path="/Dropdowns" component={Dropdowns} />
                    <Route
                      path="/NavigationMenus"
                      component={NavigationMenus}
                    /> */}
                    {/* <Route path="/ProgressBars" component={ProgressBars} />
                    <Route path="/Pagination" component={Pagination} />
                    <Route path="/Scrollable" component={Scrollable} />
                    <Route path="/Badges" component={Badges} />
                    <Route path="/Icons" component={Icons} />
                    <Route
                      path="/UtilitiesHelpers"
                      component={UtilitiesHelpers}
                    />
                    <Route path="/ListGroups" component={ListGroups} />
                    <Route path="/Accordions" component={Accordions} />
                    <Route path="/Modals" component={Modals} />
                    <Route path="/Notifications" component={Notifications} />
                    <Route path="/Carousels" component={Carousels} />
                    <Route path="/Popovers" component={Popovers} />
                    <Route path="/Tabs" component={Tabs} />
                    <Route path="/Cards3" component={Cards3} />
                    <Route path="/LandingPage" component={LandingPage} />
                    <Route path="/RegularTables1" component={RegularTables1} />
                    <Route path="/RegularTables4" component={RegularTables4} />
                    <Route path="/FormsControls" component={FormsControls} />
                    <Route path="/Maps" component={Maps} />
                    <Route path="/ApexCharts" component={ApexCharts} /> */}
                    
                  {/* </motion.div> */}
                </Switch>
              {/* </PresentationLayout> */}
            </Route>
          </Switch>
    //     </Suspense>
    //   </AnimatePresence>
    // </ThemeProvider>
  );
};

export default Routes;
