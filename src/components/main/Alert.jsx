import { Alert } from "@mui/material";


const AlertM = ({severity,message}) => {
  return (
    <div className="p-3 mt-3">
      <Alert severity={severity}>
         {message}
      </Alert>
    </div>
  );
};

export default AlertM;
