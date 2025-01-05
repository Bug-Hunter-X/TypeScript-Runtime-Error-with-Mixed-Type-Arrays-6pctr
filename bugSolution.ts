function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      console.log(arr[i] * 2); //Perform some number operation
    } else if (typeof arr[i] === 'string') {
      console.log(arr[i].toUpperCase()); //Perform some string operation
    } else {
      console.log(`Unknown type: ${typeof arr[i]}`);
    }
  }
}

let myArray: number[] = [1, 2, 3, 4, 5];

printArray(myArray);

let myStringArray: string[] = ['a', 'b', 'c', 'd', 'e'];

printArray(myStringArray);

let myMixedArray: (string | number)[] = ['a', 1, 'b', 2, 'c', 3];

printArray(myMixedArray); 