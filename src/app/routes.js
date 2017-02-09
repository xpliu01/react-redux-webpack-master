import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

/*import App from './containers/AppN';
import FriendsView from './pages/FriendsView';
import NotFoundView from './components/NotFound';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={FriendsView} />
        <Route path="404" component={NotFoundView} />
        <Route path="*" component={NotFoundView} />
        <Redirect from="*" to="404" />
    </Route>
);*/

import App from './containers/App';
import NotFoundView from './components/NotFound';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Page1} />
        <Route path="page1" component={Page1}></Route>
        <Route path="page2" component={Page2}></Route>
        <Route path="page3" component={Page3}></Route>
        <Route path="404" component={NotFoundView} />
        <Redirect from="*" to="404" />
    </Route>
);
