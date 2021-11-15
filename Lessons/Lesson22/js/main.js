let a = [2,1,345,6,666,678,45,55];
console.log(a);
bubbleSort(a);
console.log(a);
function bubbleSort(array)
{
    var length = array.length;
    for(var i=0;i< length;i++)
    {
        for(var j=0; j < length;j++)
        {
            if(array[j] > array[j+1])
            {   
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
var searchArray = new Array();
function search(imageData, name)
{
    var images = new Array();
     imageData.pokemons.forEach(element => {
         if(element.name.toUpperCase().startsWith(name.toUpperCase()) )
         {
             images.push(element);
         }
     });
     return images;
}

console.log(imageData);
function searchImage()
{
    var searchKey = document.getElementById('imageSearch').value;
    if(searchKey){
        searchArray = search(imageData,searchKey);
        drawPokimon(searchArray);
    }
    else
    {
        searchArray = imageData.pokemons; 
        drawPokimon(imageData.pokemons);
    }
}
function drawPokimon(arrayImage)
{
    var container = document.getElementById('imageContainer');
    container.innerHTML ="";
    for(var i=0; i< arrayImage.length;i++)
    {
        var url = arrayImage[i].art_url;
        
        var div = document.createElement('div');
        div.className = "imageItem";
        var strong = document.createElement('strong');
        strong.innerText = arrayImage[i].name;
        strong.classList = "title";
        strong.id = "title";
        div.appendChild(strong);
        
        var image = document.createElement('img');
        image.src= url;
        image.className = "image";
        div.appendChild(image);
        
        container.appendChild(div);
    }
}
function showTitle(arrayImage)
{
    var title = document.querySelectorAll('#title');
    var showtitle = document.getElementById('showTitle');
    for(var i=0; i< title.length;i++)
    {
       if(showtitle.checked  == true)
       {
           title[i].classList.add("show");
       }
       else{
        title[i].classList.remove("show");
       }
    }
}