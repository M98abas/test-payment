import { useEffect, useState } from "react";
import { hyperPayInit } from "../../api";
import { message } from "antd";
import { Spin } from "antd";
import Script from "next/script";
import { useRouter } from "next/router";
const indexPayment = () => {
  const router = useRouter();
  const [data, setData]: any = useState("");
  const values: any = {
    amount: 1000,
    currency: "IQD",
  };

  const hyperInitForm = async () => {
    await hyperPayInit(values, async (token: any, error: any) => {
      if (error) return message.error(error);
      await setData(token);
    });
  };
  useEffect(() => {
    hyperInitForm();
  }, [router]);

  console.log(data);

  return (
    <>
      {data.length != 0 ? (
        <div>
          <Script
            src={`https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${data.dataId}`}
          ></Script>
          <form
            action={`/hyperpay/status/`}
            className="paymentWidgets"
            data-brands="VISA MASTER AMEX"
          ></form>
        </div>
      ) : (
        <div className="container">
          <div className="spiner-content">
            <Spin size="large" />
          </div>
        </div>
      )}
    </>
  );
};

export default indexPayment;
