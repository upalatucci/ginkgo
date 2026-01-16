import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 min-h-screen overflow-hidden pb-0 pt-[120px] md:pt-[200px] xl:pt-[180px] 2xl:pt-[210px]"
        style={{ backgroundColor: "#FFF8F0" }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[900px] text-center"
                data-wow-delay=".2s"
              >
                {/* Date */}
                <div className="mb-4 text-center">
                  <p className="text-xl md:text-3xl lg:text-3xl font-bold text-primary mb-2">
                    08/02/2026
                  </p>
                </div>

                {/* Time and Streaming */}
                <div className="mb-6 text-center">
                  <p className="text-lg md:text-xl text-primary font-medium">
                    10:30 in diretta streaming
                  </p>
                </div>

                {/* Main Title */}
                <div className="mb-8 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-2">
                    1° Meeting nazionale giovani Ginkgo
                  </h1>
                </div>

                {/* Slogan */}
                <div className="text-primary text-base md:text-xl lg:text-2xl max-w-3xl mx-auto font-medium mb-12">
                  <p className="mb-1">Non poniamo limiti ai legami di</p>
                  <p className="mb-1">amicizia che possiamo creare e</p>
                  <p>vinciamo su tutto</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ginkgo Leaf Border at Bottom */}
        <div className="absolute bottom-20 md:bottom-0 left-0 right-0 w-full h-auto max-h-[200px] lg:max-h-[250px] xl:max-h-[400px]">
          <Image
            src="/images/foglie-2.png"
            alt="Ginkgo leaves border"
            width={1920}
            height={200}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
