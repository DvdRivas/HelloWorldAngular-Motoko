import List "mo:base/List";


actor {
  var nameList: List.List<Text> = List.nil();
  
  public query func GreetList(): async [Text] {
    let reversedList = List.reverse(nameList);
    return List.toArray(reversedList);
  };

  public func AddName(name: Text) {
    nameList := List.push(name, nameList);
  }

};
