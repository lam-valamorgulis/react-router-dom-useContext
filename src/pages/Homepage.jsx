import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

// const HomePageChild = lazy(() =>
//   delayForDemo(import('../components/HomePageChild.jsx'))
// );

import HomePageChild from '../components/HomePageChild';

function Homepage() {
  return (
    <Suspense fallback={<Loading />}>
      <h1> this is a Homepage component</h1>
      <HomePageChild />
    </Suspense>
  );
}

export default Homepage;

// waiting 2s to dynamic import component
// function delayForDemo(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }
