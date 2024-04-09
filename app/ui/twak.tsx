import Script from 'next/script';

const TawkComponent = () => {
  return (
    <>
      <h1>herer!!!!</h1>
      <Script
        strategy="lazyOnload"
        src="https://tawk.to/chat/6614a35fa0c6737bd129c71b/1hr0ibnkf"
      />
    </>
  );
};

export default TawkComponent;
