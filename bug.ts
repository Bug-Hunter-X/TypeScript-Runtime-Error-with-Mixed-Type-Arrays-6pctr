function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let myArray: number[] = [1, 2, 3, 4, 5];

printArray(myArray); //This works fine

let myStringArray: string[] = ['a', 'b', 'c', 'd', 'e'];

printArray(myStringArray); //This also works fine

let myMixedArray: (string | number)[] = ['a', 1, 'b', 2, 'c', 3];

printArray(myMixedArray); //This will throw an error in some cases depending on the runtime environment