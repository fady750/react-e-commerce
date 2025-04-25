export const optionsSort=[
    { value: "created_at-desc", label: "Sort by date (recent first)"},
    { value: "created_at-asc", label: "Sort by date (earlier first)" },
    {
        value: "price-desc",
        label: "Sort by amount (high first)",
    },
    { value: "price-asc", label: "Sort by amount (low first)" },
    {
        value:"productName-asc", label:"Alphabetically, A-Z"
    },
    {
        value:"productName-desc", label:"Alphabetically, Z-A"
    },
]

export const optionForEveryCollectionFilter = {
    "hoodies-sweathirts":[
        {value:"all",label:"All"}, 
        {value:"hoodies", label:"hoodies"}, 
        {value:"sweathirts", label:"sweathirts"}
    ],
    "polo":[
        {value:"all",label:"All"}, 
        {value:"polos", label:"polos"}
    ],
    "t-shirt":[
        {value:"all",label:"All"}, 
        {value:"t-shirts", label:"t-shirts"}
    ],
    "shirt":[
        {value:"all",label:"All"}, 
        {value:"shirts", label:"shirts"}
    ],
    "denim":[
        {value:"all",label:"All"}, 
        {value:"denim", label:"denim"}, 
        {value:"jeans", label:"jeans"}, 
        {value:"chinos", label:"chinos"}
    ],
    "jackets": [
      {value:"all",label:"All"}, 
      {value:"Coat's & Jackets", label:"Coat's & Jackets"}
    ],
    "pullover" : [
      {value:"all",label:"All"}, 
      {value:"sweaters", label:"sweaters"}
    ],
    "shoes" : [
      {value:"all",label:"All"}, 
      {value:"shoes", label:"shoes"}
    ],
    "cardigans-sweaters" :[
      {value:"all",label:"All"}, 
      {value:"cardigans", label:"cardigans"}, 
      {value:"sweaters", label:"sweaters"}, 
      {value:"jumpers", label:"jumpers"}, 
      {value:"Puffers", label:"Puffers"}, 
      {value:"Vests", label:"Vests"}
    ],
    "woman-jackets" : [
      {value:"all",label:"All"}, 
      {value:"denim", label:"denim"},  
      {value:"Jackets", label:"Jackets"}, 
      {value:"Varsity Jackets", label:"Varsity Jackets"}, 
      {value:"Coats", label:"Coats"}, 
      {value:"Bomber Jackets", label:"Bomber Jackets"}, 
      {value:"Track Jackets", label:"Track Jackets"}, 
      {value:"Windbreakers", label:"Windbreakers"}
    ],
    "woman-blazers" : [
      {value:"all",label:"All"}, 
      {value:"waist-coats", label:"waist-coats"}
    ],
    "women-dresses" : [
      {value:"all",label:"All"}, 
      {value:"maxi dresses", label:"maxi dresses"}, 
      {value:"mini dresses", label:"mini dresses"}
    ],
    "women-bottoms" : [
      {value:"all",label:"All"}, 
      {value:"pants", label:"pants"}, 
      {value:"shorts", label:"shorts"}, 
      {value:"mini skirts", label:"mini skirts"}, 
      {value:"track pants", label:"track pants"}, 
      {value:"maxi skirts", label:"maxi skirts"}, 
      {value:"sweatpants", label:"sweatpants"}, 
      {value:"active shorts", label:"active shorts"}
    ],
    "woman-top" : [
      {value:"all",label:"All"}, 
      {value:"hoodies", label:"hoodies"}, 
      {value:"short sleeve tees", label:"short sleeve tees"}, 
      {value:"long sleeve tops", label:"long sleeve tops"}, 
      {value:"jerseys", label:"jerseys"}, 
      {value:"quarter zips", label:"quarter zips"}, 
      {value:"crewnecks", label:"crewnecks"}, 
      {value:"crewneck sweaters", label:"crewneck sweaters"}, 
      {value:"long sleeve tees", label:"long sleeve tees"}
    ],
    "hoodies-sweatshirt-menzo" : [ 
      {value:"all",label:"All"}, 
      {value:"sweatshirts", label:"sweatshirts"} 
    ],
    "shirt-menzo" : [
      {value:"all",label:"All"}, 
      {value:"shirts", label:"shirts"}
    ],
    "denim-menzo" : [
      {value:"all",label:"All"}, 
      {value:"denim", label:"denim"}
    ],
}

export const typeForEveryCollectionImageSlider =[
    { imagePath: "hoodies-sweathirts.webp", collectionUrl:"hoodies-sweathirts", collectionName:"Hoodies Sweathirts"},
    { imagePath: "polo.webp", collectionUrl:"polo", collectionName:"Polo" },
    { imagePath: "t-shirt.webp", collectionUrl:"t-shirt", collectionName:"T-Shirt"}, 
    { imagePath: "cardigans-sweater.avif", collectionUrl:"cardigans-sweaters",collectionName:"Cardigans Sweaters"}, 
    { imagePath:"woman-jackets.jpg", collectionUrl:"woman-jackets", collectionName:"Woman Jackets"}, 
    { imagePath:"women-bottoms.webp", collectionUrl:"women-bottoms", collectionName:"Women Bottoms"},
    { imagePath:"woman-top.jpg", collectionUrl:"woman-top", collectionName:"Woman Top"}, 
    { imagePath:"shirt.webp", collectionUrl:"shirt", collectionName:"Shirt"}, 
    { imagePath:"denim.webp", collectionUrl:"denim", collectionName:"Denim"}, 
    { imagePath:"jackets.webp", collectionUrl:"jackets", collectionName:"Jackets"}, 
    { imagePath:"pullover.jpg", collectionUrl:"pullover", collectionName:"Pullover"}, 
    { imagePath:"shoes.jpg", collectionUrl:"shoes", collectionName:"Shoes"},
    { imagePath:"woman-blazers.avif", collectionUrl:"woman-blazers", collectionName:"Woman Blazers"}, 
    { imagePath:"women-dresses.avif", collectionUrl:"women-dresses", collectionName:"Women Dresses"}, 
    { imagePath:"shirt-menzo.webp", collectionUrl:"shirt-menzo", collectionName:"Shirt Menzo"}, 
    { imagePath:"denim-menzo.jpg", collectionUrl:"denim-menzo",collectionName:"Denim Menzo"}

]

export const typeForEveryCollectionPage = [
    { imagePath: "hoodies-sweathirts.webp", collectionUrl:"hoodies-sweathirts", collectionName:"Hoodies Sweathirts"},
    { imagePath: "polo-collectionPage.webp", collectionUrl:"polo", collectionName:"Polo" },
    { imagePath: "t-shirt-collectionPage.webp", collectionUrl:"t-shirt", collectionName:"T-Shirt"}, 
    { imagePath:"shirt-collectionPage.webp", collectionUrl:"shirt", collectionName:"Shirt"}, 
    { imagePath:"denim.webp", collectionUrl:"denim", collectionName:"Denim"}, 
    { imagePath:"jacket-collectionPage.webp", collectionUrl:"jackets", collectionName:"Jackets"}, 
    { imagePath:"pullover-collectionPage.webp", collectionUrl:"pullover", collectionName:"Pullover"}, 
    { imagePath:"shoes.jpg", collectionUrl:"shoes", collectionName:"Shoes"},
    { imagePath: "cardigans-sweater-collectionPage.webp", collectionUrl:"cardigans-sweaters",collectionName:"Cardigans Sweaters"}, 
    { imagePath:"woman-jackets-collectionPage.jpg", collectionUrl:"woman-jackets", collectionName:"Woman Jackets"}, 
    
    { imagePath:"woman-blazers-collectionPage.jpg", collectionUrl:"woman-blazers", collectionName:"Woman Blazers"}, 
    { imagePath:"women-dresses-collectionPage.jpg", collectionUrl:"women-dresses", collectionName:"Women Dresses"}, 
    { imagePath:"women-bottoms-collectionPage.webp", collectionUrl:"women-bottoms", collectionName:"Women Bottoms"},
    { imagePath:"woman-top-collectionPage.webp", collectionUrl:"woman-top", collectionName:"Woman Top"}, 
    { imagePath:"shirt-menzo-collectionPage.webp", collectionUrl:"shirt-menzo", collectionName:"Shirt Menzo"}, 
    { imagePath:"denim-menzo.jpg", collectionUrl:"denim-menzo",collectionName:"Denim Menzo"}
]


export const typeForEveryCollection = {
  "hoodiesSweathirts":["hoodies", "sweathirts"],
  "polo":["polos"],
  "t-shirt":["t-shirts"],
  "shirt":["shirts"],
  "denim":["denim", "jeans", "chinos"],
  "jackets": ["Coat's & Jackets"],
  "pullover" : ["sweaters"],
  "shoes" : ["shoes"],
  "cardigans-sweaters" :["cardigans", "sweaters", "jumpers", "Puffers", "Vests"],
  "woman-jackets" : [" denim",  "Jackets", "Varsity Jackets", "Coats","Bomber Jackets", "Track Jackets", "Windbreakers"],
  "woman-blazers" : [" waist-coats"],
  "women-dresses" : [" maxi dresses ", "mini dresses"],
  "women-bottoms" : ["pants", "shorts", "mini skirts", "track pants", "maxi skirts", "sweatpants", "active shorts"],
  "woman-top"     : ["hoodies", "short sleeve tees", "long sleeve tops", "jerseys", "quarter zips", "crewnecks", "crewneck sweaters", "long sleeve tees" ],
  "hoodies-sweatshirt-menzo" : [ "sweatshirts" ],
  "shirt-menzo" : ["shirts"] ,
  "denim-menzo" : [ "denim" ],
}