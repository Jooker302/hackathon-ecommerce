import { client } from "@/lib/sanityClient";

export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
        name,
        price,
        image,
        category,
        _id
    }`)
    return res
}

export default async function Test() {

    const data = await getProductData()
    console.log(data)
    
    

    return(
    <>
    </>
    );
}