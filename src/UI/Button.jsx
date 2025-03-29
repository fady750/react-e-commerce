function Button({children, type="button", classNameType = "primary", disabled = false, additionStyleProperty="", handleOnClick = ()=>{}}){
    const base = " transition-colors duration-300 border border-black "
    const style={
        primary: base + additionStyleProperty + " bg-white hover:bg-black text-gray-800 hover:text-gray-100 w-full sm:w-48   py-2 px-6  text-center text-xl sm:text-base ",
        FormButton: base + additionStyleProperty + " px-[30px] py-[18px] bg-black text-white hover:bg-white hover:text-black w-full uppercase ",
        disabled: base + " bg-gray-500 cursor-not-allowed w-full text-center text-xl sm:text-base px-[30px] py-[18px] text-white "
    }
    if(disabled){
        return (
            <button type={type} className={style.disabled} disabled  onClick={() => {}}> 
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
