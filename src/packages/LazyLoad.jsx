import React, { lazy, Suspense }  from 'react'

const SampleComponent = lazy(() => import('../components/SampleComponent'))

function LazyLoad() {
  return (
    <div>
        <h1>Welcome to my app</h1>
        <Suspense fallback={<div>Loading....</div>}><Suspense/>
        <SampleComponent></SampleComponent>
        </Suspense>
    </div>
  )
}

export default LazyLoad