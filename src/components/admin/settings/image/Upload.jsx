import { Grid, IconButton, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../utils/firebase/firebase";


const Upload = ({ setState, initial, submited }) => {
  const [inputV, setInputV] = useState("");
  const [images, setImages] = useState();
  const handleDelete = () => {
    setImages("");
    setIsDis(false)
  };

  const inputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isDis, setIsDis] = useState(false)



  const handleImageChange = async (index) => {
    if (!inputRef.current.files[0]) return false;
    setImages([...images, "empty one hhhhh ana nadi wlh"]);
    setIsLoading({ is: true, index: index });
    const file = inputRef.current.files[0];
    const ref2 = ref(storage, `images/${file.name}${new Date()}`);
    await uploadBytes(ref2, file);
    const url = await getDownloadURL(ref2);
    inputRef.current.value = "";
    setImages(url);
    setIsDis(true)
    return setIsLoading(false);
  };



  useEffect(() => {
    setState(images)
  }, [images])

  useEffect(() => {
    if (submited) {
      setInputV("")
      inputRef.current.value = ""
    }
  }, [submited])

  useEffect(() => {
    setImages(initial);
    console.log({ images, initial })
  }, [initial]);

  return (
    <>
      <Grid item xs={12}>
        <div className="mt-5 flex w-full justify-around  flex-col sm:flex-row">
          <div className="w-full sm:w-[70%] mt-4">
            <TextField
              id="image"
              name="image"
              label="Image Url"
              fullWidth
              autoComplete="given-name"
              className="w-full"
              value={inputV}
              onInput={(e) => setInputV(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <button
              className="btn btn-outline btn-success"
              type="button"
              onClick={() => {
                setIsDis(true)
                inputV != "" && setImages(inputV);
                setInputV("");
              }}
              disabled={isDis}
            >
              Add Section Image
            </button>
          </div>
        </div>
        <div className="divider">OR</div>
        <div className="mt-5 flex w-full justify-around  flex-col sm:flex-row">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            ref={inputRef}
          />
          <div className="mt-3">
            <button
              className="btn btn-outline btn-success"
              type="button"
              onClick={() => handleImageChange(images?.length || 0)}
              disabled={isDis}
            >
              Add Section Image
            </button>
          </div>
        </div>
      </Grid>
      <Grid
        container
        className="bg-gradient-to-r from-[#ff1744] to-blue-400 rounded-md flex items-center justify-center mt-10"
      >
        {images &&
          <Grid
            item
            lg={3}
            xs={6}
            sm={4}
            className="rounded-md overflow-hidden relative"
          >
            {isLoading.is ? (
              <div className="h-[10rem] w-full rounded-md p-3 mx-3 flex items-center justify-center bg-gray-200 opacity-40">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            ) : (
              <>
                <div
                  className="h-full w-full rounded-md p-3 "
                  draggable
                >
                  <IconButton
                    className="w-full absolute top-0 right-0 z-10"
                    onClick={() => handleDelete()}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <img
                    src={images}
                    alt={`section Image`}
                    className="object-fill h-[10rem] w-[20rem] rounded-md"
                  />
                </div>
              </>
            )}
          </Grid>
        }
      </Grid>

    </>
  );
};

export default Upload;
