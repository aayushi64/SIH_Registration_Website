import "./../App.css";
import {useEffect,useState} from "react";


function Hero(){

const [count,setCount]=useState(12458);


const [time,setTime]=useState({

days:12,
hours:8,
minutes:34,
seconds:20

});


useEffect(()=>{


const timer=setInterval(()=>{


setTime(prev=>{


let sec=prev.seconds-1;

let min=prev.minutes;

let hrs=prev.hours;

let day=prev.days;



if(sec<0){

sec=59;
min--;

}


if(min<0){

min=59;
hrs--;

}



if(hrs<0){

hrs=23;
day--;

}


return{

days:day,
hours:hrs,
minutes:min,
seconds:sec

}


})


},1000);



const counter=setInterval(()=>{

setCount(prev=>{

if(prev<15000)
return prev+5;

return prev;

})


},100);



return()=>{

clearInterval(timer);
clearInterval(counter);

}


},[]);



return(

<section id="home" className="hero">


<div className="heroContent">


<h1>
Smart India Hackathon 2026
</h1>


<h2>
Innovate • Build • Transform
</h2>


<p>

India's biggest innovation platform where students
create technology solutions for real-world problems.

</p>



<div className="heroStats">


<div>

<h3>
{count}+
</h3>

<p>
Registered Students
</p>

</div>



<div>

<h3>
500+
</h3>

<p>
Problem Statements
</p>

</div>



<div>

<h3>
72 Hrs
</h3>

<p>
Hackathon
</p>

</div>


</div>



<h3 className="countdownTitle">

Registration Ends In

</h3>


<div className="countdown">


<div>
{time.days}
<span>
Days
</span>
</div>


<div>
{time.hours}
<span>
Hours
</span>
</div>


<div>
{time.minutes}
<span>
Minutes
</span>
</div>


<div>
{time.seconds}
<span>
Seconds
</span>
</div>


</div>




<a href="#registration">

<button>
Register Now
</button>

</a>



</div>





<div className="registerCard">


<h2>
Registration Status
</h2>


<h1>
🟢 ACTIVE
</h1>






<h4>
Seats Available: 15000 Teams
</h4>


<a href="#registration">

<button>
Join SIH 2026
</button>

</a>



</div>



</section>

)

}


export default Hero;