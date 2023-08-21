import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [
        {
            name:"Anyday Rain Boot in Black",
            thumbnail: "https://thesusoutdoors.com/cdn/shop/files/sustainable-rainboot_2cbf1511-cf01-462d-bf56-6187d957cac8.png?v=1686555865&width=1100",
            hoverThumbnail: "https://thesusoutdoors.com/cdn/shop/files/city-essential-rainboot_8b0e78cb-0fe3-4c7d-87d4-c0e9d9f83219.png?v=1688741727&width=1100",
            images: [
                "https://thesusoutdoors.com/cdn/shop/files/sustainable-rainboot_2cbf1511-cf01-462d-bf56-6187d957cac8.png?v=1686555865&width=1100",
                "https://thesusoutdoors.com/cdn/shop/files/Frame1234.png?v=1688741727&width=1100",
                "https://thesusoutdoors.com/cdn/shop/files/city-essential-rainboot_8b0e78cb-0fe3-4c7d-87d4-c0e9d9f83219.png?v=1688741727&width=1100",
                "https://thesusoutdoors.com/cdn/shop/files/ethical-rainboot_f98637b1-40f8-4e4c-a0f5-f7a7b84f550a.png?v=1688741727&width=1100"
            ],
            sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
            price: 17800,
            category: {
              Rain: true,
              all: true,  
            },
            quantity: 5,
            inStock: true
        },
        {
            name:"The Marlin Weekend Boot",
            thumbnail: "https://thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot_e4d5d120-eaca-4dab-bc74-446edd6aa32d.png?v=1686595953&width=493",
            hoverThumbnail: "https://thesusoutdoors.com/cdn/shop/files/marlin-lifestyle.png?v=1686752410&width=493",
            images: [
                "https://thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot_e4d5d120-eaca-4dab-bc74-446edd6aa32d.png?v=1686595953&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/marlin-lifestyle.png?v=1686752410&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/blue-comfy-hiking-boot.png?v=1686752410&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/blue-hiking-boot-thesus.png?v=1686752410&width=493"
            ],
            sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
            price: 16800,
            category: {
              Weekend: true,
              Bestsellers: true,
              all: true,
            },
            quantity: 5,
            inStock: true
        },
        {
            name:"The Terrus in Sage",
            thumbnail: "https://thesusoutdoors.com/cdn/shop/files/sage-green-sustainable-clog_f73f8700-6b47-4005-bbea-04538836a261.png?v=1686598924&width=493",
            hoverThumbnail: "https://thesusoutdoors.com/cdn/shop/files/comfy-walking-clogs_8f9ae8ed-21f9-447b-ba12-28c0675032a1.png?v=1686598924&width=493",
            images: [
                "https://thesusoutdoors.com/cdn/shop/files/sage-green-sustainable-clog_f73f8700-6b47-4005-bbea-04538836a261.png?v=1686598924&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/comfy-walking-clogs_8f9ae8ed-21f9-447b-ba12-28c0675032a1.png?v=1686598924&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/stylish-clogs_d167463f-0bfa-4054-813c-ac644289903b.png?v=1686598924&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/summer-walking-clogs_a900ccac-d199-420f-900f-508c14c65f1b.png?v=1686598924&width=493"
            ],
            sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
            price: 11800,
            category: {
              Terrus: true,
              Bestsellers: true,
              all: true,
            },
            quantity: 5,
            inStock: true
        },
        {
            name:"The Simone Weekend Boot",
            thumbnail: "https://thesusoutdoors.com/cdn/shop/files/ethical-hiking-boot-yellow_dfcf562e-cc76-4f26-b50f-b23795cd13fa.png?v=1686560081&width=493",
            hoverThumbnail: "https://thesusoutdoors.com/cdn/shop/files/yellow-WeekendBoot.png?v=1686560081&width=493",
            images: [
                "https://thesusoutdoors.com/cdn/shop/files/ethical-hiking-boot-yellow_dfcf562e-cc76-4f26-b50f-b23795cd13fa.png?v=1686560081&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/yellow-WeekendBoot.png?v=1686560081&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/LifestyleWeekendBoot-yellow.png?v=1686560081&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot-yellow.png?v=1686560074&width=493"
            ],
            sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
            price: 16800,
            category: {
              Weekend: true,
              all: true,  
            },
            quantity: 5,
            inStock: true
        },
        {
            name:"The Weekend Boot Z in Grey",
            thumbnail: "https://thesusoutdoors.com/cdn/shop/files/city-walking-winter-boot_f5d66414-a377-41d8-a3bf-5cfb7813199c.png?v=1686604125&width=493",
            hoverThumbnail: "https://thesusoutdoors.com/cdn/shop/files/comfortable-winter-boots_55d04436-74a4-4308-ad1e-e540bd191661.png?v=1686604162&width=493",
            images: [
                "https://thesusoutdoors.com/cdn/shop/files/city-walking-winter-boot_f5d66414-a377-41d8-a3bf-5cfb7813199c.png?v=1686604125&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/sustainable-winter-boots_b63ce543-133c-40c3-bf66-740e6cd504d9.png?v=1686604181&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/comfortable-winter-boots_55d04436-74a4-4308-ad1e-e540bd191661.png?v=1686604162&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/sustainable-winter-boots_0bd96dd6-bdf9-405b-89ce-24208ea8d779.png?v=1686604191&width=493"
            ],
            sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
            price: 16800,
            category: {
              Weekend: true,
              all: true,  
            },
            quantity: 5,
            inStock: true
        },
        {
            name:"✨ The Limited Edition Allegra Weekend Boot",
            thumbnail: "https://thesusoutdoors.com/cdn/shop/files/sustainable-walking-boot-white_f9c6786f-4923-42be-a052-e4841603545d.png?v=1686558765&width=493",
            hoverThumbnail: "https://thesusoutdoors.com/cdn/shop/products/2021_Weekend_Boot_Women_Vegan_Susaintable_Allegra_White.jpg?v=1686558765&width=493",
            images: [
                "https://thesusoutdoors.com/cdn/shop/files/sustainable-walking-boot-white_f9c6786f-4923-42be-a052-e4841603545d.png?v=1686558765&width=493",
                "https://thesusoutdoors.com/cdn/shop/products/2021_Weekend_Boot_Women_Vegan_Susaintable_Allegra_White.jpg?v=1686558765&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/allegra-double-angle-top.png?v=1686558803&width=493",
                "https://thesusoutdoors.com/cdn/shop/files/allegra-double-front.png?v=1686558803&width=493"
            ],
            sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
            price: 21800,
            category: {
              Weekend: true,
              all: true,  
            },
            quantity: 5,
            inStock: true
        },
    ],
    size: 6,
};
export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addProduct: (state, action) => {

        },
        removeProduct: (state, action) => {

        },
        updateProduct: (state, action) => {

        },
        setOutOfStock: (state, action) => {

        }
    } 
});
export const {addProduct, removeProduct, updateProduct, setOutOfStock} = productSlice.actions;
export default productSlice.reducer;



