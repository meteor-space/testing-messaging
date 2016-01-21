Package.describe({
  summary: 'BDD testing APIs for the space:messaging package',
  name: 'space:testing-messaging',
  version: '3.0.0',
  git: 'https://github.com/meteor-space/testing-messaging.git',
  debugOnly: true
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.1');

  api.use([
    'coffeescript',
    'underscore',
    'space:base@4.0.0',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
    'source/allow-to-ignore-some-struct-types.js',
    'source/messaging-api-bdd-api.coffee'
  ]);

});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'check',
    'space:testing',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
  ], 'server');

});
