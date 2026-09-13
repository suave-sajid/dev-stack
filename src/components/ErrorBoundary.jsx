import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="text-center text-red-500">
          Something went wrong while loading the technologies.
        </p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
