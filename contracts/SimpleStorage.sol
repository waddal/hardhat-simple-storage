pragma solidity ^0.8.9;

contract SimpleStorage {
    uint256 public favoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    mapping(string => uint256) public nameToFavoriteNumber;

    struct User {
        string name;
        uint256 favoriteNumber;
    }

    User[] public usersList;

    function addUser(string memory _name, uint256 _favoriteNumber) public {
        usersList.push(User(_name, _favoriteNumber));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
