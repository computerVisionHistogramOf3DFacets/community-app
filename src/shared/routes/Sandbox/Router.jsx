/**
 * Sandbox router.
 */

import CmsDasbhoardAnnouncements from
  'containers/sandbox/cms/dashboard/Announcements';
import Error404 from 'components/Error404';
import PT from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Payment from './payments';

export default function Router({ base }) {
  const paymentBase = `${base}/payments`;
  return (
    <Switch>
      <Route
        component={() => <Payment base={paymentBase} />}
        path={paymentBase}
      />
      <Route
        component={CmsDasbhoardAnnouncements}
        path={`${base}/cms/dashboard/announcements`}
      />
      <Error404 />
    </Switch>
  );
}

Router.propTypes = {
  base: PT.string.isRequired,
};
