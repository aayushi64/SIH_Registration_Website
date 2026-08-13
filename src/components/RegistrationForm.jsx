import {useState} from "react";
import "./../App.css";


function RegistrationForm(){

const [step,setStep]=useState(1);

const [payment,setPayment]=useState("");



return(

<section id="registration" className="registration">


<div className="registrationBox">


<h1>
SIH 2026 Registration Dashboard
</h1>



<div className="progress">


<div className={step>=1?"activeStep":""}>
Details
</div>


<div className={step>=2?"activeStep":""}>
Team
</div>


<div className={step>=3?"activeStep":""}>
Payment
</div>


<div className={step===4?"activeStep":""}>
Done
</div>


</div>





{/* STEP 1 */}


{
step===1 &&

<div className="formStep">


<h2>
Participant Details
</h2>


<input 
placeholder="Full Name"
/>


<input 
placeholder="Email Address"
/>


<input 
placeholder="Phone Number"
/>


<input 
placeholder="College Name"
/>


<input 
placeholder="Branch"
/>


<select>

<option>
Select Year
</option>

<option>
1st Year
</option>

<option>
2nd Year
</option>

<option>
3rd Year
</option>

<option>
4th Year
</option>

</select>



<button onClick={()=>setStep(2)}>
Next
</button>


</div>

}





{/* STEP 2 */}



{
step===2 &&

<div className="formStep">


<h2>
Team Details
</h2>



<input 
placeholder="Team Name"
/>


<input 
placeholder="Team Leader Name"
/>


<input 
placeholder="Member 2"
/>


<input 
placeholder="Member 3"
/>


<input 
placeholder="Member 4"
/>


<textarea
placeholder="Problem Statement / Idea"
></textarea>



<button onClick={()=>setStep(3)}>
Proceed To Payment
</button>


</div>

}






{/* STEP 3 */}



{
step===3 &&

<div className="formStep">


<h2>
Payment
</h2>



<h1 className="fee">
₹50
</h1>



<p>
Scan QR Code To Pay Registration Fee
</p>



<img
src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://sih2026.com"
alt="Payment QR"
style={{
  width:"160px",
  height:"160px",
  objectFit:"contain",
  background:"white",
  padding:"10px",
  borderRadius:"15px",
  display:"block",
  margin:"20px auto"
}}
/>


<h3>
Transaction Completed?
</h3>



<label>

<input

type="radio"

name="payment"

value="yes"

onChange={(e)=>setPayment(e.target.value)}

/>

Yes

</label>



<label>

<input

type="radio"

name="payment"

value="no"

onChange={(e)=>setPayment(e.target.value)}

/>

No

</label>



<br/><br/>




{
payment==="yes" &&

<>

<p>
Upload Payment Screenshot
</p>


<input

type="file"

/>


<button onClick={()=>setStep(4)}>

Complete Registration

</button>


</>

}



{
payment==="no" &&

<p className="warning">

Please complete payment before registration.

</p>

}



</div>

}






{/* STEP 4 */}



{
step===4 &&

<div className="success">


<h1>
🎉 Registration Completed
</h1>


<p>

Thank you for registering for
Smart India Hackathon 2026.

</p>


</div>

}




</div>


</section>


)

}


export default RegistrationForm;