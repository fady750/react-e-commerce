


function WishlistTable() {
    return (
        <div className="mb-[56px] px-4 md:px-8 lg:px-[80px] flex flex-col " >
            <table className="w-full mb-6">
                <thead>
                    <tr className=" border-b-2 border-t-2 border-gray-200">
                        <th className="font-normal hidden md:table-cell text-left md:text-center py-2 px-1 w-72">Product Image</th>
                        <th className="font-normal hidden md:table-cell text-left md:text-center py-2 px-1 w-72">Product Name</th>
                        <th className="font-normal text-left md:text-center py-2 px-1 w-72 md:hidden">Product Details</th>
                        <th className="font-normal py-2 ">Unit Price</th>
                        <th className="font-normal py-2 hidden sm:table-cell max-w-xs">Add </th>
                        <th className="font-normal py-2 hidden sm:table-cell whitespace-nowrap text-right w-10">Remove</th>
                        <th className="font-normal py-2 sm:hidden  text-right w-10">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlist.map((ele, idx)=>{return (<WishlistRow item={ele} key={idx}/>)})}
                </tbody>
            </table>
                
                

            <Button additionStyleProperty=" w-full sm:w-48 " >Clear Wishlist</Button>
            </div>
    )
}

export default WishlistTable
        // <main className="" >

        //     <div className="mb-[56px] px-4 md:px-8 lg:px-[80px] flex flex-col " >
                
        //         <table className="w-full mb-6">
        //             <thead>
        //                 <tr className=" border-b-2 border-t-2 border-gray-200">
        //                     <th className="font-normal hidden md:table-cell text-left md:text-center py-2 px-1 w-72">Product Image</th>
        //                     <th className="font-normal hidden md:table-cell text-left md:text-center py-2 px-1 w-72">Product Name</th>
        //                     <th className="font-normal text-left md:text-center py-2 px-1 w-72 md:hidden">Product Details</th>
        //                     <th className="font-normal py-2 ">Unit Price</th>
        //                     <th className="font-normal py-2 hidden sm:table-cell max-w-xs">Add </th>
        //                     <th className="font-normal py-2 hidden sm:table-cell whitespace-nowrap text-right w-10">Remove</th>
        //                     <th className="font-normal py-2 sm:hidden  text-right w-10">Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {wishlist.map((ele, idx)=>{return (<WishlistItem item={ele} key={idx}/>)})}
        //             </tbody>
        //         </table>
                
                

        //         <Button additionStyleProperty=" w-full sm:w-48 " handleOnClick={handleClearWishlist} >Clear Wishlist</Button>
        //     </div>
        // <main>