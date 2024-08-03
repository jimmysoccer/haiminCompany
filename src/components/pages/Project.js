import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_MENU } from "../../constants/navBar";
import {
  Button,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  TextField,
} from "@mui/material";
import CustomCarousel from "../common/CustomCarousel";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { accessRoleAtom } from "../../atoms/atom";
import { EDITOR } from "../../constants/constant";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CloudUpload } from "@mui/icons-material";
import { postImages } from "../../services/post-images";
import toast from "react-hot-toast";
import { editProject } from "../../services/edit-project";
import { NotFound } from "../common/NotFound";

export default function Project() {
  const location = useLocation();
  const project = location.state?.project;
  const descriptions = project?.description?.split("\n");
  const accessRole = useAtomValue(accessRoleAtom);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(project?.title);
  const [place, setPlace] = useState(project?.place);
  const [description, setDescription] = useState(project?.description);
  const [startDate, setStartDate] = useState(dayjs(project?.start_date));
  const [endDate, setEndDate] = useState(dayjs(project?.end_date));
  const [imageFiles, setImageFiles] = useState(project?.images);
  // const [previewVideos, setPreviewVideos] = useState(project?.videos);
  const navigate = useNavigate();

  if (!project) return <NotFound></NotFound>;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    let images = Array.from(e.target.files);
    if (images.length === 0) return;
    images = images.filter(
      (image) => !imageFiles.map((a) => a.name).includes(image?.name)
    );
    setImageFiles([...imageFiles, ...images]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredImageFiles = imageFiles.filter(
      (image) => typeof image !== "string"
    );
    const imagePaths = filteredImageFiles.map((image) => image.name).join(",");
    const payload = {
      id: project.id,
      title,
      place,
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
      description,
      images: imagePaths,
    };

    try {
      if (filteredImageFiles.length !== 0)
        await uploadImages(filteredImageFiles);
      const res = await editProject(payload);
      const success = res.status;
      if (success) {
        toast.success(`成功修改${payload.title}项目`);
        setEditMode(false);
        navigate(`/projects`);
      } else {
        toast.error("修改失败!");
      }
    } catch (e) {
      console.error("error", e);
    }
  };

  const uploadImages = async (images) => {
    try {
      await postImages(images);
    } catch (error) {
      console.error("upload images error", error);
    }
  };

  return (
    <div className="container text-center">
      <div className="my-3 w-75 d-inline-block">
        <div className="d-flex">
          <Link to={NAV_MENU[0].path} className="text-decoration-none">
            <p className="me-3 menu-link">首页 </p>
          </Link>
          <p className="me-3">{">"}</p>
          <Link to={NAV_MENU[2].path} className="text-decoration-none">
            <p className="me-3 menu-link">产品中心</p>
          </Link>
          <p className="me-3">{">"}</p>
          <p className="me-3 menu-link clicked">{project.title}</p>
        </div>
      </div>
      {accessRole === EDITOR && (
        <div className="w-100 d-flex justify-content-end">
          <IconButton color="primary" onClick={toggleEditMode}>
            <EditIcon></EditIcon>
          </IconButton>
        </div>
      )}
      <div className="w-75 text-center d-inline-block">
        {editMode ? (
          <TextField
            margin="normal"
            fullWidth
            label="项目名称"
            value={title}
            onChange={(e) => changeTitle(e)}
          ></TextField>
        ) : (
          <h1 className="my-5">{project.title}</h1>
        )}
        <div className="text-center">
          {editMode ? (
            <div className="d-flex justify-content-between">
              <TextField
                margin="normal"
                label="项目地点"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              ></TextField>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="my-3"
                  label={"项目开始日期"}
                  value={startDate}
                  onChange={(value) => {
                    const date = dayjs(value);
                    setStartDate(date);
                  }}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="my-3"
                  label={"项目结束日期"}
                  value={endDate}
                  onChange={(value) => {
                    const date = dayjs(value);
                    setEndDate(date);
                  }}
                />
              </LocalizationProvider>
            </div>
          ) : (
            <div className="text-center d-flex justify-content-between my-3">
              <h3>{project.place}</h3>
              <h3>开始时间:{" " + project.start_date}</h3>
              <h3>结束时间:{" " + project.end_date}</h3>
            </div>
          )}
        </div>
        {editMode ? (
          <TextField
            margin="normal"
            multiline
            minRows={5}
            fullWidth
            label="项目介绍"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></TextField>
        ) : (
          descriptions?.map((des) => <p className="text-secondary">{des}</p>)
        )}

        {editMode ? (
          <div className="container my-3">
            <Button
              component="label"
              role={undefined}
              variant="contained"
              className="my-3"
              tabIndex={-1}
              startIcon={<CloudUpload />}
              onChange={(e) => handleImageChange(e)}
            >
              上传照片
              <input className="d-none" type="file" multiple></input>
            </Button>
            <ImageList cols={2} rowHeight={400}>
              {imageFiles.map((image, index) => (
                <ImageListItem key={`preview-${index}`}>
                  <img
                    style={{ objectFit: "fill" }}
                    src={
                      typeof image === "string"
                        ? image
                        : URL.createObjectURL(image)
                    }
                    alt={`preview-${index}`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        ) : (
          project?.images?.length !== 0 && (
            <CustomCarousel images={project.images}></CustomCarousel>
          )
        )}
        {project.video ? (
          <Grid container justifyContent={"center"}>
            <Grid item className="my-5 d-flex justify-content-center">
              <video controls className="w-100">
                <source src={project.video} type="video/mp4"></source>
              </video>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
        {editMode && (
          <Button
            variant="contained"
            size="large"
            onClick={(e) => handleSubmit(e)}
          >
            提交修改
          </Button>
        )}
      </div>
      <div className="my-5"></div>
      {/* <div className="container d-flex justify-content-center w-75 mt-3 mb-5">
        <div className="w-50 d-flex justify-content-start">
          {id > 1 ? (
            <Link
              to={`/projects/${id - 1}`}
              className="text-decoration-none menu-link"
            >
              {`< 上一个: ${ProjectsList[id - 2].title} >`}
            </Link>
          ) : (
            <div>这就是第一个</div>
          )}
        </div>
        <div className="w-50 d-flex justify-content-end">
          {parseInt(id) === ProjectsList.length ? (
            <div>这就是最后一个</div>
          ) : (
            <Link
              to={`/projects/${+id + 1}`}
              className="text-decoration-none menu-link"
            >
              {`下一个: ${ProjectsList[id]?.title} >`}
            </Link>
          )}
        </div>
      </div> */}
    </div>
  );
}
