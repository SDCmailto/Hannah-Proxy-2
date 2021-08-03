Hannahs-MacBook-Pro:proxy2 hannahmanfredi$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 1.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.1s), 000/100 VUs, 31 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  1 iters/s

     data_received..................: 593 kB 20 kB/s
     data_sent......................: 2.9 kB 97 B/s
     http_req_blocked...............: avg=421.29µs min=269µs   med=369µs    max=1.11ms   p(90)=529µs    p(95)=845µs
     http_req_connecting............: avg=310.7µs  min=221µs   med=281µs    max=737µs    p(90)=369µs    p(95)=511.49µs
     http_req_duration..............: avg=228.97ms min=58.92ms med=150.34ms max=700.16ms p(90)=484.81ms p(95)=604.32ms
       { expected_response:true }...: avg=228.97ms min=58.92ms med=150.34ms max=700.16ms p(90)=484.81ms p(95)=604.32ms
     http_req_failed................: 0.00%  ✓ 0        ✗ 31
     http_req_receiving.............: avg=295.45µs min=91µs    med=183µs    max=3.33ms   p(90)=284µs    p(95)=339.5µs
     http_req_sending...............: avg=99.51µs  min=50µs    med=76µs     max=589µs    p(90)=122µs    p(95)=194.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=228.58ms min=58.73ms med=150.02ms max=699.72ms p(90)=484.5ms  p(95)=604.08ms
     http_reqs......................: 31     1.031167/s
     iteration_duration.............: avg=230.01ms min=59.47ms med=151.05ms max=702.06ms p(90)=486.28ms p(95)=605.2ms
     iterations.....................: 31     1.031167/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100
Hannahs-MacBook-Pro:proxy2 hannahmanfredi$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 1.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m31.3s), 000/100 VUs, 31 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  1 iters/s

     data_received..................: 620 kB 20 kB/s
     data_sent......................: 2.9 kB 93 B/s
     http_req_blocked...............: avg=481.41µs min=259µs   med=307µs    max=3.15ms p(90)=447µs p(95)=1.51ms
     http_req_connecting............: avg=358.67µs min=204µs   med=256µs    max=3.05ms p(90)=366µs p(95)=497µs
     http_req_duration..............: avg=1.16s    min=59.23ms med=618.64ms max=4.16s  p(90)=3.09s p(95)=3.18s
       { expected_response:true }...: avg=1.16s    min=59.23ms med=618.64ms max=4.16s  p(90)=3.09s p(95)=3.18s
     http_req_failed................: 0.00%  ✓ 0        ✗ 31
     http_req_receiving.............: avg=180.9µs  min=101µs   med=158µs    max=487µs  p(90)=259µs p(95)=318µs
     http_req_sending...............: avg=89.48µs  min=36µs    med=62µs     max=735µs  p(90)=109µs p(95)=143.5µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s     p(90)=0s    p(95)=0s
     http_req_waiting...............: avg=1.16s    min=59.02ms med=618.36ms max=4.16s  p(90)=3.09s p(95)=3.18s
     http_reqs......................: 31     0.989553/s
     iteration_duration.............: avg=1.16s    min=59.88ms med=619.22ms max=4.17s  p(90)=3.09s p(95)=3.19s
     iterations.....................: 31     0.989553/s
     vus............................: 100    min=100    max=100
     vus_max........................: 100    min=100    max=100

Hannahs-MacBook-Pro:proxy2 hannahmanfredi$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 1.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (1m00.0s), 000/100 VUs, 0 complete and 31 interrupted iterations
constant_request_rate ✓ [======================================] 031/100 VUs  30s  1 iters/s
WARN[0060] No script iterations finished, consider making the test duration longer

     data_received...: 0 B    0 B/s
     data_sent.......: 2.9 kB 49 B/s
     vus.............: 31     min=31  max=100
     vus_max.........: 100    min=100 max=100
