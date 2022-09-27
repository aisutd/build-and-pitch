import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

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
                    <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                        Time
                    </Typography>
                    <Grid container height="500px" direction="column" justifyContent="space-around">
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                10am-11am
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                11am-11:30am
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                11:30am-12pm
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                12pm-6pm
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                        Event
                    </Typography>
                    <Grid container height="500px" direction="column" justifyContent="space-around">
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                Sponsor booths
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                Keynote speakers<br/>
                                AIS introduction
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                Group forming
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                Work on Pitch
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" sx={{bgcolor: "#00B9FF", height: 500}}/>
                <Grid item>
                    <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                        Time
                    </Typography>
                    <Grid container height="500px" direction="column" justifyContent="space-around">
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                12:30pm
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                6pm-8pm
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                7pm
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                8pm-10pm
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                        Event
                    </Typography>
                    <Grid container height="500px" direction="column" justifyContent="space-around">
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                Freebirds
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                Judging
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                Dinner(Pizza)
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography fontWeight={900} textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                                Movie
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}