import { Routes } from '@constants/constants'
import Error from '@pages/error/Error.page'
import { createBrowserRouter } from 'react-router-dom'

export const REACT_ROUTER = createBrowserRouter([
  {
    path: Routes.DEFAULT_ROUTE,
    async lazy() {
      return { Component: (await import('@pages/home/Home.page')).default }
    },
    errorElement: <Error />,
  },
])
