
    $(function(){

      // First Set Data in Attribute


        $("#yourID").each(function(k, v){
            if($(v).text() === "Products By Industry"){
                $(v).attr("href", "address");
            }
        });
      
      
      // Response time set 
        
        $("#yourID  a").on("click", function(){
            if($(this).text() === "Products By Industry"){
            
                setTimeout(function(){
                    window.open("address", '_blank');
                }, 3000)
            }
        })
    });
