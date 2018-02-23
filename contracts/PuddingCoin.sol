pragma solidity ^0.4.18;
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

// StandardTokenがERC 20に準拠しているOpenZeppleinのToeken
contract PuddingCoin is StandardToken {
  string public name = "PuddingCoin"; // トークンの名前
  string public symbol = "PDN"; // 通貨の単位 BTC / ETHみたいな
  uint public decimals = 18;


// 最初の供給量（initialSupply）がコンストラクタの引数になっている
  function PuddingCoin(uint initialSupply) public {
    totalSupply_ = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}
