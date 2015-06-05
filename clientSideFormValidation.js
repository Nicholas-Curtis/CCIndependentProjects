$(document).ready(function () {
    $("#submit").click(function () {
        var a = document.getElementById("q1").value;
        var b = document.getElementById("q2").value;
        var c = document.getElementById("q3").value;
        var d = document.getElementById("q4").value;
        var e = document.getElementById("q5").value;
        var f = document.getElementById("q6").value;
        if (a.length == 0) {
            alert("Question 1 cannot be left blank.");
            return false;
        }
        if (b.length == 0) {
            alert("Question 2 cannot be left blank.");
            return false;
        }
        if (c.length == 0) {
            alert("Question 3 cannot be left blank.");
            return false;
        }
        if (d.length == 0) {
            alert("Question 4 cannot be left blank.");
            return false;
        }
        if (e.length == 0) {
            alert("Question 5 cannot be left blank.");
            return false;
        }
        if (f.length == 0) {
            alert("Question 6 cannot be left blank.");
            return false;
        }
        //when radio buttons are checked, the value is an empty string. So to get the code to alert the user that they haven't answered the bonus question, you have to do something when the value of the radio button is not equal to an empty string (i.e. unchecked)
        var ans = [];
        ans.push(a.length);
        ans.push(b.length);
        ans.push(c.length);
        ans.push(d.length);
        ans.push(e.length);
        ans.push(f.length);
        var ans0 = ans[0];
        var ans1 = ans[1];
        var ans2 = ans[2];
        var ans3 = ans[3];
        var ans4 = ans[4];
        var ans5 = ans[5];
        if ((ans0 > 3) || (ans1 > 3) || (ans2 > 3) || (ans3 > 3) || (ans4 > 3) || (ans5 > 3)) {
            alert("Please make sure that the answer to each of your questions is either 'Yes' or 'No' please.");
        }
        if ((ans0 == 3 ) && (ans1 == 3) && (ans2 == 3) && (ans3 == 3) && (ans4 == 3) && (ans5 == 3)) {
            alert("Congrats! Based off of your courses, you can do IB!");
        }
        else if ((ans0 < 3) || (ans1 < 3) || (ans2 < 3) || (ans3 < 3) || (ans4 < 3) || (ans5 < 3)) {
            alert("I'm sorry, but based off of your courses, you cannot do IB.");
        }
    });
});
