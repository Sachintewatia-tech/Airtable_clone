export default function Videos({src}){
    return(
        <div>
            <video  playsInline autoPlay loop muted width="750" height="500" >
                 <source src={src} type="video/mp4"/>
                </video>
        </div>
    )
}