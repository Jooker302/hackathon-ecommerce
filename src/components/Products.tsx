import Image from "next/image";

const Products = () => {
    return(
        <div className="p-4">
            <p className="text-center font-3xl md:text-4xl font-bold md:mt-4">Products</p>
            <div className="flex justify-center items-center p-4 flex-wrap">
                <div>
                    <Image
                    src="/pro1.png"
                    width={300}
                    height={300}
                    alt="P"/>
                    <p className="text-center">Item 1</p>
                </div>
                <div>
                    <Image
                    src="/pro2.png"
                    width={300}
                    height={300}
                    alt="P"/>
                    <p className="text-center">Item 2</p>
                </div>
                <div>
                    <Image
                    src="/pro3.png"
                    width={300}
                    height={300}
                    alt="P"/>
                    <p className="text-center">Item 3</p>
                </div>
            </div>
        </div>
    );
}
export default Products;