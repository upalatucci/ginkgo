import News from "./News";
import Obiettivi from "./Obiettivi";

const Daimoku = () => {
  return (
    <section id="daimoku" className="overflow-hidden py-4 md:py-20 lg:py-4">
      <div className="container flex flex-wrap">
        <Obiettivi />
      </div>
    </section>
  );
};

export default Daimoku;
