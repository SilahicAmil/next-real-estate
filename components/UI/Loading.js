import { MagnifyingGlass } from "react-loader-spinner";

const Loading = ({ isLoading }) => {
  return (
    <>
      <div className="h-[100vh] w-full flex items-center justify-center">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    </>
  );
};

export default Loading;
