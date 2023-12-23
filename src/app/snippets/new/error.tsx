"use client"

interface ErrorPageProps {
    error: Error
    reset: () => void
}

const ErrorPage = ({ error}:ErrorPageProps) => {

    return (
        <section>
            <h1>Something went wrong</h1>
            <p>Try again later</p>
            <span>{error.message}</span>
        </section>
    )
}

export default ErrorPage