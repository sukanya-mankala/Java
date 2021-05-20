package activities;

import java.util.*;

public class Activity2 {
    public static void main(String[] args) {
        //Initialize the array
        int[] numArr = {10, 77, 20, 54, -11, 10};
       System.out.println("Original Array: " + Arrays.toString(numArr));
      //  System.out.println("Original Array: " + numArr);
        
        //Set constants
        int searchNum = 10;
        int fixedSum = 30;

        //Print result
        System.out.println("Result: " + result(numArr, searchNum, fixedSum));
    }

    public static boolean result(int[] numbers, int searchNum, int fixedSum) {
        int temp_sum = 0;
        //Loop through array
        for (int number : numbers) {
            //If value is 10
            if (number == searchNum) {
                //Add them
                temp_sum += searchNum;
            }

            }

        //Return true if condition satisfies
        return temp_sum == fixedSum;
    }
}