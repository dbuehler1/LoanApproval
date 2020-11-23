$(document).ready(function () {
    $("sub").submit(determineLoan);

    var myRules =
        {
            salary:
                {
                    required: true,
                    digits: true,
                    min: 1,
                    max: 5000000
                },
            creditscore:
                {
                    required: true,
                    digits: true,
                    min: 300,
                    max: 850
                },
            jobMonths:
                {
                    required: true,
                    digits: true,
                    min: 0,
                    max: 400
                }

        };


    var myMessages =
        {
            salary: "Please Enter Valid Salary",
            creditscore: "Enter Valid Credit Score(300-850)",
            jobMonths: "Enter Valid Number of Months"
        };


    $("form").validate(
        {
            submitHandler: determineLoan,
            rules: myRules,
            messages: myMessages
        }
    );

    function determineLoan(){
        event.preventDefault();
        var loanApproval;
        var salary = $("#salary").val();
        var creditScore = $("#creditscore").val();
        var months = $("#jobMonths").val();

        if(salary >= 40000){
            if(creditScore >= 600){
                loanApproval = true;
            }
            else{
                if(months > 12){
                    loanApproval = true;
                }
                else{
                    loanApproval = false;
                }
            }
        }
        else{
            if(creditScore >= 600){
                if(months > 12){
                    loanApproval = true;
                }
                else{
                    loanApproval = false;
                }
            }
            else{
                loanApproval = false;
            }
        }
        if(loanApproval == true){
            $("#Approval").text("Your loan has been approved");
        }
        else if(loanApproval == false){
            $("#Approval").text("Your loan has been denied");
        }
        else{
            $("#Approval").text("Please Enter Valid Information into all fields");
        }
    }


})