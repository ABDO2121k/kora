
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Backdrop, CircularProgress, Grid, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { myContext } from '../../../../context/GlobalContext';
import toast from 'react-hot-toast';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    maxHeight: "80vh",
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
};

export default function CardModal({ open, setOpen, type, cardId, setCounter, counter }) {
    const handleClose = () => setOpen(false);
    const [inputV, setInputV] = useState("");
    const [editorHtml, setEditorHtml] = useState("");
    const context = useContext(myContext)
    const [loading, setLoading] = useState(false)

    const handleChange = (html) => {
        setEditorHtml(html);
    };


    const handleAddCard = async () => {
        try {
            setLoading(true);
            const data = { title: inputV, text: editorHtml };
            if (type == "add") {
                setInputV("");
                setEditorHtml("");
            }
            let res;
            if (type == "add") {
                res = await context?.addCard(data);
            } else {
                res = await context?.updateCard(cardId, data)
            }
            setCounter(Math.random())
            toast.success(res.message);

            setTimeout(() => {
                handleClose()
            }, 1000);
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
                const news1 = await context?.getOneCard(cardId)
                setInputV(news1?.title)
                setEditorHtml(news1?.text)

            } catch (err) {
                console.log(err)
                toast.error(err.message)
            }
            return setInterval(() => {
                setLoading(false);
            }, 1000);
        }
        if (type == "edit" && open == true) {
            fetchData()
        }
    }, [cardId])
    return (
        <div>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1111 }}
                open={loading}
            >
                <CircularProgress style={{ color: "#ff1744" }} />
            </Backdrop>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className="mb-4 text-lgd  break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
                        {type == "edit" ? " Edit Card " : " Add new Card "}  :
                    </h1>
                    <Grid container>
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
                    <div className="mt-10 w-full flex items-center justify-center">
                        <button className="btn btn-outline btn-error " onClick={handleAddCard}>
                        {type == "edit" ? " Edit " : " Add "}  
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}