export function isPalindrome(s: string): boolean {
  let answer = s.replace(/[^a-z]/gi, "").toLowerCase();

  return answer.split("").reverse().join("") == answer;
}
