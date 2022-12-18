import './style.css';
import Price from './price';
import Footer from './footer';
import {Box} from '@chakra-ui/react'
function Pricing(){
    const styles = {
        display:'flex',width:"100%",margin:"auto",justifyContent:"space-around",
        padding:"50px",fontSize:'22px',fontWeight:'600',color:"rgb(96, 95, 95)",
    }
    return(
        <>
            <div id="plan">Sign up today and try the Pro plan for free</div>
            <div id="pricing">
                <div id="choose"><h1>Choose the perfect plan for your team’s needs</h1></div>
                <Price/>
                <Box bg={'rgb(237, 235, 235)'} style={styles}>
                    <div>COLE HAAN</div>
                    <div>MEDIUM</div>
                    <div>Expedia</div>
                    <div>NETFLIX</div>
                    <div>TIME</div>
                    <div>Shopify</div>
                </Box>
                <div style={{margin:"auto",marginTop:"60px",marginBottom:"60px"}}>
                    <h1 style={{fontSize:"25px",fontWeight:"650",marginBottom:"40px"}}>Have additional questions?</h1>
                    
                    <div style={{display:"flex",width:"60%",margin:"auto",justifyContent:"space-around"}}>

                    <div style={{fontSize:"20px",fontWeight:"500"}}>
                        <p>BILLING / PRICING</p>
                        <h2 style={{color:"red"}}>Billing FAQ</h2>
                    </div>
                    <div style={{fontSize:"20px",fontWeight:"500"}}>
                        <p>BILLING / PRICING</p>
                        <h2 style={{color:"red"}}>Billing FAQ</h2>
                    </div>
                    <div style={{fontSize:"20px",fontWeight:"500"}}>
                        <p>BILLING / PRICING</p>
                        <h2 style={{color:"red"}}>Billing FAQ</h2>
                    </div>
                    </div>
                </div>
            </div>
                <Footer/>   
        </>
    )
}

export default Pricing;