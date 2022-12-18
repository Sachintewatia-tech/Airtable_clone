import Footer from "./footer";

function Price(){
    const styles = {
        margin:" 70px auto 70px auto",
        // marginTop:"70px",
        height:"auto",
        display:"flex",
        justifyContent:"space-between",
        width:"100%",gap:"13px"
    }
    return(
        <div style={styles}>
             <div>
            <div style={{backgroundColor:"pink",fontSize:"22px",fontWeight:"700",padding:"12px"}}><h1>Enterprise</h1></div>
                <p style={{fontStyle:"italic"}}>For departments and organizations who need a secure, scalable, and customizable connected apps platform to stay aligned and move work forward</p>
                <h3 style={{fontSize:"3rem",backgroundColor:"azure"}}>$20</h3>
                <p style={{backgroundColor:"azure"}}>per seat/month billed annually</p>
                <button style={{backgroundColor:"aqua",padding:"10px 30px 10px 30px",marginTop:"15px",borderRadius:"20px",fontSize:"25px"}}>Try for Free</button>
                <h1 style={{fontSize:"20px",fontWeight:"bolder",marginTop:"10%",backgroundColor:"rgb(199, 220, 220)"}}>Everything in Plus, plus</h1>
                <ul style={{textAlign:"left",backgroundColor:"rgb(199, 220, 220)"}}>
                    <li> 10 extensions per base</li>
                   <li> 7 sync integrations including Jira Cloud</li>
                   <li> 50,000 records per base</li>
                   <li> 20GB of attachments per base</li>
                   <li> Gantt & Timeline Views</li>
                   <li> Granular interface permissions</li>
                   <li> 1-year revision & snapshot history</li>
                   <li> Personal & locked views</li>
                   <li> Field & table editing permissions</li>
                </ul>
            </div>

            <div>
            <div style={{backgroundColor:"lightGreen",fontSize:"22px",fontWeight:"700",padding:"12px"}}><h1>Enterprise</h1></div>
                <p style={{fontStyle:"italic"}}>For departments and organizations who need a secure, scalable, and customizable connected apps platform to stay aligned and move work forward</p>
                <h3 style={{fontSize:"3rem",color:"white",backgroundColor:"black"}}>$30</h3>
                <p style={{backgroundColor:"black",color:"white"}}>per seat/month billed annually</p>
                <button style={{backgroundColor:"aqua",padding:"10px 30px 10px 30px",marginTop:"15px",borderRadius:"20px",fontSize:"25px"}}>Try for Free</button>
                <h1 style={{fontSize:"20px",fontWeight:"bolder",marginTop:"10%",backgroundColor:"rgb(199, 220, 220)"}}>Everything in Plus, plus</h1>
                <ul style={{textAlign:"left",backgroundColor:"rgb(199, 220, 220)"}}>
                    <li> 10 extensions per base</li>
                   <li> 7 sync integrations including Jira Cloud</li>
                   <li> 50,000 records per base</li>
                   <li> 20GB of attachments per base</li>
                   <li> Gantt & Timeline Views</li>
                   <li> Granular interface permissions</li>
                   <li> 1-year revision & snapshot history</li>
                   <li> Personal & locked views</li>
                   <li> Field & table editing permissions</li>
                </ul>
            </div>

            <div>
            <div style={{backgroundColor:"brown",fontSize:"22px",fontWeight:"700",padding:"12px"}}><h1>Enterprise</h1></div>
                <p style={{fontStyle:"italic"}}>For departments and organizations who need a secure, scalable, and customizable connected apps platform to stay aligned and move work forward</p>
                <h3 style={{fontSize:"3rem",backgroundColor:"azure"}}>$55</h3>
                <p style={{backgroundColor:"azure"}}>per seat/month billed annually</p>
                <button style={{backgroundColor:"aqua",padding:"10px 30px 10px 30px",marginTop:"15px",borderRadius:"20px",fontSize:"25px"}}>Try for Free</button>
                <h1 style={{fontSize:"20px",fontWeight:"bolder",marginTop:"10%",backgroundColor:"rgb(199, 220, 220)"}}>Everything in Plus, plus</h1>
                <ul style={{textAlign:"left",backgroundColor:"rgb(199, 220, 220)"}}>
                    <li> 10 extensions per base</li>
                   <li> 7 sync integrations including Jira Cloud</li>
                   <li> 50,000 records per base</li>
                   <li> 20GB of attachments per base</li>
                   <li> Gantt & Timeline Views</li>
                   <li> Granular interface permissions</li>
                   <li> 1-year revision & snapshot history</li>
                   <li> Personal & locked views</li>
                   <li> Field & table editing permissions</li>
                </ul>
            </div>

            <div>
            <div style={{backgroundColor:"red",fontSize:"22px",fontWeight:"700",padding:"12px"}}><h1>Enterprise</h1></div>
                <p style={{fontStyle:"italic"}}>For departments and organizations who need a secure, scalable, and customizable connected apps platform to stay aligned and move work forward</p>
                <h3 style={{fontSize:"3rem",color:"white",backgroundColor:"black"}}>Free</h3>
                <p style={{backgroundColor:"black",color:"white"}}>per seat/month billed annually</p>
                <button style={{backgroundColor:"aqua",padding:"10px 30px 10px 30px",marginTop:"15px",borderRadius:"20px",fontSize:"25px"}}>Try for Free</button>
                <h1 style={{fontSize:"20px",fontWeight:"bolder",marginTop:"10%",backgroundColor:"rgb(199, 220, 220)"}}>Everything in Plus, plus</h1>
                <ul style={{textAlign:"left",backgroundColor:"rgb(199, 220, 220)"}}>
                    <li> 10 extensions per base</li>
                   <li> 7 sync integrations including Jira Cloud</li>
                   <li> 50,000 records per base</li>
                   <li> 20GB of attachments per base</li>
                   <li> Gantt & Timeline Views</li>
                   <li> Granular interface permissions</li>
                   <li> 1-year revision & snapshot history</li>
                   <li> Personal & locked views</li>
                   <li> Field & table editing permissions</li>
                </ul>
            </div>
        </div>
    )
}

export default Price;