import { createContext, useContext } from "react";
import { CheckCircleIcon, ClockIcon, TruckIcon, XCircleIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon, BanknotesIcon, TagIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

import {formatDate, formatCurrency} from "../utils/helpers" 

const orderContext = createContext();






const statusConfig = {
    pending: {
        icon: ClockIcon,
        color: "bg-yellow-100 text-yellow-600 border-yellow-200",
        label: "Pending",
    },
    processing: {
        icon: ArrowPathIcon,
        color: "bg-blue-100 text-blue-600 border-blue-200",
        label: "Processing",
    },
    shipped: {
        icon: TruckIcon,
        color: "bg-purple-100 text-purple-600 border-purple-200",
        label: "Shipped",
    },
    delivered: {
        icon: CheckCircleIcon,
        color: "bg-green-100 text-green-600 border-green-200",
        label: "Delivered",
    },
    cancelled: {
        icon: XCircleIcon,
        color: "bg-red-100 text-red-600 border-red-200",
        label: "Cancelled",
    },
};




function OrderCard({children, order}) {
    const {id, orderStatus, created_at, subTotal, discount, totalOrder, orderItems} = order
    return (
        <orderContext.Provider value={{id, orderStatus, created_at, subTotal, discount, totalOrder, orderItems}} >
            {children}
        </orderContext.Provider>
    )
}

function OrderContainer({children}){
    return(
        <div className=" w-fit bg-white shadow-md rounded-2xl p-5 transition hover:shadow-lg" >
            {children}
        </div>
    )
}

function OrderHeader(){
    const {id, orderStatus} = useContext(orderContext)
    return(
        <div className="flex justify-between items-center mb-3" >
            <h2 className="text-lg whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] font-semibold text-gray-800">Order 
                #{id}
            </h2>
            <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-medium `} >
                <OrderStatusCard status={statusConfig[orderStatus]} />
            </div>
        </div>
    )
}

function OrderStatusCard( {status} ) {
  const { icon: Icon, color, label } = status;

  return (
    <div className={`flex items-center justify-between rounded-2xl border p-2 shadow-sm ${color}`}>
      <div className="flex items-center gap-3">
        <Icon className="h-8 w-8" />
        <div>
          <p className="text-sm font-medium">{label}</p>
        </div>
      </div>
    </div>
  );
}

function OrderInfo(){
    const {created_at, subTotal, discount, totalOrder} = useContext(orderContext)
    return(
        <div className=" flex flex-col gap-4 my-3" >
            <div className="flex items-center justify-between" >
                <p className=" flex items-center gap-2"> 
                    <CalendarDaysIcon className="w-5" />
                    <span>
                        Order Date 
                    </span>
                </p>
                <p  >
                    <span className=" whitespace-nowrap w-fit text-xs" >
                        {formatDate(created_at)}
                    </span>
                </p>
            </div>
            <div className="flex items-center justify-between" >
                <p className="flex items-center gap-2" >
                    <BanknotesIcon className="w-5" />
                    <span>SubTotal</span>
                </p>
                <p>
                    {formatCurrency(subTotal)}
                </p>
            </div>
            <div className="flex items-center justify-between" >
                <p className="flex items-center gap-2" >
                    <TagIcon className="w-5" />
                    <span>Discount</span>
                </p>
                <p>
                    {formatCurrency(discount)}
                </p>
            </div>
            <div className="flex items-center justify-between" >
                <p className="flex items-center gap-2" >
                    <CurrencyDollarIcon className="w-5" />
                    <span>Total</span>
                </p>
                <p>
                    {formatCurrency(totalOrder)}
                </p>
            </div>
        </div>
    )
}
function OrderSummary(){
    const {orderItems} = useContext(orderContext)
    return(
        <div className=" flex flex-col gap-4 my-3">
            <p>Items</p>
            {orderItems.map((ele, idx)=>{
                return(
                    <div className="flex flex-col " key={idx} >
                        <p className="">
                            <span>PN: </span>
                            <span className="max-w-[30px] overflow-hidden  text-ellipsis" >{ele.productName}</span>
                        </p>
                        <p>
                            <span>Size: </span>
                            <span>{ele.orderSize}</span>
                        </p>
                        <p>
                            <span>Quantity: </span>
                            <span>{ele.quantity}</span>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}



OrderCard.OrderContainer = OrderContainer;
OrderCard.OrderHeader = OrderHeader;
OrderCard.OrderInfo = OrderInfo;
OrderCard.OrderSummary = OrderSummary;
export default OrderCard