import { Box, Divider, Grid, Typography } from "@mui/material";

export default function Faq() {
    return (
        <>
        <Grid container alignItems="center" justifyContent="flex-start">
            <Grid item xs={1}>
                <Divider variant="middle" sx={{width: "50%", borderBottomWidth: 5, bgcolor: "#FF6000", }}/>
            </Grid>
            <Grid item xs={5}>
                <Typography fontWeight={900} fontFamily="fira code" color="#FF6000" fontSize={85} sx={{textShadow: "rgba(255, 96, 0, 0.5) 5.00866px 5.00866px 0px, rgba(255, 96, 0, 0.3) 10.0173px 10.0173px 0px"}}>
                    FAQ
                </Typography>
            </Grid>
        </Grid>
        <Box mb={10}/>
        <Grid container spacing={20} alignItems="center" justifyContent="center">
            <Grid item>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    Question 1
                </Typography>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    Answer 1
                </Typography>
                <Box mb={10}/>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    Question 2
                </Typography>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    Answer 2
                </Typography>
            </Grid>
            <Grid item>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    Question 3
                </Typography>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    Answer 3
                </Typography>
                <Box mb={10}/>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    Question 4
                </Typography>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    Answer 4
                </Typography>
            </Grid>
        </Grid>
        <Box height={300}/>
        <Grid container alignItems="center" justifyContent="center">
            <Grid item>
                <Typography fontWeight={900}textTransform="none" fontFamily="ibm plex mono" color="white" fontSize={30}>
                    Have other questions? Feel free to contact us!
                </Typography>
            </Grid>
           
        </Grid>
      </>
    );
}