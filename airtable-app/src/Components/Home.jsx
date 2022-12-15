import './style.css'
import Videos from './Videos';
import { Button,Box } from '@chakra-ui/react';
import Withvideo from './forvideos';
function Home(){

    const styles = {
        display:'flex',width:"100%",margin:"auto",justifyContent:"space-around",
        padding:"50px",fontSize:'22px',fontWeight:'600',color:"rgb(96, 95, 95)",
    }

  return(
     <div id="cont">  

        <div className="home">
            <Withvideo h1={"Connect everything. Achieve anything."} h3={"Accelerate work and unlock potential with powerful apps that connect your data, workflows and teams. This is how."} btn={"Sign Up for free"} />
            <Videos src={"https://videos.ctfassets.net/wl95ljfippl8/4mknj7oTndciGSdFtTDjZq/adcfe61bb0700d98af81f1f47e72a787/Homepage_Brand_Video_May_2022_V2.mp4"}/>
        </div>

            <Box bg={'rgb(237, 235, 235)'} style={styles}>
                <div>COLE HAAN</div>
                <div>MEDIUM</div>
                <div>Expedia</div>
                <div>NETFLIX</div>
                <div>TIME</div>
                <div>Shopify</div>
            </Box>
            <div id="mirror">
                <h1>Create solutions that mirror your business</h1>
                <h3>Move work forward faster with no-code apps that perfectly match your team’s agility and scale.</h3>
            </div>

            <div style={{backgroundColor:"rgb(235, 228, 218)"}} className="home">
                <Withvideo h1={"Unite every stream of work"} h3={"Create a single source of truth that’s tailored precisely to how your teams work. Include everything you need, nothing you don’t."} btn={"Explore the product -->"} />
                <Videos src={"https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4"}/>
            </div>

            <div style={{backgroundColor:"rgb(235, 228, 218)"}} className="home2">
                <Videos src={"https://static.airtable.com/images/homescreen/Homepage_Anim_03_TurnInformation_FINAL.mp4"}/>
                <Withvideo h1={"Interface with work in a new way"} h3={"Create custom interfaces that give each and every teammate the relevant information they need, and a simple way to take action."} btn={"Learn more about Interface designer -->"} />
            </div>
    </div>
    )
}
export default Home;