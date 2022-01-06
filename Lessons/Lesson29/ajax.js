// fetch
const url =  "https://disease.sh/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_all";
$.getJSON(url);
$("#solve").click(function(){
    $("#target1").css("background-color","red");
    $("#target2").children("span").text("I change it");
    $("div .target4:nth-child(2)").css("background-color","red");
    $("div .target5 button").prop('disabled',true);
    $('div .target6 input[type="checkbox"]').prop("checked",false);
    $('#parent1 #child').detach().appendTo('#parent2');
    $('#target8 input[type="text"]').prop('readonly', true);
    $('#target10').width(function(n,c){
        return c * 2;
    }).height(function(n,c){
        return c *2;
    });
    $("#target9 select  option:eq(1)").prop("selected",true);
});