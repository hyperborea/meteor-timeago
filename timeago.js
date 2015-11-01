TIMEAGO_REFRESH = new ReactiveVar(Date.now());
TIMEAGO_MS = 10000;

Meteor.setInterval(() => {
  TIMEAGO_REFRESH.set(Date.now());
}, TIMEAGO_MS);

Template.registerHelper('timeAgo', function(ts) {
  var now = moment(TIMEAGO_REFRESH.get());
  var ts = moment(ts);

  return moment.min(ts, now).fromNow();
});
