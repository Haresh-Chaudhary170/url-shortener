import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";

function CardSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchedData = [
      {
        number: "01",
        title: "Choose Plant",
        description: "We have several varieties plants you can choose from.",
      },
      {
        number: "02",
        title: "Place an Order",
        description:
          "Once your order is set, we move to the next step which is the shipping.",
      },
      {
        number: "03", // Corrected the number for the third step
        title: "Get plants delivered",
        description:
          "Our delivery process is easy, you receive the plant direct to your door.",
      },
    ];
    setData(fetchedData);
  }, []);

  return (
    <div className="pl-24">
      <div className="bg-primary rounded-2xl pt-16 px-10 pb-12">
        <h1 className="text-4xl font-bold text-center leading-[140%] text-white pb-16">
          Steps to start your
          <br />
          plants off right
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {data &&
            data.map((item) => (
              <Card
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
