import Image from "next/image";
import Link from "next/link";

const Navigation = ({}) => {
  return (
    <>
      <div className="flex h-24 w-11/12 m-auto mt-2 mb-4 ">
        <div className="flex ">
          <Link href="/">
            <Image
              alt="Real Estate Logo"
              src="/images/logo-color.png"
              width={100}
              height={64}
              className="w-full h-full ml-4 rounded-lg"
            />
          </Link>
        </div>
        <div className="flex items-center w-full ">
          <nav className="w-full">
            <ul className="flex gap-12 ml-12 h-full items-center">
              <li>Top Offers</li>
              <li>About Us</li>
              <li>References</li>
              <li>Our Team</li>
              <div className="flex ml-auto mr-12 ">
                <Link href="/contact">
                  <button className="w-32 h-12 bg-red-700 rounded-sm hover:rounded-md">
                    Contact Us
                  </button>
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
