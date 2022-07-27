import { useEffect, useState } from "react";
import { mpgsPymentInit } from "../../api";
import { message } from "antd";
import { Spin } from "antd";
import Script from "next/script";
import { useRouter } from "next/router";
const indexPayment = () => {
  const router = useRouter();
  const [data, setData]: any = useState([]);
  const values: any = {
    amount: 82.0,
    currency: "IQD",
  };
  useEffect(() => {
    mpgsInitForm();
  }, [router]);

  const mpgsInitForm = async () => {
    await mpgsPymentInit(values, async (token: any, error: any) => {
      if (error) return message.error(error);
      await setData(token);
    });
  };

  //   console.log(data.dataId);

  return (
    <>
      {data.length != 0 ? (
        <div>
          <Script
            src={`https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${data.dataId}`}
          ></Script>
          <form
            action="https://www.google.com"
            className="paymentWidgets"
            data-brands="VISA MASTER AMEX"
          ></form>
        </div>
      ) : (
        <Spin size="large" />
      )}
    </>
  );
};

export default indexPayment;
