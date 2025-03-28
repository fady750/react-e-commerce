import { updateProduct } from "../../services/apiCollection";

const descriptions = {
    productDetails:["Plain knit top with a V-neck and sleeveless design. Ribbed trims."],
    modalMeasurements : ["58% acrylic", "32% polyamide", "8% wool", "2% elastane"],
    mentalAndCare :["Hand wash at max. 30ºC/86ºF", "Do not use bleach", "Iron at a maximum of 110ºC/230ºF", "Do not dry clean", "Do not tumble dry"],
}

export async function updateShoes(){
    const obj = {"descriptions":descriptions};
    const data = await updateProduct(obj);
    console.log(data);
}
