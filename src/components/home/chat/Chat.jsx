import { useContext, useRef, useState } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { IconButton, TextareaAutosize } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import ChatItem from "./ChatItem";
import { myContext } from "../../../context/GlobalContext";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const context = useContext(myContext);
  const [inputV, setInputV] = useState();
  const [conversation, setConversation] = useState([]);
  const [isDisabled,setIsDisabled]=useState(false)

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const scrollRef = useRef();

  // hadi dial scorll
  const refScroll = () => {
    setTimeout(() => {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 500);
  };

  const handleChangeInput = (e) => {
    setInputV(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!inputV) return alert("Input empty !!!");
      setIsDisabled(true)
      let msg=inputV
      setInputV("")
      const messages = [
        { role: "user", message: inputV },
        { role: "assistant", message: "" },
      ];
      setConversation([...conversation, ...messages]);
      refScroll();
      const updatedConversation = [...conversation, ...messages];
      updatedConversation.pop();
  
      const res = await context?.senMessage( msg);
      setConversation([
        ...updatedConversation,
        { message: res, role: "assistant" },
      ]);
      refScroll();
    } catch (err) {
      console.log(err);
      const updatedConversation = [...conversation];
      updatedConversation.pop();
      setConversation([
        ...updatedConversation,
      ]);
       alert(err.message);
    }
    return setIsDisabled(false)
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
          transition: "right 0.3s ease-in-out",
        }}
      >
        <IconButton
          className={`rounded-lg`}
          onClick={toggleChatbot}
          sx={{
            background: "#ff1744",
            padding: { sm: "10px", md: "15px", lg: "1rem" },
            "&:hover": {
              opacity: 0.7,
              background: "#ff1744",
            },
          }}
        >
          {showChatbot ? <CloseIcon /> : <ChatBubbleIcon />}
        </IconButton>
      </div>
      {showChatbot && (
        <div
          className="h-screen md:h-[70%] md:w-[420px] sm:h-full w-full bg-white shadow-xl rounded-md fixed bottom-0 right-0 md:bottom-20 md:right-5"
          style={{
            zIndex: "1000",
            transition: "right 0.3s ease-in-out",
          }}
        >
          <div
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <header>
              <div className="bg-[#ff1744] rounded-md w-full flex flex-col justify-center items-center px-5 sm:px-2">
                <SmartToyIcon
                  className="bx bx-support text-white"
                  style={{ fontSize: "2.5rem" }}
                />
                <h2 className="text-xl font-bold text-center text-white">
                  Contact Details
                </h2>
              </div>
              <CloseIcon
                className="absolute top-0 right-0  close-btn material-symbols-outlined md:z-[-1] z-[100] cursor-pointer"
                sx={{ fontSize: "2rem" }}
                onClick={toggleChatbot}
              />
            </header>
            <Box
              ref={scrollRef}
              sx={{
                flex: "1",
                width: "100%",
                paddingY: "3%",
                borderRadius: "10px",
                mx: "auto",
                overflow: "auto",
                bgcolor: "#ffffff",
              }}
            >
              {conversation?.map((item, i) => (
                <ChatItem key={i} role={item.role} message={item.message} />
              ))}
            </Box>
            <div className="chatbot chat-input flex items-center w-full bg-white border-t border-gray-300 p-3">
              <TextareaAutosize
                placeholder="Enter a message..."
                className="w-full border-none outline-none resize-none h-14 p-3 text-base"
                spellCheck="false"
                required
                onChange={handleChangeInput}
                value={inputV}
              />
              <IconButton onClick={handleSubmit} disabled={isDisabled}>
                <SendIcon />
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
