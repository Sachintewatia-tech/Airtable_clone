import './style.css'
import Videos from './Videos';
import { Button,Box,img } from '@chakra-ui/react';
import Withvideo from './forvideos';
import Footer from './footer';
// import WithSubnavigation from './Navbar';
function Home(){

    const styles = {
        display:'flex',width:"100%",margin:"auto",justifyContent:"space-around",
        padding:"50px",fontSize:'22px',fontWeight:'600',color:"rgb(96, 95, 95)",
    }

  return(
    <div>
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
            <div id='bring'>
                <div>
                    <h1>Bring all your data together</h1>
                </div>
                <div>
                    <h3>All your information. Always up to date. At your fingertips. Keep everything in sync across your organization.</h3>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'20px'}
                        fontWeight={700} as={'a'}
                        color={'white'}
                        bg={'#0768f8'}
                        borderRadius={'8px'} padding={'7px'} width={"auto"}
                        href={'/'} margin={'30px 0 30px 0 '}
                        _hover={{
                            bg: 'pink.300',
                        }}> Learn about Sync--
                    </Button>               
                 </div>
            </div>
            <div><img src="https://static.airtable.com/images/homescreen/homepage-sync.jpg" alt="image" /></div>

            <div className="home">
                <Withvideo h1={"Get Started Quikly"} h3={"Begin building on day one. Airtable’s pre-made templates and intuitive design help you tackle even your most complex needs, right away."} btn={"Sign Up for free"} />
                <Videos src={"https://static.airtable.com/images/homescreen/Homepage_Anim_05_GainPerspective_FINAL.mp4"}/>
            </div>

            <div style={{backgroundColor:"white"}} className="home2">
                <img height={500} width={600} src="https://static.airtable.com/images/homescreen/homepage-apps-dashboard.jpg"/>
                <Withvideo h1={"Transform how Team Works on Scale"} h3={"Discover deep integrations, advanced extensibility, expert support—everything your organization needs to reach new heights."} btn={"Explore Marketplace -->"} />
            </div>

            <div id='baker'>
                <div><img src="https://static.airtable.com/images/homescreen/homepage-bakerhughes-portrait.jpg" alt="image" /></div>
                <div>
                    Baker Hughes <br />
                    “A business transformation is really just a series of smaller changes rolling out one after the other. It’s about getting the right information to people when they need it. What started as an Airtable calendar very quickly became the solution that we use to manage everything.”
                    <br />
                    Stephanie <br />
                    VP of Global        Communications, Baker Hughes
                </div>
            </div>
            <div id='join'>
                <h1>300,000+ innovative companies use Airtable every day. Join them. </h1>
                <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'20px'}
                        fontWeight={700} as={'a'}
                        color={'white'}
                        bg={'#0768f8'}
                        borderRadius={'8px'} padding={'7px'} width={"auto"}
                        href={'/signup'} margin={'30px 0 30px 0 '}
                        _hover={{
                            bg: 'pink.300',
                        }}> Signup for free
                    </Button> 
                
            </div>
    </div>
<Footer/>
</div>
    )
}
export default Home;