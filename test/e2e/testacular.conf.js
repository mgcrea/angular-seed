//sudo cp static/testacular.src.js /opt/local/lib/node_modules/testacular/static/testacular.js

basePath = '../../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/scenarios.js'
];

autoWatch = true;

proxies = {
  '/': 'http://localhost:8000/'
};

