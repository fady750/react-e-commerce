function InputFiled({children, error=""}) {
    console.log(error);
    return (
        <div className=" flex flex-col space-y-2 text-left" >
            {children}
            {error && <p className="text-red-600 text-sm my-1 text-left ml-1">{error}</p>}
        </div>
    )
}

export default InputFiled
