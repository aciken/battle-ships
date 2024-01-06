// shipObj.js
function Ship(length, w, h) {
    let hitNum = 0;

    let sunkState = false;
  
    const hit = () => {
      hitNum++;
      console.log(hitNum)
      isSunk()
    }

    const showHit = () =>{
      console.log(hitNum)
    }
    
    const isSunk = () => {
      if (hitNum === length) {
        console.log('sunk');
        sunkState = true;
      } else {
        console.log('not sunk');
      }
    }
  
    return { length, hitNum, hit, isSunk, showHit ,w,h,sunkState };
  }
  
  export default Ship;