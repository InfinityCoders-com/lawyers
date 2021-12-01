import React, { ComponentType, ErrorInfo } from 'react'
import { ErrorBoundaryDiv } from '../style/styled'

interface IErrorBoundaryProps {
  children?: any
  FallbackComponent: ComponentType<any>
  onError?: (error: Error, componentStack: string) => void
}
interface IState {
  error?: Error
  info?: ErrorInfo
}
class ErrorBoundary extends React.Component {
  state: IState = {
    error: undefined,
    info: undefined
  }

  componentDidCatch(error: any, info: React.ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      info
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.info) {
      console.log('ErrorBoundary');
    // Error path
      return (
        <ErrorBoundaryDiv>
          <label>Something went wrong...</label>
        </ErrorBoundaryDiv>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}
export default ErrorBoundary
