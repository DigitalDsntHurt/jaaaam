import { Component } from 'react';

// Class component because error boundaries have no hook equivalent in React.
// Styled with inline styles/hardcoded colors rather than the site's own
// classes/Tidepool tokens — this is the last line of defense when something
// has gone wrong, so it shouldn't depend on any other part of the app (CSS
// included) having loaded correctly.
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('Uncaught error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    alignItems: 'center',
                    background: '#24373D',
                    color: '#F6F1E7',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: '-apple-system, "Helvetica Neue", Arial, sans-serif',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    padding: '4vh 8vw',
                    textAlign: 'center',
                }}>
                    <h1>Something went wrong.</h1>
                    <p>
                        Please try refreshing the page, or{' '}
                        <a href='/' style={{ color: '#F2B84B' }}>head back home</a>.
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
