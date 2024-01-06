// shipObj.js
function Ship(length, w, h) {
    let hitNum = 0;
  
    const hit = () => {
      hitNum++;
      console.log(hitNum)
    }

    const showHit = () =>{
      console.log(hitNum)
    }
    
    const isSunk = () => {
      if (hitNum === length) {
        console.log('sunk');
      } else {
        console.log('not sunk');
      }
    }
  
    return { length, hitNum, hit, isSunk, showHit ,w,h };
  }
  
  export default Ship;