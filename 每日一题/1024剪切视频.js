//https://leetcode-cn.com/problems/video-stitching/
// 剪切视频    leetcode-1024
/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
const videoStitching = (clips, T) => {
    clips.sort((a, b) => a[0] - b[0]); // 按开始时间从小到大排序
    // dp[j]：涵盖[0:j]需要的clip的最少个数，目标是求dp[T]，初始值为101，大于所有可能值
    const dp = new Array(T + 1).fill(101);
    dp[0] = 0;        // base case
  
    for (let i = 0; i < clips.length; i++) { // 遍历每个片段
      const [start, end] = clips[i];         // 获取当前片段的开始和结束时间
      for (let j = start + 1; j <= end; j++) { // 计算当前片段上每个点的dp[j]
        dp[j] = Math.min(dp[j], dp[start] + 1);
      }
    }
    if (dp[T] == 101) { // 如果dp值为101，说明覆盖不了[0:T]，否则返回dp[T]
      return -1;
    }
    return dp[T];
  };