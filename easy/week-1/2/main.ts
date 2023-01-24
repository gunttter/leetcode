export function isValid(s: string): boolean {
  if (s.length % 2 != 0) {
    return false;
  }

  let stck: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      stck.push(s[i]);
    } else {
      let last = stck.pop();

      switch (s[i]) {
        case ")":
          if (last != "(") {
            return false;
          }
          break;
        case "]":
          if (last != "[") {
            return false;
          }
          break;
        case "}":
          if (last != "{") {
            return false;
          }
          break;
      }
    }
  }
  if (stck.length > 0) {
    return false;
  }
  return true;
}
