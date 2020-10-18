const printSegitiga =(number)=>{
	for (let i=0;i<number;i++){
	  let results =''
	  for(let j=0;j<(number*2)-1;j++){
		if(i===0){
		  results +='o '
		}
		else if(i===j){
		  results +='o '
		}
		else if(j===2*number-2-i){
		  results +='o '
		}
		else{
		  results +='  '
		}
	  }
	  console.log(results)
	}
  }
  printSegitiga(6)