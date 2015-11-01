Meteor.setInterval(() => {
  Session.set('currentTime', Date.now());
}, 10000);

Template.registerHelper('timeAgo', function(ts) {
  var now = moment(Session.get('currentTime'));
  var ts = moment(ts);

  return moment.min(ts, now).fromNow();
});
