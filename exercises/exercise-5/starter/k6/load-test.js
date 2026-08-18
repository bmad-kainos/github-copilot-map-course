// ---------------------------------------------------------------------------
// Exercise 5 — k6 load-test skeleton
//
// This file gives you a starting point for a k6 performance test.
// k6 runs JavaScript (ES modules supported with --compatibility-mode=experimental_enhanced).
//
// To run this test you need k6 installed: https://k6.io/docs/get-started/installation/
//   brew install k6            # macOS
//   choco install k6           # Windows
//   sudo apt install k6        # Ubuntu/Debian
//
// Then run:
//   k6 run k6/load-test.js
//
// Step 3 of Exercise 5: ask Copilot to help you
//   - set a realistic VU (virtual user) count and duration for a small web app
//   - interpret the output metrics (http_req_duration, error_rate)
//   - add a thresholds block that encodes your performance budget
// ---------------------------------------------------------------------------

import http from 'k6/http';
import { check, sleep } from 'k6';

// TODO: Ask Copilot — "what are sensible k6 options for a smoke test of a
// single-page static app serving ~10 concurrent users?"
export const options = {
  vus: 1,        // TODO: set a realistic virtual-user count
  duration: '10s',

  // TODO: define thresholds that encode your performance budget, e.g.:
  // thresholds: {
  //   http_req_duration: ['p(95)<500'],  // 95% of requests under 500 ms
  //   http_req_failed:   ['rate<0.01'],  // fewer than 1% errors
  // },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export default function () {
  // TODO: replace with the actual endpoint(s) you want to test
  const res = http.get(`${BASE_URL}/`);

  check(res, {
    // TODO: ask Copilot to expand these checks for your scenario
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
