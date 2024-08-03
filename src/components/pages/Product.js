import "./index.css";
import { useRef } from "react";
import Button from "@mui/material/Button";

export default function Product() {
  const product2 = useRef(null);

  function scrollToProduct(ref) {
    product2.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <>
      <view className="index">产品</view>
      <Button
        color="success"
        variant="contained"
        onClick={() => {
          scrollToProduct(product2);
        }}
      >
        scroll to P2
      </Button>
      <view style={{ display: "flex", flexDirection: "column" }}>
        <view className="test">TEST</view>
        <view ref={product2} className="test">
          TEST
        </view>
        <view className="test">TEST</view>
      </view>
    </>
  );
}
