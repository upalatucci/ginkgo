import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="relative w-full overflow-hidden h-96 mb-20 lg:mb-0">

        {/* Dark blue bottom section (2/3) */}
        <div className="bg-[#1e3a8a] relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-2 md:justify-between px-4 md:px-8 lg:px-12 py-8">
          {/* Ginkgo leaf in blue section - repeating pattern */}
          <div 
            className="absolute left-0 bottom-0 h-1/3 w-full z-10"
            style={{
              backgroundImage: 'url(/images/foglie-2.png)',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'left bottom',
              backgroundSize: 'auto 100%',
            }}
          />

          {/* Centered text - top on mobile, center on desktop */}
          <div className="md:flex-1 flex justify-center items-center z-20 md:ml-40 lg:ml-56 xl:ml-64 md:mr-4 order-1 md:order-2">
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center leading-tight">
              1° Meeting nazionale
              <br />
              giovani Ginkgo
            </h2>
          </div>

          {/* Soka Gakkai logo - bottom on mobile, right on desktop */}
          <div className="flex items-center justify-center gap-2 md:gap-3 z-20 order-2 md:order-3 mt-4 md:mt-0">  
            <Image
                src="/images/logo/logo-soka.svg"
                alt="Soka Gakkai logo"
                width={300}
                height={300}
                style={{ 
                  filter: "brightness(0) saturate(100%) invert(70%)",
                }}
                className="object-contain"
              />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
