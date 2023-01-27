// given an array

// return a number if the there is a recurring charater, if there multiple return the first
// return undefined in no recurrig character

function firstRecurringCharacter(input) {
  // create a map object
  // loop thorugh array
  // check if element is on map
  // if not, add element to map
  // else return element
  const map = {};

  for (let num of input) {
    if (!map[num]) {
      map[num] = num;
    } else if (map[num]) {
      return num;
    }
  }
  return undefined;
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter([2, 3, 4, 5]);
firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]);

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
//[2,5,5,2,3,5,1,2,4]
//return 5 because the pairs are before 2,2
