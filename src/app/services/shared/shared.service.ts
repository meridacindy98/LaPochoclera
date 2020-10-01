import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  /* spliceArray */
  spliceArray( array, chunk_size ){
    let results: any[] = [];        
    while(array.length){
      results.push(array.splice(0,chunk_size));
    }
    return results;    
  }
}
