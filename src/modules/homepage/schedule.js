import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export default function Schedule() {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    const tablet = useMediaQuery(theme.breakpoints.up("sm"));
    const mobile = useMediaQuery(theme.breakpoints.up("xs"));
    const surface = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            <Grid container alignItems="center" justifyContent="flex-start">
                <Grid item xs={1}>
                    <Divider variant="middle" sx={{width: "50%", borderBottomWidth: 5, bgcolor: "#FF6000", }}/>
                </Grid>
                <Grid item xs={5}>
                    <Typography fontWeight={900} fontFamily="fira code" color="#FF6000" fontSize={desktop ? 85 : tablet ? 85 : 65} sx={{textShadow: "rgba(255, 96, 0, 0.5) 5.00866px 5.00866px 0px, rgba(255, 96, 0, 0.3) 10.0173px 10.0173px 0px"}}>
                        SCHEDULE
                    </Typography>
                </Grid>
            </Grid>
            <Box mb={10}/>
            <Grid container justifyContent="space-evenly">
                <Grid item>
                    <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                        Time
                    </Typography>
                    <Grid container height="500px" direction="column" justifyContent="space-around">
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                10am-11am
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                11am-11:30am
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                11:30am-12pm
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                12pm-6pm
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                        Event
                    </Typography>
                    <Grid container height="500px" direction="column" justifyContent="space-around">
                        <Grid item mt={0.7}>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                Sponsor booths
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                Keynote speakers<br/>
                                AIS introduction
                            </Typography>
                        </Grid>
                        <Grid item mb={2.5}>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                Group forming
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                Work on Pitch
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" sx={{bgcolor: "#00B9FF", height: 500, display: {xs: "none", md: "flex"}}}/>
                <Divider orientation="horizontal" sx={{bgcolor: "#00B9FF", width: "100%", display: {xs: 12, md: "none"}}}/>
                <Grid item mt={surface ? 0 : mobile && 5}>
                    <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                        Time
                    </Typography>
                    <Grid container height="500px" direction="column" justifyContent="space-around">
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                12:30pm
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                6pm-8pm
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                7pm
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                8pm-10pm
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item mt={surface ? 0 : mobile && 5}>
                    <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                        Event
                    </Typography>
                    <Grid container height="500px" direction="column" justifyContent="space-around">
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                Lunch
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                Judging
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                Dinner(Pizza)
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={desktop ? 30 : tablet ? 30 : 17}>
                                Movie
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}