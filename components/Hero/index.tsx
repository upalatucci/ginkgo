const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-8 pt-[120px] md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px] bg-white"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <div className="mb-6 text-center">
                  <p className="text-lg md:text-xl text-primary mb-2">
                    save the date
                  </p>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <p className="text-xl md:text-2xl font-bold text-primary">
                      08 feb 10:30
                    </p>
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-golden-yellow via-yellow to-[#FFA500] p-8 md:p-12 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-white">
                    <p className="text-lg md:text-xl mb-2">In diretta</p>
                    <p className="text-lg md:text-xl mb-4">streaming su zoom</p>
                    <h1 className="mb-2 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                      1º Meeting
                    </h1>
                    <h1 className="mb-2 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                      nazionale
                    </h1>
                    <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                      Ginkgo
                    </h1>
                  </div>
                </div>
                <div className="text-primary text-base md:text-lg max-w-2xl mx-auto font-medium">
                  <p className="mb-1">Non poniamo limiti ai legami di</p>
                  <p className="mb-1">amicizia che possiamo creare e</p>
                  <p className="mb-4">vinciamo su tutto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
