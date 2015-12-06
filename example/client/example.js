const ONE_HOUR = 3600000;

Template.body.onCreated(function() {
  Session.set('tsAgo', Date.now() - ONE_HOUR);
  Session.set('tsUntil', Date.now() + 20 * ONE_HOUR);
});

Template.body.helpers({
  session: (key) => Session.get(key)
})