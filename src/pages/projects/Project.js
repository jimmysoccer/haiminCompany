import { useParams } from "react-router-dom";

export default function Project() {
  const { id } = useParams();
  return (
    <div className="container text-center">
      <h1>案例{id}</h1>
      <p>介绍具体工作</p>
    </div>
  );
}
