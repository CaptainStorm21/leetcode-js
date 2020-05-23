// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return false.

// Hide Company Tags Facebook
// Hide Tags Sort
// Hide Similar Problems (H) Merge Intervals (M) Meeting Rooms II


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */

// 132 ms
var canAttendMeetings = function(intervals) {
    // sort by starting time
    intervals.sort((interval1, interval2)=> interval1.start > interval2.start ? 1 : -1);
    
    for(var i = 1; i < intervals.length; i++) {
        var pre = intervals[i-1];
        var cur = intervals[i];
        
        if(pre.end > cur.start) {
            return false;
        }
    }
    
    return true;
};



// second attempt

var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => {
        return a.start > b.start ? 1 : -1;
    });
    
    for(var i = 1; i < intervals.length; i++) {
        if(intervals[i - 1].end > intervals[i].start) {
            return false;
        }
    }
    
    return true;
};





//      ---------------------------------------------------
// Source : https://leetcode.com/problems/non-overlapping-intervals/
// Author : Han Zichi
// Date   : 2017-01-22

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (!intervals.length)
    return 0;

  // remove => find longest
  intervals.sort((a, b) => {
    if (a.start !== b.start)
      return a.start - b.start;
    else
      return a.end - b.end;
  });

  let dp = []
    , len = intervals.length;

  for (let i = 0; i < len; i++) {
    dp[i] = 1;
    for (let j = i; j--; ) {
      if (intervals[i].start < intervals[j].end)
        continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
      break;  // key break, greedy
    }
  }

  return len - Math.max(...dp);
};
