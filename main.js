function calculate()
{
  var lefts = document.getElementsByClassName("left");
  var rights = document.getElementsByClassName("right");

  var leftTotal = 0;
  var rightTotal = 0;

  for(var x=0; x<lefts.length; x++)
  {
    leftTotal += Number(lefts[x].value);
  }

  for(var x=0; x<rights.length; x++)
  {
    rightTotal += Number(rights[x].value);
  }

  var leftRightTotal = rightTotal + leftTotal;

  if(leftRightTotal < 0)
  {
    sessionStorage.setItem("leftRight","Left-wing");
  }
  else
  {
    sessionStorage.setItem("leftRight","Right-wing");
  }

  var ups = document.getElementsByClassName("up");
  var downs = document.getElementsByClassName("down");

  var upTotal = 0;
  var downTotal = 0;

  for(var x=0; x<ups.length; x++)
  {
    upTotal += Number(ups[x].value);
  }

  for(var x=0; x<downs.length; x++)
  {
    downTotal += Number(downs[x].value);
  }

  var upDownTotal = upTotal + downTotal;

  if(upDownTotal < 0)
  {
    sessionStorage.setItem("upDown","Libertarian");
    if(sessionStorage.getItem("leftRight") === "Left-wing")
    {
      sessionStorage.setItem("backgroundColor","green");
    }
    else
    {
      sessionStorage.setItem("backgroundColor","purple");
    }
  }
  else
  {
    sessionStorage.setItem("upDown","Authoritarian");
    if(sessionStorage.getItem("leftRight") === "Left-wing")
    {
      sessionStorage.setItem("backgroundColor","red");
    }
    else
    {
      sessionStorage.setItem("backgroundColor","#00adf2");
    }
  }

  window.location.href = "results.html";
}

function displayResult()
{
  var result = document.getElementById("result");
  result.innerHTML = "Your result is: " + sessionStorage.getItem("leftRight") + " " + sessionStorage.getItem("upDown");

  document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor");
  document.documentElement.style.backgroundColor = sessionStorage.getItem("backgroundColor");

}
