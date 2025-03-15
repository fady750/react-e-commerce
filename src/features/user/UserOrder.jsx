import { formatCurrency, formatDate } from "../../utils/helpers"

function UserOrder({ele}) {
    return (
        <div className=" border-b-2 border-gray-400 pb-[30px] " > 
        <div className="text-xs my-3" >
            <span>Order created at: </span>
            <span>{formatDate(ele.created_at)}</span>
        </div>
        <div className="pr-4 md:pr-[32px] lg:pr-[50px mb-3]">
            {ele.orderItems.map((item)=>{
                return (
                    <div className="mb-3 w-full flex justify-between items-center border-b border-gray-300 pb-3" key={item.cart_id}> 
                        <span className=" space-x-2" >
                            <span>{item.productName}</span>
                            <span>{`(${item.orderSize})`}</span>
                            <span>x {item.quantity}</span>
                        </span>
                        <span>{formatCurrency(item.quantity * item.price)}</span>
                    </div>
                )
            })}
        </div>
        <div className="mb-3" >
            <p className="text-xs mb-1" >delivery Status: {ele.deliveryStatus}</p>
            <p className="mb-2" >Order Total : {formatCurrency(ele.totalCart)}</p>
            <p>Phone Number : {ele.phoneNumber}</p>
            <p className="max-w-[250px]">Address : {ele.address}</p>
        </div>
    </div>
    )
}

export default UserOrder
