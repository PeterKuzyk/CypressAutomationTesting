class BasicAlgorithms {
    // 1. Reverse a String
    static reverseString(str) {
        return str.split('').reverse().join('');
    }

    // 2. Check if a Number is Prime
    static isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 3. Factorial of a Number
    static factorial(num) {
        if (num === 0) return 1;
        return num * BasicAlgorithms.factorial(num - 1);
    }

    // 4. Check if a String is a Palindrome
    static isPalindrome(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    }

    // 5. Find the Largest Number in an Array
    static findLargest(arr) {
        return Math.max(...arr);
    }

    // 6. Fibonacci Sequence up to `n` Terms
    static fibonacci(n) {
        const sequence = [0, 1];
        for (let i = 2; i <= n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence;
    }

    // 7. Find the Sum of all Elements in an Array
    static arraySum(arr) {
        return arr.reduce((sum, num) => sum + num, 0);
    }

    // 8. Find the Intersection of Two Arrays
    static arrayIntersection(arr1, arr2) {
        return arr1.filter(num => arr2.includes(num));
    }

    // 9. Count Vowels in a String
    static countVowels(str) {
        const vowels = 'aeiouAEIOU';
        return str.split('').filter(char => vowels.includes(char)).length;
    }

    // 10. FizzBuzz
    static fizzBuzz(n) {
        const result = [];
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
            else if (i % 3 === 0) result.push("Fizz");
            else if (i % 5 === 0) result.push("Buzz");
            else result.push(i);
        }
        return result;
    }

    // 11. Check if a Number is Even
    static isEven(num) {
        return num % 2 === 0;
    }

    // 12. Find the GCD (Greatest Common Divisor) of Two Numbers
    static gcd(a, b) {
        if (!b) return a;
        return BasicAlgorithms.gcd(b, a % b);
    }

    // 13. Find the LCM (Least Common Multiple) of Two Numbers
    static lcm(a, b) {
        return (a * b) / BasicAlgorithms.gcd(a, b);
    }

    // 14. Remove Duplicates from an Array
    static removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    // 15. Sort an Array in Ascending Order
    static sortArray(arr) {
        return arr.sort((a, b) => a - b);
    }

    // 16. Check if Two Strings are Anagrams
    static areAnagrams(str1, str2) {
        const normalize = str => str.toLowerCase().split('').sort().join('');
        return normalize(str1) === normalize(str2);
    }

    // 17. Convert Celsius to Fahrenheit
    static celsiusToFahrenheit(celsius) {
        return celsius * 9 / 5 + 32;
    }

    // 18. Convert Fahrenheit to Celsius
    static fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // 19. Find the Power of a Number (Exponentiation)
    static power(base, exponent) {
        return Math.pow(base, exponent);
    }

    // 20. Generate a Random Integer between Min and Max
    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Example Usage
console.log("reverseString: " + BasicAlgorithms.reverseString("hello"));               // Output: "olleh"
console.log("isPrime: " + BasicAlgorithms.isPrime(17));                          // Output: true
console.log("factorial: " + BasicAlgorithms.factorial(5));                         // Output: 120
console.log("isPalindrome: " + BasicAlgorithms.isPalindrome("racecar"));              // Output: true
console.log("findLargest: " + BasicAlgorithms.findLargest([10, 50, 20, 7]));         // Output: 50
console.log("fibonacci: " + BasicAlgorithms.fibonacci(7));                         // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log("arraySum: " + BasicAlgorithms.arraySum([1, 2, 3]));                  // Output: 6
console.log("arrayIntersection: " + BasicAlgorithms.arrayIntersection([1, 2], [2, 3]));    // Output: [2]
console.log("countVowels: " + BasicAlgorithms.countVowels("hello world"));           // Output: 3
console.log("fizzBuzz: " + BasicAlgorithms.fizzBuzz(15));                         // Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", ...]
console.log("isEven: " + BasicAlgorithms.isEven(4));                            // Output: true
console.log("gcd: " + BasicAlgorithms.gcd(24, 36));                          // Output: 12
console.log("lcm: " + BasicAlgorithms.lcm(5, 12));                           // Output: 60
console.log("removeDuplicates: " + BasicAlgorithms.removeDuplicates([1, 2, 2, 3]));       // Output: [1, 2, 3]
console.log("sortArray: " + BasicAlgorithms.sortArray([4, 1, 3, 2]));              // Output: [1, 2, 3, 4]
console.log("areAnagrams: " + BasicAlgorithms.areAnagrams("listen", "silent"));      // Output: true
console.log("celsiusToFahrenheit: " + BasicAlgorithms.celsiusToFahrenheit(25));              // Output: 77
console.log("fahrenheitToCelsius: " + BasicAlgorithms.fahrenheitToCelsius(77));              // Output: 25
console.log("power: " + BasicAlgorithms.power(2, 3));                          // Output: 8
console.log("randomInt: " + BasicAlgorithms.randomInt(1, 10));                     // Output: Random integer between 1 and 10
