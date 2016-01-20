Package.describe({
  summary: 'BDD testing APIs for the space:messaging package',
  name: 'space:testing-messaging',
  version: '0.1.0',
  git: 'https://github.com/meteor-space/testing-messaging.git',
  debugOnly: true
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.1');

  api.use([
    'coffeescript',
    'underscore',
    'space:base@3.1.1',
    'space:messaging@2.1.0',
    'space:testing@2.0.1',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
    'source/messaging-api-bdd-api.coffee'
  ], 'server');

});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'check',
    'space:base@3.1.1',
    'space:messaging@2.1.0',
    'space:testing',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
  ], 'server');

});