import React from 'react'
import Navbar from "../../components/Navbar/index"
import ServicesOffered from "../../components/ServicesOffered/index"
import DealerCard from "../../components/DealerCard/index"
import { Grid, Box } from '@material-ui/core'

export default function DealerHome() {

    const theme = {
        spacing: 8,
    }
    return (
        <div>
            <Navbar />

            <Box mt="4rem">
                <Grid
                container direction="row"
                justify="space-evenly"
                alignItems="center">
                    <ServicesOffered />
                    <DealerCard />
                </Grid>
            </Box>
        </div>
    )
}
