import { Grid } from '@mui/material'
import React from 'react'
import Calender from '../../../components/admin/planing/calender/Calender'

const Planing = () => {
  return (
    <div>
      <Grid sx={12}>
          <Calender/>
      </Grid>
    </div>
  )
}

export default Planing