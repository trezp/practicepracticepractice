if (Meteor.isClient){

  Template.nameList.helpers({
    people: [{firstName : "Liza"}, 
              {firstName : "Tilda"},
              {firstName : "Margaret"},
              {firstName : "Oscar"},
              {firstName : "David"}]
  });

  Template.countryList.helpers({
    countries: [{country: "Switzerland"},
                {country: "England"},
                {country: "Scotland"},
                {country: "Australia"},
                {country: "Denmark"},
                {country: "Spain"},
                {country: "Germany"},
                {country: "France"}]

  });
}