// import { ReactNode } from 'react'
import { ReactNode } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import LayoutIndex from '@/layout'
import Dashboard from '@/view/dashboard'
import Projects from '@/view/projects'

type AuthTokenComponentsProps = {
  children: ReactNode
}

export const AuthTokenComponents = ({ children }: AuthTokenComponentsProps) => {
  return children
}

const IndexRouter = () => {
  //   const { AuthToken } = LoginPersistStore.getState()
  return <Navigate to='/dashboard' replace />
}

const router = createBrowserRouter([
  { path: '/', element: <IndexRouter /> },

  { path: '*', element: <div>404</div> },
  {
    path: '/',
    element: (
      <AuthTokenComponents>
        <LayoutIndex />
      </AuthTokenComponents>
    ),
    children: [
      {
        path: 'dashboard',
        element: (
          <AuthTokenComponents>
            <Dashboard />
          </AuthTokenComponents>
        )
      },
      {
        path: 'project',
        element: (
          <AuthTokenComponents>
            <Projects />
          </AuthTokenComponents>
        )
      }
    ]
  }
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
