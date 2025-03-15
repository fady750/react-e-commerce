import imgLogo from "../assets/1182903.svg"
function Logo({additionPropForClassName}) {
    return (
        <img src={imgLogo} alt="Logo" className={`${additionPropForClassName}`}/>
    )
}

export default Logo
// {`${additionPropForClassName}`}
// " w-[85px] h-[22px]"