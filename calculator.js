$(function(){
    var addButtonClicked = false;
    var subButtonClicked = false;
    var multButtonClicked = false;
    var divButtonClicked = false;

    $(".execute").click(function()
    {
        var mathClicked = addButtonClicked + subButtonClicked + multButtonClicked +divButtonClicked;
        var operandInput1 = $(".operand1").val();
        var operandInput2 = $(".operand2").val();



        if (operandInput1.length >= 1)
        {
            var operandArg1 = true;

            for (var i = 0; i < operandInput1.length; i++) 
            {
                var charCodeInput1i = operandInput1.charCodeAt(i);
                var operandArg1i = charCodeInput1i >= 48 && charCodeInput1i <= 57;
                // console.log(charCodeInput1i);
                // console.log(operandArg1i, "arg1i")
                if (operandArg1i === false) 
                {
                    operandArg1 = false;
                }
            }
        }
        else 
        {
            var operandArg1 = false; 
        }
        
        console.log(operandArg1, "operandArg1")

        if (operandInput2.length >= 1) {
            var operandArg2 = true;
        } 
        else {
            var operandArg2 = false;
            console.log("Nothing in operand2");
        }

        for (var i = 0; i < operandInput2.length; i++) {
            var charCodeInput2i = operandInput2.charCodeAt(i);
            var operandArg2i = charCodeInput2i >= 48 && charCodeInput2i <= 57;
            console.log(charCodeInput1i);
            console.log(operandArg2i, "arg2i")
            if (operandArg2i === false) {
                operandArg2 = false;
            }
        }
        console.log(operandArg2, "operandArg2")


         // if (operandInput1 && operandInput2 && mathClicked)
            if (operandArg1 && operandArg2 && mathClicked)
            {
            var operandInput1 = Number(operandInput1);
            var operandInput2 = Number(operandInput2);

            if (addButtonClicked === true)
            {
                var operandAddTotal = operandInput1 + operandInput2;
                $(".display").html(operandAddTotal);
                $(".history").append(operandInput1 + "+" + operandInput2 + " = " + operandAddTotal + "&nbsp;&nbsp;&nbsp;");
            }
            else if (subButtonClicked === true)
            {
                var operandSubTotal = operandInput1 - operandInput2;
                $(".display").html(operandSubTotal);
                $(".history").append(operandInput1 + "-" + operandInput2 + " = " + operandSubTotal + "&nbsp;&nbsp;&nbsp;"); //ask about white space
            }
            else if (multButtonClicked === true)
            {
                var operandMultTotal = operandInput1 * operandInput2;
                $(".display").html(operandMultTotal);
                $(".history").append(operandInput1 + "*" + operandInput2 + " = " + operandMultTotal + "&nbsp;&nbsp;&nbsp;");
            }
            else if (divButtonClicked === true)
            {
                // console.log(operandInput1 / operandInput2);
                var operandDivTotal = operandInput1 / operandInput2;
                $(".display").html(operandDivTotal);
                $(".history").append(operandInput1 + "/" + operandInput2 + " = " + operandDivTotal + "&nbsp;&nbsp;&nbsp;");
            }
            // console.log(operandInput2);
            setAllToFalse();
         }
         else
         {
            console.log("nothing entered");
         }
    });
    $(".add-button").click(function(){
        setAllToFalse();
        addButtonClicked = true;
    });
    $(".subtraction-button").click(function(){
        setAllToFalse();
        subButtonClicked = true;
    });
    $(".multiply-button").click(function(){
        setAllToFalse();
        multButtonClicked = true;
    });
    $(".division-button").click(function(){
        setAllToFalse();
        divButtonClicked = true;
    });

    function setAllToFalse()
    {
        addButtonClicked = false;
        subButtonClicked = false;
        multButtonClicked = false;
        divButtonClicked = false;
    }

    console.log("test");  
});




 
