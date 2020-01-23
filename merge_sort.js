let Arr = [8,1,7,2,6,3,5,4];
let steps = 0;
const mergeSort = (In)=>{
  let Out = [];
    if(In.length<=1){
    	steps++;
      //single items, return as is.
      Out = In;
    }else if(In.length==2){    	
    	steps++;
      //sort 1 to 1 and return
      Out  = In[0] <= In[1] ? In : [In[1], In[0]];  
    }else{    	 
    	let midPt = Math.ceil(In.length/2);
      let L = mergeSort(In.slice(0, midPt));
      let R = mergeSort(In.slice(midPt)); 
  		let LCheck;
      let RCheck; 
      if(R[0] == 3){
         console.log('A:', L, R)
      }
          
      for(i=0; i<L.length; i++){      	
      	for(j=0; j<R.length; j++){        	
        	if(R[j]!==null){
          	steps++;
            if(L[i] <= R[j]){
            	//if current L <= current R, push L and break inner loop
              Out.push(L[i]);
              L[i] = null;          
              break;
            }else{
            	//if current L > current R, push R and continue inner loop
              Out.push(R[j]);
              R[j] = null;              
            }
          }
        }
        LCheck = L.filter((el)=>{
        	return el !== null;
        });
        RCheck = R.filter((el)=>{
        	return el !== null;
        });        
        if(LCheck.length==0){        
        	// if no more numbers on Left side, push rest of right side to out put
        	 steps++;
           Out = Out.concat( RCheck );
           break;
        }else if(RCheck.length==0){
        	// if no more numbers on Right side, push rest of Left side to out put
        	 steps++;
           Out = Out.concat( L.slice(i) );
           break;
        }
      }
    }
    return Out;
}
alert(`Result: ${mergeSort(Arr)}\nSteps: ${steps}`);

