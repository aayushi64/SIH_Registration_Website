import "./../App.css";


function Domains(){

const domains=[

"Healthcare",

"Agriculture",

"Education",

"Smart Automation",

"Cyber Security",

"Environment"

];


return(

<section id="domains" className="domains">


<h2>
Hackathon Domains
</h2>



<div className="domainGrid">


{

domains.map((domain,index)=>(

<div className="domainCard" key={index}>


<h3>
{domain}
</h3>


<p>

Develop innovative technology solutions
for real-world challenges.

</p>


</div>


))

}



</div>


</section>


)

}


export default Domains;