import { Box, Button, Grid, Typography } from "@mui/material";
import neonOrange from "../../images/NeonOrange.svg";
import neonBlue from "../../images/NeonBlue.svg"
import "@fontsource/fira-code";
import "@fontsource/ibm-plex-mono";

export default function BuildandPitch() {
    return (
        <Grid container wrap="nowrap" spacing={0} alignItems="center" justifyContent="center">
            <Grid item xs="none" mt="-50px" mb="20px">
                <img src={neonOrange} width={250}/>
            </Grid>
            <Grid item textAlign="center" mt="100px">
                <div style={{display: "flex", marginBottom: "10px"}}>
                    <Typography fontSize={85} fontFamily="fira code" fontWeight={900} sx={{textShadow: "rgba(255, 96, 0, 0.5) 5.00866px 5.00866px 0px, rgba(255, 96, 0, 0.3) 10.0173px 10.0173px 0px", color: "#FF6000", display: "inline-block"}}>
                        BUILD
                    </Typography>
                    <Typography ml="20px" mr="20px" fontSize={85} fontFamily="fira code" fontWeight={900} sx={{textShadow: "rgba(207, 207, 207, 0.5) 5.00866px 5.00866px 0px, rgba(207, 207, 207, 0.3) 10.0173px 10.0173px 0px", color: "#cfcfcf", display: "inline-block"}}>
                        AND
                    </Typography>
                    <Typography fontSize={85} fontFamily="fira code" fontWeight={900} sx={{textShadow: "rgba(0, 185, 255, 0.5) 5.00866px 5.00866px 0px, rgba(0, 185, 255, 0.3) 10.0173px 10.0173px 0px", color: "#00b9ff", display: "inline-block"}}>
                        PITCH
                    </Typography>
                </div>
                <Typography fontFamily="ibm plex mono" fontSize={24} color="white">
                    slogan? small description?
                </Typography>
                <div style={{marginTop: "30px"}}>
                    <Button variant="contained" onClick={() => window.open('https://coda.io/form/Build-and-Pitch-2022_dF8Q6d7GrwA', '_blank')} style={{backgroundImage: "linear-gradient(to right, #FF3C5F, #FF6000)", borderRadius: "40px", width: "200px", height: "60px"}}>
                        <Typography textTransform="none" fontFamily="ibm plex mono" color="black" fontWeight="900" fontSize="20px">
                            Register Now
                        </Typography>
                    </Button>
                </div>
            </Grid>
            <Grid item mb="-320px" ml="-30px">
                <img src={neonBlue} width={250}/>
            </Grid>
        </Grid>
    );
}