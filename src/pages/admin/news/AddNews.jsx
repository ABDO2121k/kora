import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Backdrop, CircularProgress, Grid, TextField } from "@mui/material";
import ImageUpload from "../../../components/admin/news/ImageUpload";
import { toast } from "react-hot-toast";
import { myContext } from "../../../context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const AddNews = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [images, setImages] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [inputV, setInputV] = useState("");
  const [loading, setLoading] = useState(false);
  const context = useContext(myContext);
  const navigate = useNavigate();
  const { id } = useParams()

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const handleAddNews = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const data = { title: inputV, images: images, text: editorHtml };
      if (!id) {
        setInputV("");
        setImages([]);
        setEditorHtml("");
        setSubmited(true);
      }
      let res;
      if (!id) {
        res = await context?.addNews(data);
      } else {
        res = await context?.updateNews(id, data)
      }
      toast.success(res.message);
      setTimeout(() => {
        navigate(-1);
      }, 5000);
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
    return setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const news1 = await context?.getOneNews(id)
        setImages(news1?.images)
        setInputV(news1?.title)
        setEditorHtml(news1?.text)

      } catch (err) {
        console.log(err)
      }
      return setInterval(() => {
        setLoading(false);
      }, 1000);
    }
    if (id) {
      fetchData()
    }
  }, [id]);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress style={{ color: "#ff1744" }} />
      </Backdrop>
      <div className="p-4">
        <h1 className="mb-4 text-3xl text-center break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {id?"Update News":"Add new News"}
        </h1>
      </div>
      <form onSubmit={handleAddNews}>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: "3rem" }}>
            <Grid item lg={8} xs={12} sx={{ margin: "auto" }}>
              <TextField
                label={"title"}
                fullWidth
                name="title"
                required
                value={inputV}
                onChange={(e) => setInputV(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <h1 className="mt-5 font-bold text-lg">News Images </h1>
              <ImageUpload
                setState={setImages}
                initial={images}
                submited={submited}
              />
            </Grid>
            <h1 className="mt-10 font-bold text-lg">News Content </h1>
            <Grid
              item
              lg={8}
              xs={12}
              sx={{ margin: "auto", marginTop: "2rem" }}
            >
              <div className="mt-5">
                <ReactQuill
                  theme="snow"
                  value={editorHtml}
                  onChange={handleChange}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <div className="mt-10 w-full flex items-center justify-center">
          <button className="btn btn-outline btn-error " type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNews;
