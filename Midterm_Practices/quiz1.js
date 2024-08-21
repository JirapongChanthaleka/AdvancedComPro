function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map();  
    let start = 0;  
    let maxLen = 0;  
    let longestSubstring = "";  

    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];

        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1;
        }

        charIndexMap.set(currentChar, end);

        let currentLen = end - start + 1;
        if (currentLen > maxLen) {
            maxLen = currentLen;
            longestSubstring = s.slice(start, end + 1);
        }
    }

    return { maxLen, longestSubstring };
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb"));
// Output: { maxLen: 3, longestSubstring: "abc" }

console.log(lengthOfLongestSubstring("bbbbb"));
// Output: { maxLen: 1, longestSubstring: "b" }

console.log(lengthOfLongestSubstring("pwwkew"));
// Output: { maxLen: 3, longestSubstring: "wke" }

console.log(lengthOfLongestSubstring(""));
// Output: { maxLen: 0, longestSubstring: "" }
