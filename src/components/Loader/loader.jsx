import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="#722f37"
        secondaryColor="white"
      />
    </div>
  );
};

export default Loader;
