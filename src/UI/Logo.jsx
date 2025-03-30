import { Link } from "react-router"
import imgLogo from "../assets/1182903.svg"
function Logo({additionPropForClassName}) {
    return (
        <Link to="/" >
            <img src={imgLogo} alt="Logo" className={`${additionPropForClassName}`}/>
        </Link>
    )
}

export default Logo
// {`${additionPropForClassName}`}
// " w-[85px] h-[22px]"