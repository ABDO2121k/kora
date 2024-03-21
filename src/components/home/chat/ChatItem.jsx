import SmartToyIcon from "@mui/icons-material/SmartToy";

const ChatItem = ({role,message}) => {
  return (
    <div>
      <div className={`chat ${role == "user" ? "chat-end" : "chat-start"}`}>
        {role == "assistant" && (
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <SmartToyIcon className="p-3" style={{ fontSize: "3rem" }} />
            </div>
          </div>
        )}
        <div
          className={`chat-bubble ${
            role === "assistant" ? "bg-[#ff1744] bg-opacity-70" : ""
          } w-[70%] whitespace-pre-wrap overflow-hidden`}
        >
          {message == "" ? (
            <span className="loading loading-dots loading-md">{message}</span>
          ) : (
            message
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
