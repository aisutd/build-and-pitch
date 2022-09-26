import { Box, Divider, Grid, Typography } from "@mui/material";

export default function Schedule() {
    return (
        <>
            <Grid container alignItems="center" justifyContent="flex-start">
                <Grid item xs={1}>
                    <Divider variant="middle" sx={{width: "50%", borderBottomWidth: 5, bgcolor: "#FF6000", }}/>
                </Grid>
                <Grid item xs={5}>
                    <Typography fontWeight={900} fontFamily="fira code" color="#FF6000" fontSize={85} sx={{textShadow: "rgba(255, 96, 0, 0.5) 5.00866px 5.00866px 0px, rgba(255, 96, 0, 0.3) 10.0173px 10.0173px 0px"}}>
                        SCHEDULE
                    </Typography>
                </Grid>
            </Grid>
            <Box mb={10}/>
            <Grid container justifyContent="space-evenly">
                <Grid item>
                    <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                        Time
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                        Event
                    </Typography>
                </Grid>
                <Divider orientation="vertical" sx={{bgcolor: "#00B9FF", height: 500}}/>
                <Grid item>
                    <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                        Time
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                        Event
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}