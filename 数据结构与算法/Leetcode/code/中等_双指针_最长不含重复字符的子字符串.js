var lengthOfLongestSubstring = function(s) {
    var hash = {}, maxLen = 0, [l, r] = [0, 0];
    for (; r < s.length; r++) {
        if (hash[s[r]] == undefined || hash[s[r]] < l) hash[s[r]] = r;
        else {
            maxLen = r - l > maxLen ? r - l : maxLen;
            l = hash[s[r]] + 1;
            hash[s[r]] = r;
        }
    }
    return r - l > maxLen ? r - l : maxLen;
};