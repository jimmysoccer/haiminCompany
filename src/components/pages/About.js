import { database1Icon } from "../../assets/images/image";

export default function About() {
  return (
    <div>
      <div className="bg-primary-subtle pb-5">
        <div className="container text-start pb-5">
          <h1 className="fs-2 fw-bold pt-5 pb-5 text-center">
            上海海民数据科技有限公司
          </h1>
          <div
            className="container mb-5 w-100"
            style={{ height: "300px", overflow: "hidden" }}
          >
            <img src={database1Icon} alt="about" className="img-fluid"></img>
          </div>
          <p className="fw-semibold">{`上海海民数据科技有限公司,自2020年2月成立,
          是一家专注于IDC数据中心建设,主营业务数据服务、智能化系统、智慧园区、
          网站程序定制等。`}</p>
          <p className="fw-semibold">{`到目前为止参与众多金融机构的数据中心建设,学校日常教育数据机房建设,
          园区、医院的后勤、工程智能化管理升级改造,还有住宅小区的水泵房自控、安防建设。
          参与的项目有工商银行上海嘉定数据中心二期,平安银行深圳光明数据中心,
          康佳研发中心工程部智能化升级工程,深圳大学附属华南医院智能化建设,
          国家反计算机入侵和防病毒研究中心的智能化建设,深圳南山官龙学校等等。`}</p>
          <p className="fw-semibold">{`
          公司有多名专业而又经验丰富的数据中心运维人员,有国外的计算机专业团队,
          开发程序、定制网站、APP,有着本科、研究生学历。公司自成立至今,经过过个项目历练,
          组建了一支经验丰富、能力精干的务实型管理团队,公司的服务理念:`}</p>
        </div>
        <div className="d-flex mb-5">
          <div className="w-100">
            <svg width="100%" height="100">
              <defs>
                {/* 定义渐变色 */}
                <linearGradient
                  id="businessGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#003366", stopOpacity: 1 }}
                  />{" "}
                  {/* 深蓝色 */}
                  <stop
                    offset="100%"
                    style={{ stopColor: "#0066cc", stopOpacity: 1 }}
                  />{" "}
                  {/* 浅蓝色 */}
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Arial, sans-serif"
                fontSize="48"
                fontWeight="bold"
                fill="url(#businessGradient)" // 使用渐变色
                stroke="#003366" // 描边颜色
                strokeWidth="1" // 描边宽度
              >
                以专业立身，以诚信待人
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
