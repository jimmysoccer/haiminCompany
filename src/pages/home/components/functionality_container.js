import { Grid } from "@mui/material";
import { computerScreenIcon, intranetIcon } from "../../../imgs/image";

export const FunctionalityContainer = () => {
  return (
    <div className="bg-primary-subtle">
      <div className="container text-center pb-5">
        <h1 className="fs-2 fw-bold pt-5 pb-5">专业数据库与软件解决方案</h1>
        <Grid container justifyContent={"center"} padding={2}>
          <Grid
            item
            xs={12}
            md={4}
            className="d-flex mx-5 justify-content-center"
          >
            <div className="container d-flex">
              <img
                src={computerScreenIcon}
                alt="computer screen"
                className="img-fluid"
              ></img>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            className="container mx-5 d-flex flex-column justify-content-center"
          >
            <h3 className="fs-4 fw-bold ">我们的使命</h3>
            <p className="fs-6 fw-bold">
              我们的使命是通过创新和卓越的技术解决方案，帮助客户解决复杂的业务挑战，实现长期的成功和增长。
            </p>
            <h3 className="fs-4 fw-bold ">我们的团队</h3>
            <p className="fs-6 fw-bold">
              拥有一支充满激情和专业知识的团队,包括数据库专家、软件开发工程师、项目经理和IT咨询顾问。
              我们的团队成员经验丰富，技能全面，能够灵活应对各种项目需求。
            </p>
            <h3 className="fs-4 fw-bold ">我们的服务</h3>
            <p className="fs-6 fw-bold">
              我们提供全面的服务，包括数据库设计与建设、软件开发与定制、数据迁移和优化等。
              无论您是需要建立一个全新的数据库系统，还是寻找定制化的软件解决方案，
              [公司名称]都能为您提供专业的帮助和支持。
            </p>
          </Grid>
        </Grid>
        <Grid container padding={2} justifyContent={"center"}>
          <Grid
            item
            xs={12}
            md={4}
            className="container mx-5 d-flex flex-column justify-content-center"
          >
            <h3 className="fs-4 fw-bold ">客户至上</h3>
            <p className="fs-6 fw-bold">
              客户满意是我们追求的最高目标。我们始终关注客户的需求和期望，努力为他们提供高质量的服务和支持。
              我们珍视与客户建立的合作关系，相信通过合作和沟通，可以共同实现双方的成功。
            </p>
            <h3 className="fs-4 fw-bold ">联系我们</h3>
            <p className="fs-6 fw-bold">
              如果您对我们的服务或解决方案感兴趣，或者有任何疑问和需求，请随时与我们联系。
              我们的团队将竭诚为您提供帮助和支持。
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className="d-flex mx-5 justify-content-center"
          >
            <div className="container d-flex">
              <img
                src={intranetIcon}
                alt="computer screen"
                className="img-fluid"
              ></img>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
