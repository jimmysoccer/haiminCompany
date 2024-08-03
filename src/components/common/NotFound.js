import { notFoundIcon } from "../../assets/images/image";

export const NotFound = () => {
  return (
    <div className="container text-center m-5">
      <img
        className="img-fluid my-5"
        style={{ height: "200px" }}
        src={notFoundIcon}
        alt="not found"
      ></img>
      <h2>对不起，您访问的页面不存在。</h2>
    </div>
  );
};
