// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ColorBoard{
    enum Colors{
        White,
        Blue, 
        Black, 
        Red
       
    }
    Colors public  colors;
    uint8[7][5] public cells= [
        [0, 1, 3, 1, 1, 2, 3],
        [1, 2,3, 1, 0, 3, 1], 
        [1, 2, 3, 1, 3,2, 1],
        [1, 2, 3, 0, 1,2, 2], 
        [0, 2, 3, 1, 3,1, 0] 
    ];
    

    
    function GetColor(uint8 i, uint8 j) public view returns (Colors, string memory){
         uint8 _id = cells[i][j];
        if (_id == 0) return( Colors.White, "white");
        if (_id == 1) return (Colors.Blue, "Blue");
        if (_id == 2) return (Colors.Black, "Black");
        if (_id == 3) return (Colors.Red, "Red");
    }

    function getGrid () external view returns (uint8[7][5] memory) {
        return cells;
    }

    
    

}