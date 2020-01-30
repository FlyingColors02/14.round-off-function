let totalMarks= 34.55;

if(totalMarks!==0 && totalMarks>=35)//fail
{
    console.log("pass");

}
else{
    console.log("fail");
}
//result should be pass.
///////////////////////////////////////////////////////////////////////////////


totalMarks=Math.round(totalMarks);  //using round-off function
if(totalMarks!==0 && totalMarks>=35)//pass
{
    console.log("pass");

}
else{
    console.log("fail");
}
//using Math.round function can convert float to int.