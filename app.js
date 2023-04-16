(async function (){
    const response = await fetch('data.json');
    const respjson = await response.json();
   
    console.log(respjson.title)
    var data =''
    respjson.forEach(function(resp){
           
        data += `  <div class="col-xl-4 col-sm-6 mb-5">
        <div class="card2 rounded shadow-sm py-5 px-4"><img src="" alt="" width="10" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
            <h5 class="mb-0">${resp.title}</h5><span class="small text-uppercase text-muted">${resp.vote_average}/10</span>
            <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item">${resp.genres}</li>
                <li class="list-inline-item">${resp.original_language}</li>
                <li class="list-inline-item">${resp.certification}</li>
                <li class="list-inline-item">${resp.release_date}</li>
                
            </ul>
            <h5 class="list-inline-item">${resp.tagline}</h5>
        </div>
    </div>`
     })
    
     document.getElementById('html').innerHTML=data;
   
       
    const genre = document.getElementById('genre');
    const year = document.getElementById('year');
    const language = document.getElementById('language');
    const rating = document.getElementById('rating');
    const search1 =document.getElementById('submitbtn');
   
    function displaySearch(results){
        var data =''

        var dataLength =''
        dataLength +=`<h2>Showing ${results.length} results</h2> <br/>`
        results.forEach(function(resp){
           
           data += `  <div class="col-xl-4 col-sm-6 mb-5">
           <div class="bg-white rounded shadow-sm py-5 px-4"><img src="${resp.poster_path}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
               <h5 class="mb-0">${resp.title}</h5><span class="small text-uppercase text-muted">${resp.vote_average}/10</span>
               <ul class="social mb-0 list-inline mt-3">
                   <li class="list-inline-item">${resp.genres}</li>
                   <li class="list-inline-item">${resp.original_language}</li>
                   <li class="list-inline-item">${resp.certification}</li>
                   <li class="list-inline-item">${resp.release_date}</li>
               </ul>
           </div>
       </div>`
        })
        document.getElementById('htmlLength').innerHTML=dataLength;
        document.getElementById('html').innerHTML=data;
    }
    function capitalizeFirstLetter(str) {

        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    
        return capitalized;
    }

    function search(){
        // const genreQuery = genre.value.charAt(0).toUpperCase() + genre.slice(1);
        const genreQuery=capitalizeFirstLetter(genre.value)
        const yearQuery = year.value;
        const languageQuery = capitalizeFirstLetter(language.value);
        const ratingQuery = rating.value;
    //    console.log(genreQuery,ratingQuery)
    console.log(genreQuery)
       const results = respjson.filter(function (resp){
        return (resp.genres.includes(genreQuery))&&
    ( resp.release_date.includes(yearQuery))&&
    ( resp.original_language.includes(languageQuery))&&
    (resp.vote_average.toString().includes(ratingQuery))
         
           
                
       });
       displaySearch(results)
       console.log(results.length)


    }
 search1.addEventListener("click",search)
    
})();
