import { Grid, IconButton, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../utils/firebase/firebase";


const ImageUpload = ({ setState, initial, submited }) => {
  const [inputV, setInputV] = useState("");
  const [images, setImages] = useState([]);
  const handleDelete = (index) => {
    let t = images.filter((walo, i) => i !== index);
    setImages(t);
  };

  const drag = useRef();
  const drag2 = useRef();
  const inputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);



  // const handleImageChange = async (index) => {
  //   if (!inputRef.current.files[0]) return false;
  //   setImages([...images, "empty one hhhhh ana nadi wlh"]);
  //   setIsLoading({ is: true, index: index });
  //   const file = inputRef.current.files[0];
  //   const ref2 = ref(storage, `images/${file.name}${new Date()}`);
  //   await uploadBytes(ref2, file);

  //   const url = await getDownloadURL(ref2);
  //   inputRef.current.value = "";
  //   // let imageCopy=[...images]
  //   // images[index]=url
  //   setImages([...images, url]);
  //   return setIsLoading(false);
  // };


  function ClickHandler(){
        
     
        
    if(img !== null){ 
        const imgRef = ref(imageDb, files/${v4()})
        uploadBytes(imgRef,img).then((value)=>{
            console.log(value)
            //END*************
            getDownloadURL(value.ref).then(url=>{ 
                //console.log(url)                               
                setCurCl((data)=>{return{...data, photo : url}})//.then((x)=>{setDb((data)=>{return[...data, x]})})
                setTimeout(function(){setDb((data)=>{return[...data, curCl]})}, 10000);

            })
            
        })

        
        }}

  const handleSort = () => {
    let newOrder = [...images];
    let mbdl = newOrder[drag.current];
    newOrder[drag.current] = newOrder[drag2.current];
    newOrder[drag2.current] = mbdl;
    setImages(newOrder);
  };

  useEffect(() => {
    if (initial?.length > 0) setImages(initial);
  }, [initial]);

  useEffect(() => {
    setState(images)
  }, [images])

  useEffect(() => {
    if (submited){
      setImages([])
      setInputV("")
      inputRef.current.value=""
    } 
  }, [submited])

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
                inputV != "" && setImages([...images, inputV]);
                setInputV("");
              }}
              disabled={isLoading?.is}
            >
              Add News Image
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
              disabled={isLoading?.is}
            >
              Add News Image
            </button>
          </div>
        </div>
      </Grid>
      <Grid
        container
        className="bg-gradient-to-r from-[#ff1744] to-blue-400 rounded-md flex items-center mt-10"
      >
        {images?.map((image, i) => (
          <Grid
            item
            key={i}
            lg={3}
            xs={6}
            sm={4}
            className="rounded-md overflow-hidden relative"
          >
            {isLoading.is && isLoading.index == i ? (
              <div className="h-[10rem] w-full rounded-md p-3 mx-3 flex items-center justify-center bg-gray-200 opacity-40">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            ) : (
              <>
                <div
                  className="h-full w-full rounded-md p-3 "
                  draggable
                  onDragStart={() => (drag.current = i)}
                  onDragEnter={() => (drag2.current = i)}
                  onDragEnd={handleSort}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <IconButton
                    className="w-full absolute top-0 right-0 z-10"
                    onClick={() => handleDelete(i)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <img
                    src={image}
                    alt={`product image ${i + 1}`}
                    className="object-fill h-[10rem] w-[20rem] rounded-md"
                  />
                </div>
              </>
            )}
          </Grid>
        ))}
      </Grid>

    </>
  );
};

export default ImageUpload;
