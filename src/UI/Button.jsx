function Button({children, type="button", classNameType = "primary", disabled = false, additionStyleProperty="", handleOnClick = ()=>{}}){
    const base = " transition-colors duration-300 border border-black "
    const style={
        primary: base + additionStyleProperty + " bg-white hover:bg-black text-gray-800 hover:text-gray-100 w-full sm:w-48 transition-colors duration-500 py-2 px-6 border text-center text-xl sm:text-base ",
        FormButton: base + additionStyleProperty + " px-[30px] py-[18px] bg-black text-white hover:bg-white hover:text-black w-full uppercase ",
    }
    if(disabled){
        return (
            <button type={type} className={style[classNameType] + " cursor-wait "}  onClick={() => {}}> 
                {children}
            </button>
        )
    }
    return (
        <button type={type} className={style[classNameType]} onClick={handleOnClick} > 
            {children}
        </button>
    )
}

export default Button
