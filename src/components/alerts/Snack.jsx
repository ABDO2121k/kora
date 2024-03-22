import { Snackbar } from '@mui/material'
import { Button } from 'bootstrap'


const Snack = ({open,setOpen,color,text}) => {
  return (
    <>
    <Snackbar
    variant="soft"
    color={color}
    open={open}
    onClose={() => setOpen(false)}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    endDecorator={
      <Button
        onClick={() => setOpen(false)}
        size="sm"
        variant="soft"
        color="success"
      >
        Dismiss
      </Button>
    }
  >
   {text}
  </Snackbar>
</>
  )
}

export default Snack