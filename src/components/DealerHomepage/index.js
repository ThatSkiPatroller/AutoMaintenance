import React from 'react'
import ServicesOffered from "../../components/ServicesOffered/index"
import DealerCard from "../../components/DealerCard/index"
import { Grid, Box } from '@material-ui/core'

export default function DealerHome() {

    const theme = {
        spacing: 8,
    }
    return (
        <div>
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
