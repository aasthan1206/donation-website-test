import React, { useState } from "react";
import cx from "classnames";
import Layout from "@/components/layout";
import Link from "next/link";

const Donate = () => {
  const [cardId, setCardId] = useState(0);
  const orgData = [
    {
      id: 1,
      title: "ORG 1",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum nemo eaque voluptatem porro. Modi, doloribus officiis! Atque quo similique explicabo odio tenetur perspiciatis, ut, incidunt cum facere quaerat dolores.",
      styling: "bg-secondary text-black",
      card: (
        <div className="h-48 text-5xl text-center bg-white opacity-80 rounded-2xl rounded-t-none">
          Hello
        </div>
      ),
    },
    {
      id: 2,
      title: "ORG 2",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum nemo eaque voluptatem porro. Modi, doloribus officiis! Atque quo similique explicabo odio tenetur perspiciatis, ut, incidunt cum facere quaerat dolores.",
      styling: "bg-primary text-white",
      card: (
        <div className="h-48 text-5xl text-center bg-white rounded-2xl rounded-t-none">
          Hello
        </div>
      ),
    },
  ];
  return (
    <Layout>
      <div className="bg-background p-16">
        <div className="flex flex-col gap-16">
          {orgData.map((item) => (
            <Link href={'/regForm'}>
              <div
                onMouseLeave={() => setCardId(0)}
                onMouseEnter={() => setCardId(item.id)}
                key={item.id}
                className="cursor-pointer"
              >
                <div
                  className={`rounded-2xl rounded-b-none p-8 ${item.styling}`}
                >
                  <div className="text-3xl pb-4">{item.title}</div>
                  <div>{item.desc}</div>
                </div>
                <div
                  className={cx("hidden", {
                    "!block": cardId === item.id,
                  })}
                >
                  {item.card}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
