import App from "./App"

//  when this component or a child component errors it calls the static method below
class ErrorBoundary extends App {
    state = { hasError: false }

    // this method updates the state of ErrorBoundary based on the error received
    static getDerivedStateFromError(error) {
        // is there an error or not
        return { hasError: true }
    }

    // errors are logged to the console (can be sent to a log file)
    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return "There is an error"
        }
        return this.props.children
    }
}

export default ErrorBoundary