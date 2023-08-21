import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
    return(
        <section className="flex items-center py-12 p-12">
      <div className="w-full md:w-2/5 mr-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Welcome to Queen's Store
        </h2>
        <p className="text-gray-600">
          Discover the latest trends in fashion for men, women, and kids. Explore our wide range of products and find your perfect style.
        </p>
        <div className="m-4 mt-10">
        <Link className="p-3 bg-black rounded-lg text-white items-center" href="/"> 
        <FontAwesomeIcon icon={faCartShopping} size="lg" className='h-4 w-4 mx-2 text-white' />
         Start Shopping</Link>
        </div>
      </div>
      <div className="ml-24 rounded-full bg-[#ffece3] hidden md:block">
      <Image
      className="ml-12"
      src="/header.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        {/* <img
          src="/intro-image.jpg"
          alt="Fashion Models"
          className="w-full h-auto"
        /> */}
      </div>
    </section>
    )
}

export default Intro;