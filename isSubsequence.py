class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if s == "":
            return True
        if len(s) > len(t):
            return False
        sp, tp = 0, 0
        while sp < len(s):
            if t[tp] == s[sp]:
                sp += 1
            tp += 1
            if sp == len(s):
                return True
            if tp == len(t):
                return False
