function validate()
{
    let fname=document.f1.fname.value;
    let lname=document.f1.lname.value;
    let phone=document.f1.phone.value;
    let email=document.f1.email.value;
    let address=document.f1.address.value;
    let alphaexp=/^[a-zA-Z ]+$/;
    let numexp=/^[0-9]+$/;
    let emailexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let addressexp=/^[a-zA-Z0-9 -]+$/;
    let status1=status2=status3=status4=status5=false;
    if(fname=="")
    {
        //alert('enter fname')
        document.getElementById('fnameNote').innerHTML="please enter your fname";
        status1= false;
    }
    else
    {
        if(fname.match(alphaexp))
        {
            document.getElementById('fnameNote').innerHTML="";
            status1=true;
        }
        else
        {
            document.getElementById('fnameNote').innerHTML="enter characters only";

        }
    }
    if(lname=="")
    {
        //alert('enter lname')
        document.getElementById('lnameNote').innerHTML="please enter your lname";
        status2=false;
    }
    else
    {
        if(lname.match(alphaexp))
        {
            document.getElementById('lnameNote').innerHTML="";
            status2=true;
        }
        else
        {
            document.getElementById('lnameNote').innerHTML="enter characters only";
        }
    }

    if(phone=="")
    {
        document.getElementById('phoneNote').innerHTML="enter your phone number";
        status3=false;
    } 
    else
    {
        if(phone.match(numexp))
        {
            if(phone.length==10)
            {
                if(phone.charAt(0)==9)
                {
                    document.getElementById('phoneNote').innerHTML="";
                    status3=true;
                }
                else
                {
                    document.getElementById('phoneNote').innerHTML="number starts with 9 only";
                }
            }
            else
            {
                document.getElementById('phoneNote').innerHTML="enter 10 digit number only";
                status3=false;
            }
        }
        else
        {
            document.getElementById('phoneNote').innerHTML="enter numbers only";
            status3=false;
        }
    }

    if(email=="")
    {
        document.getElementById('emailNote').innerHTML="enter your email id";
        status4=false;
    }
    else
    {
        if(email.match(emailexp))
        {
            document.getElementById('emailNote').innerHTML="";
            status4=true;
        }
        else
        {
            document.getElementById('emailNote').innerHTML="enter valid email id";
            status4=false; 

        }
    }
    if(address=="")
    {
        document.getElementById('addressNote').innerHTML="enter your address";
        status5=false;
    }
    else
    {
        if(address.match(addressexp))
        {
            document.getElementById('addressNote').innerHTML="";
            status5=true;
        }
        else
        {
            document.getElementById('addressNote').innerHTML="enter valid address";
            status5=false; 

        }
    }

    if(status1==true && status2==true && status3==true && status4==true && status5==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}
