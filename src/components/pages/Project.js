import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_MENU } from "../../constants/navBar";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { accessRoleAtom } from "../../atoms/atom";
import { EDITOR } from "../../constants/constant";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ArrowDownward, ArrowUpward, CloudUpload } from "@mui/icons-material";
import { postImages } from "../../services/post-images";
import toast from "react-hot-toast";
import { editProject } from "../../services/edit-project";
import { NotFound } from "../common/NotFound";
import { postVideos } from "../../services/post-videos";
import imageCompression from "browser-image-compression";

const IMAGE_TYPE = "image_type";
const VIDEO_TYPE = "video_type";

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
  const [videoFiles, setVideoFiles] = useState(project?.videos);
  const [imageLoading, setImageLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const navigate = useNavigate();

  if (!project) return <NotFound></NotFound>;

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setImageFiles(project?.images);
    setVideoFiles(project?.videos);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    let images = Array.from(e.target.files);
    if (images.length === 0) return;
    setImageFiles([...imageFiles, ...images]);
  };

  const handleRemoveImage = async (index) => {
    setImageLoading(true);
    await setImageFiles((prev) => prev.filter((item, i) => i !== index));
    setImageLoading(false);
  };

  const handleVideoChange = (e) => {
    let videos = Array.from(e.target.files);
    if (videos.length === 0) return;
    setVideoFiles([...videoFiles, ...videos]);
  };

  const handleRemoveVideo = async (index) => {
    setVideoLoading(true);
    await setVideoFiles((prev) => prev.filter((item, i) => i !== index));
    setVideoLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredImageFiles = imageFiles.filter(
      (image) => typeof image !== "string"
    );
    const filteredVideoFiles = videoFiles.filter(
      (video) => typeof video !== "string"
    );
    const imagePaths = imageFiles
      .map((image) =>
        (image?.name ?? image)
          .split("https://www.sh-haimin.cn/api/images/")
          .join("")
      )
      .join(",");

    const videoPaths = videoFiles
      .map((video) =>
        (video?.name ?? video)
          .split("https://www.sh-haimin.cn/api/videos/")
          .join("")
      )
      .join(",");
    const payload = {
      id: project.id,
      title,
      place,
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
      description,
      images: imagePaths,
      videos: videoPaths,
    };

    try {
      const savingToastId = toast.loading("上传中...");

      if (filteredImageFiles.length !== 0)
        await uploadImages(filteredImageFiles);
      if (filteredVideoFiles.length !== 0)
        await uploadVideos(filteredVideoFiles);
      const res = await editProject(payload);

      toast.dismiss(savingToastId);

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
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };
      const compressedImageFiles = await Promise.all(
        images.map(async (image, index) => {
          const compressedBlob = await imageCompression(image, options);

          // Convert the Blob to a File
          const compressedFile = new File(
            [compressedBlob],
            `${image.name}`, // You can customize the file name and extension
            { type: compressedBlob.type }
          );

          return compressedFile;
        })
      );

      await postImages(compressedImageFiles);
    } catch (error) {
      console.error("upload images error", error);
    }
  };
  const uploadVideos = async (video) => {
    try {
      await postVideos(video);
    } catch (error) {
      console.error("upload videos error", error);
    }
  };

  const handleUpOrder = (i, type) => {
    if (i === 0) return;
    const temp = [...(type === IMAGE_TYPE ? imageFiles : videoFiles)];
    [temp[i], temp[i - 1]] = [temp[i - 1], temp[i]];

    if (type === IMAGE_TYPE) setImageFiles(temp);
    else setVideoFiles(temp);
  };
  const handleDownOrder = (i, type) => {
    if (
      (type === IMAGE_TYPE && i === imageFiles.length - 1) ||
      (type === VIDEO_TYPE && i === videoFiles.length - 1)
    )
      return;
    const temp = [...(type === IMAGE_TYPE ? imageFiles : videoFiles)];
    [temp[i], temp[i + 1]] = [temp[i + 1], temp[i]];

    if (type === IMAGE_TYPE) setImageFiles(temp);
    else setVideoFiles(temp);
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
              <h4>{project.place}</h4>
              <h4>开始时间:{" " + project.start_date}</h4>
              <h4>结束时间:{" " + project.end_date}</h4>
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
            <ImageList cols={2} gap={20}>
              {imageLoading ? (
                <CircularProgress></CircularProgress>
              ) : (
                imageFiles.map((image, index) => (
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
                    <div className="d-flex justify-content-center">
                      <Button
                        className="mt-2 mx-2"
                        variant="contained"
                        onClick={() => handleUpOrder(index, IMAGE_TYPE)}
                      >
                        <ArrowUpward></ArrowUpward>
                      </Button>
                      <Button
                        className="mt-2 bg-danger"
                        variant="contained"
                        onClick={() => handleRemoveImage(index)}
                      >
                        删除
                      </Button>
                      <Button
                        className="mt-2 mx-2"
                        variant="contained"
                        onClick={() => handleDownOrder(index, IMAGE_TYPE)}
                      >
                        <ArrowDownward></ArrowDownward>
                      </Button>
                    </div>
                  </ImageListItem>
                ))
              )}
            </ImageList>
          </div>
        ) : (
          project?.images?.length !== 0 && (
            // <CustomCarousel
            //   images={project.images}
            //   height={500}
            // ></CustomCarousel>
            <ImageList cols={2} gap={20}>
              {project.images.map((image, index) => (
                <ImageListItem key={`project-${index}`}>
                  <img
                    style={{ objectFit: "fill" }}
                    src={image}
                    alt={`project-${index}`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )
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
              onChange={(e) => handleVideoChange(e)}
            >
              上传视频
              <input className="d-none" type="file" multiple></input>
            </Button>
            {videoLoading ? (
              <CircularProgress></CircularProgress>
            ) : (
              videoFiles.map((video, index) => (
                <Grid
                  item
                  className="my-5 d-flex flex-column justify-content-center align-items-center"
                >
                  <video controls className="w-100">
                    <source
                      src={
                        typeof video === "string"
                          ? video
                          : URL.createObjectURL(video)
                      }
                      type="video/mp4"
                    ></source>
                  </video>
                  <Button
                    className="mt-2 w-25 bg-danger"
                    variant="contained"
                    onClick={() => handleRemoveVideo(index)}
                  >
                    删除
                  </Button>
                </Grid>
              ))
            )}
          </div>
        ) : (
          project?.videos?.length !== 0 && (
            <Grid
              container
              justifyContent={"center"}
              className="text-center mt-5"
            >
              <h1 className="w-100">示例视频</h1>
              {project.videos.map((video) => (
                <Grid item className="my-5 d-flex justify-content-center">
                  <video controls className="w-100">
                    <source src={video} type="video/mp4"></source>
                  </video>
                </Grid>
              ))}
            </Grid>
          )
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
