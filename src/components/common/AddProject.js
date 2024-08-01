import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CloudUpload } from "@mui/icons-material";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [previewImages, setPreviewImages] = useState([]);
  const [previewVideos, setPreviewVideos] = useState([]);

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setPreviewImages(images.map((i) => URL.createObjectURL(i)));
  };

  const handleVideoChange = (e) => {
    const videos = Array.from(e.target.files);
    setPreviewVideos(videos.map((i) => URL.createObjectURL(i)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      place,
      startDate,
      endDate,
      description,
      previewImages,
      previewVideos,
    };
    console.log("payload", payload);
  };
  return (
    <div className="container text-center my-5">
      <h1>添加项目</h1>
      <form onSubmit={(e) => handleSubmit(e)} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          label="项目名称"
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <div className="d-flex justify-content-between">
          <TextField
            margin="normal"
            required
            label="项目地点"
            onChange={(e) => setPlace(e.target.value)}
          ></TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="my-3"
              label={"项目开始日期"}
              slotProps={{
                textField: {
                  required: true,
                },
              }}
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
              slotProps={{
                textField: {
                  required: true,
                },
              }}
              onChange={(value) => {
                const date = dayjs(value);
                setEndDate(date);
              }}
            />
          </LocalizationProvider>
        </div>
        <TextField
          margin="normal"
          multiline
          minRows={5}
          required
          fullWidth
          label="项目介绍"
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>
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
            {previewImages.map((image, index) => (
              <ImageListItem key={image}>
                <img
                  style={{ objectFit: "fill" }}
                  src={`${image}`}
                  alt={`preview-${index}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
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
          <Grid container justifyContent={"center"}>
            {previewVideos.map((video) => (
              <Grid item className="my-5 d-flex justify-content-center">
                <video controls className="w-100">
                  <source src={video} type="video/mp4"></source>
                </video>
              </Grid>
            ))}
          </Grid>
        </div>
        <Button className="my-3" type="submit" variant="contained" size="large">
          确认提交
        </Button>
      </form>
    </div>
  );
}
