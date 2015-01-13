PlayersList = new Mongo.Collection('players');



if(Meteor.isClient){
  
Template.leaderboard.helpers({
  'player' : function() {
    var currentUserId = Meteor.userId();
    return PlayersList.find({createdBy: currentUserId}, {sort: {score: -1, name: 1}})
  },
  'selectedClass' : function(){
    var playerId = this._id;
    var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
      return "selected"
      }
    },
    'showSelectedPlayer': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayersList.findOne(selectedPlayer)
  }
});

  Template.leaderboard.events({
    'click .player' : function(){
      var playerId = this._id; 
      Session.set('selectedPlayer', playerId);
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
    },
    'click .increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: 5} }); 
    },
    'click .decrement': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: -5} });
    }, 
    'click .remove': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      var answer = confirm("Are you sure you want to delete this player?")
      if(answer == true){
        PlayersList.remove(selectedPlayer);
      }},
    
  });

  Template.addPlayerForm.events({
    'submit form': function(event){
      event.preventDefault();
      var playerNameVar = event.target.playerName.value; 
      var currentUserId = Meteor.userId();
      PlayersList.insert({
        name: playerNameVar,
        score: 0,
        createdBy: currentUserId
  });
      event.target.playerName.value = "";
    
      },
      //Add the ability for to add a score upon creation of players
    //   'click .addScore': function(event){
    //   event.preventDefault();
    //   var selectedPlayer = Session.get('selectedPlayer');
    //   var addScore = event.target.addScore.value; 
    //   PlayerList.update(selectedPlayer, {$inc: {score: addScore}});
    // }
    });
  

};


// if(Meteor.isServer){
  
// };