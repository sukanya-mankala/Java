package activities;
import java.util.*;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Random;
//import java.util.Scanner;

public class Activity13 {

	public static void main(String[] args)  {
		// TODO Auto-generated method stub

		Scanner scan =new Scanner(System.in);
		ArrayList<Integer> list =new ArrayList<Integer>();
		Random indexGen =new Random();
		
		
		   System.out.print("Enter integers please ");
	        System.out.println("(EOF or non-integer to terminate): ");
		
		while(scan.hasNextInt()) {
			list.add(scan.nextInt());
		}
		
		Integer nums[] =list.toArray(new Integer[0]);
		int index=indexGen.nextInt(nums.length);
		System.out.println("The random index generated is " +index);
		System.out.println("The value in random index is " +nums[index]);
		scan.close();
		
		
		
	}

}
