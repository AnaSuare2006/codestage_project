document.getElementById("inp").addEventListener("input", function () {

    var input = document.getElementById("inp").value;
    console.log(input);
    let ok1 = 0, ok2=0, ok3=0, ok4=0;

    if (input.length >= 5) {
        ok1 = 1;
    }
    for(i=0; i<=input.length-1; i++)
    {
        if((input[i]>='a') && (input[i]<='z'))
        {
            ok2=1;
        }
        if((input[i]>='A') && (input[i]<='Z'))
        {
            ok3=1;
        }
        if((input[i]>='0') && (input[i]<='9'))
        {
            ok4=1;
        }
    }
    console.log(ok1);
    console.log(ok2);
    console.log(ok3);
    console.log(ok4);
    if(ok1==1)
    {
        document.getElementById("1").style.color = "#006400";
    }
    else
    {
        document.getElementById("1").style.color = "#ff0000";
    }


    if(ok2==1)
    {
        document.getElementById("2").style.color = "#006400";
    }
    else
    {
        document.getElementById("2").style.color = "#ff0000";
    }


    if(ok3==1)
    {
        document.getElementById("3").style.color = "#006400";
    }
    else
    {
        document.getElementById("3").style.color = "#ff0000";
    }


    if(ok4==1)
    {
        document.getElementById("4").style.color = "#006400";
    }
    else
    {
        document.getElementById("4").style.color = "#ff0000";
    }
})