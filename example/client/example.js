Template.body.onCreated(function() {
  Session.set('ts', Date.now());
});

Template.body.helpers({
  ts: () => Session.get('ts')
})