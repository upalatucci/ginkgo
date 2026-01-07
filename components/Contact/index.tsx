const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three  mb-12 rounded-sm  px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black  sm:text-3xl lg:text-2xl xl:text-3xl">
                Contatti
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Per chiarimenti e/o informazioni scrivere al comitato
                dell&apos;incontro:{" "}
                <a href="mailto:divisione.ginkgo@sgi-italia.org">
                  divisione.ginkgo@sgi-italia.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
