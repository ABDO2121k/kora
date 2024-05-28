import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Backdrop, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ImageUpload from "../../../components/admin/news/ImageUpload";
import { toast } from "react-hot-toast";
import { myContext } from "../../../context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import Maroc from "../../../components/admin/stadium/Maroc";
import KeyWords from "../../../components/admin/stadium/KeyWords";

const AddStadium = () => {
    const [submited, setSubmited] = useState(false);
    const [inputV, setInputV] = useState({ title: "", images: [], details: "", city: "", taille: "", typeG: "", prix: "", facilities: [] });
    const [loading, setLoading] = useState(false);
    const context = useContext(myContext);
    const navigate = useNavigate();
    const { id } = useParams()

    const handleCity = (v) => setInputV({ ...inputV, city: v })
    const setImages = (v) => setInputV({ ...inputV, images: v })

    const handleChange = (html) => {
        setInputV({ ...inputV, details: html });
    };

    const handelSetKeywords = (values) => setInputV({ ...inputV, facilities: values });

    const handleAddStadium = async () => {
        try {
            setLoading(true);
            if (!id) {
                setInputV({ title: "", images: [], details: "", city: "", taille: "", typeG: "", prix: "", facilities: [] });
                setSubmited(true);
            }
            let res;
            if (!id) {
                res = await context?.addStadium(inputV);
            } else {
                res = await context?.updateStadium(id, inputV)
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
                const stadium1 = await context?.getOneStadium(id)
                setInputV(stadium1)

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
                    {id ? "Update Stadium" : "Add new Stadium"}
                </h1>
            </div>
            <Grid container>
                <Grid item lg={8} xs={12} sx={{ margin: "auto" }}>
                    <TextField
                        label={"title"}
                        fullWidth
                        name="title"
                        required
                        value={inputV.title}
                        onChange={(e) => setInputV({ ...inputV, title: e.target.value })}
                    />
                </Grid>
                <Grid item lg={6} xs={10} sx={{ marginTop: '30px', margin: "auto", padding: "20px" }}>
                    <TextField
                        label={"Price"}
                        fullWidth
                        name="prix"
                        type="number"
                        step={0.1}
                        required
                        value={inputV.prix}
                        onChange={(e) => setInputV({ ...inputV, prix: e.target.value })}
                    />
                </Grid>
                <Grid item lg={6} xs={10} sx={{ marginTop: '30px', margin: "auto", padding: "20px" }}>
                    <TextField
                        label={"Team Size"}
                        fullWidth
                        name="Team Size"
                        type="number"
                        required
                        value={inputV.taille}
                        onChange={(e) => setInputV({ ...inputV, taille: e.target.value })}
                    />
                </Grid>
                <Grid item lg={6} xs={10} sx={{ marginTop: '30px', margin: "auto", padding: "20px" }}>
                    <Maroc handleGetV={handleCity} city={inputV.city} />
                </Grid>
                <Grid item lg={6} xs={10} sx={{ marginTop: '30px', margin: "auto", padding: "20px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type of Grass</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={inputV.typeG}
                            label="Age"
                            onChange={(e) => setInputV({ ...inputV, typeG: e.target.value })}
                        >
                            <MenuItem value={"Natural Grass"}>Natural Grass</MenuItem>
                            <MenuItem value={"Artificial Turf"}>Artificial Turf</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={8} xs={12} sx={{ marginTop: '30px', margin: "auto", padding: "20px" }}>
                    <KeyWords keywords={inputV.facilities} handelSetKeywords={handelSetKeywords} />
                </Grid>
                <Grid item xs={12}>
                    <h1 className="mt-5 font-bold text-lg">Stadium Images </h1>
                    <ImageUpload
                        setState={setImages}
                        initial={inputV.images}
                        submited={submited}
                    />
                </Grid>
                <h1 className="mt-10 font-bold text-lg">Stadium Details </h1>
                <Grid
                    item
                    lg={8}
                    xs={12}
                    sx={{ margin: "auto", marginTop: "2rem" }}
                >
                    <div className="mt-5">
                        <ReactQuill
                            theme="snow"
                            value={inputV.details}
                            onChange={handleChange}
                        />
                    </div>
                </Grid>
            </Grid>

            <div className="mt-10 w-full flex items-center justify-center">
                <button className="btn btn-outline btn-error " onClick={handleAddStadium}>
                    {id ? "Update" : "Add"}
                </button>
            </div>
        </div>
    );
};

export default AddStadium;
