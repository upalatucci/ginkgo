import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 min-h-[calc(100vh-100px)] overflow-hidden pb-0 pt-[120px] md:pt-[200px] xl:pt-[180px] 2xl:pt-[210px]"
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
                  <p className="mb-1">Senza arrenderci mai costruiamo eterni</p>
                  <p className="">
                    legami d&apos;amicizia e insieme vinciamo su tutto
                  </p>
                </div>

                {/* Hero buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/dialoghi"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto"
                  >
                    Dialoghi
                  </Link>
                  <Link
                    href="/canzone"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto"
                  >
                    Canzone
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ginkgo Leaf Border at Bottom */}
        <div className="absolute bottom-20 md:bottom-0 left-0 right-0 w-full h-auto max-h-[200px] lg:max-h-[25%] xl:max-h-[30%] z-[-1]">
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
