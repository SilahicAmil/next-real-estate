import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navigation = ({}) => {
  return (
    <>
      <div className="bg-gray-100 font-sans w-full  m-0">
        <div className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div>
                <h1>REAL ESTATE</h1>
              </div>

              <div className="hidden sm:flex sm:items-center">
                <Link
                  href="#"
                  className="text-gray-800 text-sm font-semibold mr-4"
                >
                  Top Offers
                </Link>
                <Link
                  href="#"
                  className="text-gray-800 text-sm font-semibold mr-4"
                >
                  References
                </Link>
                <Link
                  href="#"
                  className="text-gray-800 text-sm font-semibold mr-4"
                >
                  About Us
                </Link>
                <Link href="#" className="text-gray-800 text-sm font-semibold">
                  Our Team
                </Link>
              </div>

              <div className="hidden sm:flex sm:items-center">
                <Link
                  href="#"
                  className="text-white bg-[#1C3988] text-sm font-semibold border px-4 py-2 rounded-md hover:rounded-xl hover:duration-200 "
                >
                  Contact Us
                </Link>
              </div>
              {/* Mobile Menu */}
              <div className="sm:hidden cursor-pointer">
                <AiOutlineMenu />
              </div>
            </div>

            <div className="block sm:hidden bg-white border-t-2 py-2">
              <div className="flex flex-col">
                <Link
                  href="#"
                  className="text-gray-800 text-sm font-semibold  mb-1"
                >
                  Top Offers
                </Link>
                <a
                  href="#"
                  className="text-gray-800 text-sm font-semibold  mb-1"
                >
                  References
                </a>
                <Link
                  href="#"
                  className="text-gray-800 text-sm font-semibold  mb-1"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-gray-800 text-sm font-semibold mb-1"
                >
                  Our Team
                </Link>
                <div className="flex justify-between items-center border-t-2 pt-2">
                  <a
                    href="#"
                    className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
