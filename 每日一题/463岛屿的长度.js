// https://leetcode-cn.com/problems/island-perimeter/
//463.岛屿的长度 leetcode-463
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let colLen = grid.length,rowLen = grid[0].length,sum = 0;
     for(let i = 0;i<colLen;i++){
         for(let j = 0;j<rowLen;j++){
             if(grid[i][j] == 1){
                 let row = j,col = i;
                //console.log(cal(row,col))
                 sum +=cal(row,col);
             }
         }
     }
     function cal(row,col) {
 
         //判读上下左右是否是陆地，即是否 是1
         let zhouchang = 4;
         //上
         if(row >=0 && (col-1)>=0 && grid[col-1][row] ==1) {
             zhouchang--;
         };
         //下
         if(row >= 0 && (col+1) < colLen &&grid[col+1][row] ==1) {
             zhouchang--;
         };
         //左
         if((row-1) >= 0 && col >= 0 && grid[col][row-1]==1) {
             zhouchang--;
         };
         //右
         if((row+1) < rowLen && col >= 0 && grid[col][row+1] ==1) {
             zhouchang--;
         }
         return zhouchang
     }
     return sum;
 };