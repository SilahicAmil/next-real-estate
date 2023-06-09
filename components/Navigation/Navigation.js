import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const Navigation = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <>
      <div className="bg-gray-100 font-mono w-full">
        <div className="bg-white shadow relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div>
                <Link href="/" className="hover:underline hover:cursor-pointer">
                  REAL ESTATE
                </Link>
              </div>

              <div className="hidden md:flex sm:items-center">
                <Link
                  href="/rentals"
                  className="text-gray-800 text-sm font-semibold mr-4 hover:underline hover:cursor-pointer"
                >
                  Rentals
                </Link>
                <Link
                  href="/#testimonials"
                  scroll={false}
                  className="text-gray-800 text-sm font-semibold mr-4 hover:underline hover:cursor-pointer"
                >
                  Testimonials
                </Link>
                <Link
                  href="/#about"
                  scroll={false}
                  className="text-gray-800 text-sm font-semibold mr-4 hover:underline hover:cursor-pointer"
                >
                  About Us
                </Link>
                <Link
                  href="/#team"
                  scroll={false}
                  className="text-gray-800 text-sm font-semibold hover:underline hover:cursor-pointer"
                >
                  Our Team
                </Link>
              </div>

              <div className="hidden md:flex sm:items-center">
                <Link
                  href="/contact"
                  className="text-white bg-darkBlue text-sm font-semibold border px-4 py-2 rounded-md hover:rounded-xl hover:duration-200"
                >
                  Contact Us
                </Link>
              </div>
              {/* Mobile Menu */}
              <div
                className="md:hidden cursor-pointer"
                onClick={showMenuHandler}
              >
                <AiOutlineMenu />
              </div>
            </div>

            {showMenu ? (
              <div className="block md:hidden bg-white border-t-2 py-2">
                <div className="flex flex-col">
                  <Link
                    href="/rentals"
                    className="text-gray-800 text-sm font-semibold mb-1"
                  >
                    Rentals
                  </Link>
                  <Link
                    href="/#testimonials"
                    className="text-gray-800 text-sm font-semibold mb-1"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/#about"
                    className="text-gray-800 text-sm font-semibold mb-1"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/#team"
                    className="text-gray-800 text-sm font-semibold mb-1"
                  >
                    Our Team
                  </Link>
                  <div className="flex justify-between items-center border-t-2 pt-2">
                    <Link
                      href="/contact"
                      className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-sm hover:rounded-xl hover:duration-200"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
