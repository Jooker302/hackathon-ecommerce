import Image from "next/image";

const Promotions = () => {
  return (
    <div className="p-4">
      <p className="text-center text-3xl md:text-4xl font-bold">Promotions</p>
      <div className="flex justify-center  items-center flex-wrap">
        <div className="flex flex-col justify-center h-auto flex-wrap">
          <div className="bg-[#D6D6D8] flex justify-center py-0 items-center w-auto p-2 m-2">
            <div><p className="text-white">GET UP TO 60%</p><p className="text-white"> For the summer season</p></div>
            
            <Image
              src="/event1.webp"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <div className="bg-[#212121] w-auto flex flex-col p-2 m-2 py-0 justify-center items-center" >
            <p className="text-white text-2xl font-bold">GET 30% Off</p>
            <p className="text-white">USE PROMO CODE</p>
            <button className="p-2 bg-[#474747]">Sale</button>
          </div>
        </div>

        <div className="flex justify-center items-center h-auto flex-wrap">
            <div className="bg-[#EFE1C7] p-2 py-0 h-auto m-2">
                <p className="text-white">Flex Sweatshirt</p>
                <p className="text-white">$75.00</p>
                <Image
                src="/event2.webp"
                width={200}
                height={200}
                alt="J"
                />

            </div>

            <div className="bg-[#D7D7D9] p-2 py-0 h-auto m-2">
                <p className="text-white">Flex Push Button Bomber</p>
                <p className="text-white">$190.00</p>
                <Image
                src="/event3.webp"
                width={200}
                height={200}
                alt="J"
                />

            </div>
        </div>
        
      </div>
    </div>
  );
};
export default Promotions;
