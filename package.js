Package.describe({
  name: 'hyperborea:timeago',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Adding reactive timeAgo helper.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hyperborea/meteor-timeago.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('ecmascript');
  api.use('templating');
  api.use('reactive-var');
  api.use('momentjs:moment@2.10.6');

  api.addFiles('timeago.js', 'client');
});
