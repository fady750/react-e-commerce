import Button from "./Button"

function ErrorFallback({error, resetErrorBoundary}) {
    return (
        <div className=" h-screen bg-gray-50 flex items-center justify-center p-[48px]" >
            <div className="bg-white border border-gray-100 p-[48px] text-center" >
                <h1 className="mb-4" >Something went wrong</h1>
                <p className="mb-8 text-gray-500" >{error.message}</p>
                <Button handleOnClick={resetErrorBoundary} >Try again</Button>
            </div>
        </div>
    )
}

export default ErrorFallback


