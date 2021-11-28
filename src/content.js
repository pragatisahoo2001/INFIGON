import React from "react";
import pic1 from "./Dashboard template 02.png";
import pic2 from "./Dashboard template 01.png";
import pic3 from "./Dashboard template 03.png";
import SelfAna from "./self_ana";
const Content=()=>{
    return(
        <div className="content">
        <div className="line"></div>
        <div className="content2">
        <div className="heading">How we can help</div>
        <div className="cont">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellat odio id enim eius esse illo, ipsa eum distinctio eveniet fugiat ad reprehenderit repudiandae, aspernatur maiores nam qui saepe sunt nemo ut architecto.</div>
        <SelfAna qty="1"></SelfAna>
        <SelfAna qty="2"></SelfAna>
        <SelfAna qty="3"></SelfAna>
        <SelfAna qty="4"></SelfAna>
        </div>
        <div className="images">
       
        <img className="pic2" src={pic2} height="370px"/>
        <img className="pic1" src={pic1} height="430px"/>
        <img className="pic3" src={pic3} height="370px"/>
        </div>
        </div>
    )
};
export default Content; 