import Count from "@/common/count";

const counter_data = [
    {
        id: 1,
        counter: 50,
        plus: "+",
        text: <>Worldwide <br /> clients</>

    },
    {
        id: 2,
        counter: 100,
        plus: "+",
        text: <>Projects  <br /> Completed</>

    },
    {
        id: 3,
        counter: 98.9,
        percentage: "%",
        text: <>Uptime <br /> Guaranteed</>

    },
    {
        id: 4,
        counter: 7,
        percentage: "+",
        text: <>Industries <br /> Served</>

    },
]

const Counter = ({ style }) => {
    return (
        <section className={`${style ? "inner-fact-padding" : "fact-area"}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="section-title text-center mb-55">
                        <h2 className="title">Avesto by the Numbers</h2>
                    </div>
                    {counter_data.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">

                            <div className="fact-item">
                                <h2 className="count">
                                    <span className="formatting-mark">{item.plus}</span>
                                    <Count number={item.counter} />
                                    <span className="formatting-mark">{item.percentage}</span>
                                </h2>
                                <span className="content">{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Counter
