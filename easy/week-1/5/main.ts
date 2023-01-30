export function isPalindrome(s: string): boolean {
  let answer = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  return answer.split("").reverse().join("") == answer;
}
