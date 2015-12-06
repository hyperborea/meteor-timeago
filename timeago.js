TIMEAGO_REFRESH = new ReactiveVar(Date.now());
TIMEAGO_MS = 10000;

Meteor.setInterval(() => {
  TIMEAGO_REFRESH.set(Date.now());
}, TIMEAGO_MS);


Template.registerHelper('timeAgo', function(ts) {
  if (!ts) return undefined;

  var now = moment(TIMEAGO_REFRESH.get());
  var ts = moment(ts);

  return moment.min(ts, now).fromNow();
});

Template.registerHelper('timeUntil', function(ts) {
  if (!ts) return undefined;

  var now = moment(TIMEAGO_REFRESH.get() + TIMEAGO_MS);
  var ts = moment(ts);

  return moment.max(ts, now).fromNow();
});
