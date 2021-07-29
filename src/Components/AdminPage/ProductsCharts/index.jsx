import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { acFetchProductsRequest } from "../../../Actions";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./styles.scss";

const generateProducts = (products) => {
  var aorus = 0;
  var nvidia = 0;
  var amd = 0;
  products.forEach((item) => {
    if (item.aorus) {
      aorus = aorus + 1;
    }
    if (item.nvidia) {
      nvidia = nvidia + 1;
    }
    if (item.amd) {
      amd = amd + 1;
    }
  });
  return {
    chart: {
      type: "column",
    },
    title: {
      text: "Product Statistics",
      style: { "font-size": "30px", "text-transform": "uppercase" },
    },
    xAxis: {
      categories: ["AORUS", "NVIDIA", "AMD"],
    },
    legend: {
      enabled: true,
      title: {
        text: "Statistical chart of product quantity",
        style: { "font-size": "18px" },
      },
    },
    yAxis: [
      {
        title: {
          text: "Products Statistics",
        },
        showFirstLabel: false,
      },
    ],
    series: [
      {
        data: [
          {
            name: "AORUS",
            y: aorus,
            color: "#ff4600",
          },
          {
            name: "NVIDIA",
            y: nvidia,
            color: "#76b900",
          },
          {
            name: "AMD",
            y: amd,
            color: "#a60d13",
          },
        ],
        name: "Amount",
        dataLabel: true,
      },
    ],
    credits: {
      enabled: false,
    },
  };
};

export default function HightCharts() {
  const [options, setOptions] = useState({});
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acFetchProductsRequest());
  }, []);

  useEffect(() => {
    setOptions(generateProducts(products));
  }, [products]);

  return (
    <div className="container">
      <div className="hight-charts">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}
