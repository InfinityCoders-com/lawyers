import React, { ComponentType, ErrorInfo } from 'react'
import { ErrorBoundaryDiv } from '../style/styled'

interface IErrorBoundaryProps {
  children?: any
  FallbackComponent?: ComponentType<any>
  onError?: (error: Error, componentStack: string) => void
}
interface IState {
  error?: Error
  info?: ErrorInfo
}
class ErrorBoundary extends React.Component<IErrorBoundaryProps> {
  state: IState = {
    error: undefined,
    info: undefined
  }

  componentDidCatch(error: any, info: React.ErrorInfo) {
    this.setState({
      error,
      info
    })
  }

  render() {
    if (this.state.info) {
      return (
        <ErrorBoundaryDiv>
          <label>Something went wrong...</label>
        </ErrorBoundaryDiv>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
