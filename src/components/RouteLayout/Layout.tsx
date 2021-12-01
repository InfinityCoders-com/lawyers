import React, { Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import { Header, ShareHeader, Sidebar } from '../'
import { TOKEN_KEY } from '../../config/constants'
import { PortalDiv } from '../../style/styled'
import ErrorBoundary from '../../components/ErrorBoundary'
import { IRouteConfig } from '../../config/routes'
import { Flex } from '@chakra-ui/react'

function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY)
}
interface LayoutRoute extends IRouteConfig {
    component: any
}
  
export interface IAppLayout {
    route: LayoutRoute
    routesConfig: IRouteConfig[]
    menuOpen: boolean
    setMenuOpen: () => void
}
  

export const Layout: any = (props: IAppLayout) => {
  const { route, routesConfig, menuOpen, setMenuOpen } = props
  const RouteComponent: any = route.component
  const embed = new URL(document.location.href).searchParams.get('disableNav')
  console.log(route);
  
  return (
    <Flex direction="column" style={{ height: '100vh', overflow: 'hidden' }}>
      {route?.layout.includes('header') && <Header {...props} />}
      {route?.layout.includes('shareHeader') && <ShareHeader {...props} />}
      <Flex style={{ flexGrow: 1, overflow: 'hidden', position: 'relative' }}>
        {route.layout && route.layout.includes('sidebar') && (
          <Sidebar
            routes={routesConfig}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            paramsData={[]}
          />
        )}
        <PortalDiv
          embed={embed}
          hasSidebar={route.layout?.includes('sidebar')}
          menuOpen={menuOpen}
          sidebar={route.layout?.includes('sidebar')}
        >
          <ErrorBoundary>
            <RouteComponent
                config={route.config}
                routePath={route.path}
                {...props}
            />
          </ErrorBoundary>
        </PortalDiv>
      </Flex>
    </Flex>
  )
}
