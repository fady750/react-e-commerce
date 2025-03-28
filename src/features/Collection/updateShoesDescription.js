import { updateProduct } from "../../services/apiCollection";

const descriptions = [{productDetails:["Shoes and outdoor shoes take your workout into the world", "Whether you're not really a gym fan or you just want to spend some time in nature while getting fit, finding the right pair of shoes is one of the most important factors. outdoor walking boot"]}]

export async function updateShoes(){
    const obj = {"descriptions":descriptions};
    const data = await updateProduct(obj);
    console.log(data);
}