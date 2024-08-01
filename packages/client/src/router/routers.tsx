// import { ReactNode } from 'react'
import { ReactNode } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import LayoutIndex from '@/layout'
import { LoginPersistStore } from '@/store/loginStore/loginStore'
import ProjectRouterComponents from '@/view/baseRouterComponents/projectRouterComponents'
import Dashboard from '@/view/dashboard'
import InstanceIndex from '@/view/instance'
import LoginIndex from '@/view/login/login'
import Projects from '@/view/projects'

type AuthTokenComponentsProps = {
  children: ReactNode
}

export const AuthTokenComponents = ({ children }: AuthTokenComponentsProps) => {
  const { AuthToken } = LoginPersistStore.getState()

  return AuthToken ? children : <Navigate to='/login' replace />
}

const IndexRouter = () => {
  const { AuthToken } = LoginPersistStore.getState()
  return AuthToken ? <Navigate to='/project' replace /> : <Navigate to='/login' replace />
}

const router = createBrowserRouter([
  { path: '/', element: <IndexRouter /> },
  { path: '/login', element: <LoginIndex /> },
  {
    path: '/',
    element: (
      <AuthTokenComponents>
        <LayoutIndex />
      </AuthTokenComponents>
    ),
    children: [
      {
        path: 'project',
        element: (
          <AuthTokenComponents>
            <ProjectRouterComponents />
          </AuthTokenComponents>
        ),
        children: [
          {
            index: true,
            element: (
              <AuthTokenComponents>
                <Projects />
              </AuthTokenComponents>
            )
          },
          {
            path: 'instance',
            element: (
              <AuthTokenComponents>
                <InstanceIndex />
              </AuthTokenComponents>
            )
          }
        ]
      },
      {
        path: 'dashboard',
        element: (
          <AuthTokenComponents>
            <Dashboard />
          </AuthTokenComponents>
        )
      }
    ]
  },
  { path: '*', element: <div>404</div> }
])

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes
