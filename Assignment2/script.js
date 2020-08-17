function find()
{
    var store=document.getElementById("search").value;
    if(store===""||"all")
    {
        document.getElementById("mac").style.display="block";
        document.getElementById("cup").style.display="block";
        document.getElementById("cak").style.display="block";
    }
    if(store==="sweet")
    {
        document.getElementById("cup").style.display="none";
        document.getElementById("cak").style.display="none";
    }
    if(store==="cupcake")
    {
        document.getElementById("mac").style.display="none";
        document.getElementById("cak").style.display="none";
    }
    if(store==="cake")
    {
        document.getElementById("mac").style.display="none";
        document.getElementById("cup").style.display="none";
    }
    if(store==="macaron")
    {
        document.getElementById("cup").style.display="none";
        document.getElementById("cak").style.display="none";
    }

}
function filter1()
{
        document.getElementById("mac").style.display="block";
        document.getElementById("cup").style.display="block";
        document.getElementById("cak").style.display="block";
}

function filter2()
{
    document.getElementById("mac").style.display="block";
    document.getElementById("cup").style.display="none";
    document.getElementById("cak").style.display="none";
}
function filter3()
{
    document.getElementById("cup").style.display="block";
    document.getElementById("mac").style.display="none";
     document.getElementById("cak").style.display="none";
}
function filter4()
{
    document.getElementById("cak").style.display="block";
    document.getElementById("cup").style.display="none";
    document.getElementById("mac").style.display="none";
}
function filter5()
{
    document.getElementById("mac").style.display="block";
    document.getElementById("cup").style.display="none";
    document.getElementById("cak").style.display="none";
}
