function InputFiled({children, error="", id, Label}) {
    return (
        <div className=" flex flex-col space-y-2 text-left" >
            <label htmlFor={id} > {Label} </label>
            {children}
            {error && <p className="text-red-600 text-sm my-1 text-left ml-1">{error}</p>}
        </div>
    )
}

export default InputFiled
