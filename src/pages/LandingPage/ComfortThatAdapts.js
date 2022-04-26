import react from 'react';

export default class ComfortThatAdapts extends react.Component {
  render() {
    return (
      <section className="pt-10 pb-14">
        <h2 className="text-center font-['Tiempos'] text-[39px]">
          Comfort that <span className="italic">adapts slkdfsalkdjfsalkd</span>
        </h2>
        <h3 className="w-3/5 text-center mx-auto text-comet">
          Let your mattress adapt to you—not the other way around. Our
          mattresses feature ComfortAdapt™: expertly designed to conform to you.
        </h3>
        <div className="w-5/6 flex justify-evenly align-middle mt-8 mx-auto">
          <div className="card max-w-md w-1/2 font-['Inter'] rounded-lg text-center shadow-[0_4px_10px_rgba(0,0,0,0.1)] pb-8">
            <div className="gradient-background rounded-t-lg pt-9 px-14 pb-3">
              <img src="/assets/comfort-adapt-hybrid.svg" />
              <h3 className="text-sm font-semibold">OPTIMAL PRESSURE-RELIEF</h3>
            </div>
            <div className="w-4/5 mx-auto">
              <h2 className="font-['Tiempos'] text-3xl">
                ComfortAdapt™ Hybrid
              </h2>
              <p className="text-xl">
                Perfect balance of pressure-relief and support.
              </p>
              <a className="btn bg-pizazz text-[white] px-24 py-3 rounded-[60px] my-5">
                SHOP NOW
              </a>
              <p>starting at $599.99</p>
            </div>
          </div>
          <div className="card max-w-md w-1/2 font-['Inter'] rounded-lg text-center shadow-[0_4px_10px_rgba(0,0,0,0.1)] pb-8">
            <div className="gradient-background rounded-t-lg pt-9 px-14 pb-3">
              <img src="/assets/comfort-adapt-hybrid.svg" />
              <h3 className="text-sm font-semibold">
                ADVANCED PRESSURE-RELIEF
              </h3>
            </div>
            <div className="w-4/5 mx-auto">
              <h2 className="font-['Tiempos'] text-3xl">ComfortAdapt™</h2>
              <p className="text-xl">
                Classic EmmaStackTM - progressive pressure relief and natural
                cooling
              </p>
              <a className="btn bg-pizazz text-[white] px-24 py-3 rounded-[60px] my-5">
                SHOP NOW
              </a>
              <p>starting at $599.99</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
