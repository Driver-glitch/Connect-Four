
let player = 1;
let winner = 0;
let colors = {};
colors[-1] = "yellow";
colors[1] = "red";
let count = 0;



    $().ready(function()
      
{

    $(".cell").each(function()
{

$(this).attr("id", count);
$(this).attr("players-data", 0);
        count++;

$(this).click(function()
    {
                  if(counting($(this).attr("id")))
{
$(this).css("background-color", colors[player]);
$(this).attr("players-data", player);
        

                 if(checkWinner(player))
{
alert(colors[player] + " has won!");
        winner = player;}

             
{
        player *= -1;

}
              
            
};
});

                  function counting(n)
{
let id = parseInt(n);

if(winner !== 0)
{
return false;
}

if($("#" + id).attr("players-data") === "0")
{

if(id >= 35)
{
return true;
}
            
                  if($("#" + (id + 7)).attr("players-data") !== "0")
{
         return true;
}
}
        return false;
}

//check rows



                   function checkWinner(p){
        
    let checkRow = 0; 

                   for(let i = 0; i < 42; i += 7)
{
                   for(let k = 0; k < 7; k++)

{ let cell = $("#" + (i + k));

                   if(cell.attr("players-data") == p)
{
        checkRow++;
}
else
{
     checkRow = 0;
}

                   if(checkRow >= 4)
{

 return true;
}
}
    checkRow = 0;
}

        //check columns
        
                    for(let i = 0; i < 7; i++)
{
                    for(let k = 0; k < 42; k += 7)

{      let cell = $("#" + (i + k));

                    if(cell.attr("players-data") == p){
            checkCol++;
}
else
{
            checkCol = 0;
}
                    if(checkCol >= 4)
{  
return true;

}
}
checkCol = 0;
}
   
let topLeft = 0;
let topRight = topLeft + 3;
                    for(let i = 0; i < 3; i++)
{
                    for(let k = 0; k < 4; k++)
{
                    if($("#" + topLeft).attr("players-data") === p
&& $(".cell" + (topLeft + 8)).attr("players-data") == p
&& $(".cell" + (topLeft + 16)).attr("players-data") == p
&& $(".cell" + (topLeft + 24)).attr("players-data") == p)
{

return true;
}
                     if($(".cell" + topRight).attr("players-data") === p

&& $(".cell" + (topRight + 6)).attr("players-data") == p
&& $(".cell" + (topRight + 12)).attr("players-data") == p
&& $(".cell" + (topRight + 18)).attr("players-data") == p)
{

return true;
}

topLeft++;
topRight = topLeft + 3;
}
topLeft = i * 7 + 7;
topRight = topLeft + 3;
}
        
return false;
}
});

})
