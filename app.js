function DataService() {
var data = [
    {
        "name":"Kerem Suer",
        "username":"kerem",
        "tweet":"Some First tweet Some First tweetSome First tweet Some First tweetSome First tweet Some First tweetSome First tweet Some First t",
        "refresh":20,
        "time":"2m",
        "avator":"img/download.jpg"
    },
    {
        "name":"Mohit Sati",
        "username":"mohit",
        "tweet":"I am tweeting about this I am tweeting about this I am tweeting about this I",
        "refresh":0,
        "time":"20m",
        "avator":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTH8icuiMK82otxl2pWD9oKLpc7M4VTC7397fh8Jq4RHxReOezZvA"
    },
    {
        "name":"Kerem Suer",
        "username":"kerem",
        "tweet":"Second Tweet just a short tweet",
        "refresh":20,
        "time":"1h",
        "avator":"img/download.jpg"
    },
    {
        "name":"Mohit Sati",
        "username":"mohit",
        "tweet":"Someting abuot tweeting Someting abuot tweetingSometing abuot tweetingSometing abuot tweetingSometing abuot tweetingSometing abuot tweetingSometing ",
        "refresh":0,
        "time":"3h",
        "avator":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTH8icuiMK82otxl2pWD9oKLpc7M4VTC7397fh8Jq4RHxReOezZvA"
    },
    {
        "name":"Kerem Suer",
        "username":"kerem",
        "tweet":"Nothing about this tweet is interestingNothing about this tweet is interestingNothing about this tweet is interestingNothing about this tweet is interesting",
        "refresh":20,
        "time":"7h",
        "avator":"img/download.jpg"
    },
    {
        "name":"Kerem Suer",
        "username":"kerem",
        "tweet":"Someting abuot tweetingSometing abuot tweetingSometing abuot tweeting",
        "refresh":20,
        "time":"yesterday",
        "avator":"img/download.jpg"
    },
    {
        "name":"Mohit Sati",
        "username":"mohit",
        "tweet":"Nothing about this tweet is interestingNothing about this tweet is interes",
        "refresh":0,
        "time":"yesterday",
        "avator":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTH8icuiMK82otxl2pWD9oKLpc7M4VTC7397fh8Jq4RHxReOezZvA"
    }
];
    this.listData = function() {
        return data;
    };
}

angular.module('notesApp', [])
  .controller('MainCtrl', ['DataService', function(DataService) {
    var self = this;
    self.data = DataService.listData();
    self.open = function(tab) {
      self.tab = tab;
    };
  }])
  .service('DataService', [DataService]);
