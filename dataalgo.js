let form = document.getElementById('form');

let input = document.getElementById('input');


let insertElement = document.getElementById('insertElement');
let insertPosition = document.getElementById('insertPosition');

let deletElement = document.getElementById('deletElement');
let deletPosition = document.getElementById('deletPosition');

let search = document.getElementById('search');

let arrange = document.getElementById('arrange');

let add = document.getElementById('add');

let submit = document.getElementById('submit');

let sol = document.getElementById('sol');
let sol1 = document.getElementById('sol1');

submit.addEventListener('click',function(no){
	



if(input.value && insertPosition.value && insertElement.value){
	if( deletElement.value || deletPosition.value || search.value || arrange.value || add.value){
		alert('please select one operation');
	}
	else if(insertPosition.value>input.value.length){
	alert('Your entered position is more then total elements');
    }
    else{
                   let arr1 = [];
                   for(let i=0;i<insertPosition.value-1;i++){
                          
                        arr1.push(input.value[i]);       
                   }
                   arr1.push(insertElement.value);
                  
                   for(let i=insertPosition.value-1;i<input.value.length;i++){
                          
                        arr1.push(input.value[i]);       
                   }
                
                   sol.innerText=arr1;
                   sol1.innerText='';

    }
} 









else if(input.value && deletPosition.value && deletElement.value){
	if( insertElement.value || insertPosition.value || search.value || arrange.value || add.value){
		alert('please select one operation');
	}
	else if(deletPosition.value>input.value.length || deletElement.value !== input.value[deletPosition.value-1]){
	alert('Your entered position not match with element');
    }

    else{
    	      let arr2=[];
              for(let i=0;i<input.value.length;i++){
                  if(i!==deletPosition.value-1){
              	  arr2.push(input.value[i]);
                  } 
              } 
              sol.innerText=arr2;
              sol1.innerText='';

    }
} 











else if(input.value && search.value){
	if( deletPosition.value || deletElement.value || insertElement.value || insertPosition.value  || arrange.value || add.value){
		alert('please select one operation');
	}


    else{
    	    let arr3 = [];
    	  for(i=0;i<input.value.length;i++){
    	  	if(input.value[i]==search.value){
    	  		arr3.push(i+1);
    	  	}
    	  }
    	  sol.innerText=arr3;
    	  sol1.innerText='';
    	  if(arr3==0){
    	  	alert('your search value is not present in value box')
    	  }
    }
} 












else if(input.value && arrange.value){
	if( deletPosition.value || deletElement.value || insertElement.value || insertPosition.value  || search.value || add.value){
		alert('please select one operation');
	}


    else{
         

         let arr4a = [];
    	     let arr41 = [];
    	if(arrange.value=='Ascending'){
    	     
    	    for(let i = 0;i<input.value.length;i++){
    	    	if(isNaN(input.value[i])){
    	    		arr4a.push(input.value[i]);
    	    	}
    	    	else if(!isNaN(input.value[i])){
    	    		arr41.push(input.value[i]);
    	    	}
    	    }
    	    sol.innerText=arr4a.sort();
    	    sol1.innerText=arr41.sort();
    	}
    	else if(arrange.value=='Descending'){


    	    for(let i = 0;i<input.value.length;i++){
    	    	if(isNaN(input.value[i])){
    	    		arr4a.push(input.value[i]);
    	    	}
    	    	else if(!isNaN(input.value[i])){
    	    		arr41.push(input.value[i]);
    	    	}
    	    }

    		
              sol.innerText=arr4a.sort().reverse();
              
              sol1.innerText=arr41.sort().reverse();
    	}

    }
} 


















else if(input.value && add.value){
	if( deletPosition.value || deletElement.value || insertElement.value || insertPosition.value  || arrange.value || search.value){
		alert('please select one operation');
	}


    else{
    	   
    	 let arr5=[];
    	 arr5.push(input.value);
    	 arr5.push(add.value);
    	 sol.innerText=arr5.join('');
    	 sol1.innerText='';
    }
} 








else{
	alert('please fill require values');
}
no.preventDefault();
});