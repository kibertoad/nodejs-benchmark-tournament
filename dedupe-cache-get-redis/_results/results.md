| Node    | Option                           | Msecs/op        | Ops/sec  | V8                     |
| ------- | -------------------------------- | --------------- | -------- | ---------------------- |
| 18.17.1 | layered-loader-two-layer-refresh | 0.728633 msecs  | 1372.432 | V8 10.2.154.26-node.26 |
| 20.6.1  | layered-loader-two-layer-refresh | 0.732720 msecs  | 1364.778 | V8 11.3.244.8-node.14  |
| 16.20.2 | layered-loader-two-layer-refresh | 0.759617 msecs  | 1316.453 | V8 9.4.146.26-node.26  |
| 20.6.1  | layered-loader                   | 5.961442 msecs  | 167.745  | V8 11.3.244.8-node.14  |
| 20.6.1  | layered-loader-refresh           | 5.970431 msecs  | 167.492  | V8 11.3.244.8-node.14  |
| 16.20.2 | layered-loader-refresh           | 6.148940 msecs  | 162.630  | V8 9.4.146.26-node.26  |
| 18.17.1 | layered-loader-refresh           | 6.203604 msecs  | 161.197  | V8 10.2.154.26-node.26 |
| 16.20.2 | layered-loader                   | 7.861446 msecs  | 127.203  | V8 9.4.146.26-node.26  |
| 18.17.1 | async-cache-dedupe               | 8.009350 msecs  | 124.854  | V8 10.2.154.26-node.26 |
| 20.6.1  | async-cache-dedupe               | 8.122997 msecs  | 123.107  | V8 11.3.244.8-node.14  |
| 18.17.1 | layered-loader                   | 8.370644 msecs  | 119.465  | V8 10.2.154.26-node.26 |
| 16.20.2 | async-cache-dedupe               | 9.664130 msecs  | 103.475  | V8 9.4.146.26-node.26  |
| 20.6.1  | no-dedupe-redis                  | 20.931343 msecs | 47.775   | V8 11.3.244.8-node.14  |
| 16.20.2 | no-dedupe-redis                  | 21.275196 msecs | 47.003   | V8 9.4.146.26-node.26  |
| 18.17.1 | no-dedupe-redis                  | 21.658232 msecs | 46.172   | V8 10.2.154.26-node.26 |
| 20.6.1  | cache-manager                    | 24.854591 msecs | 40.234   | V8 11.3.244.8-node.14  |
| 16.20.2 | cache-manager                    | 26.114483 msecs | 38.293   | V8 9.4.146.26-node.26  |
| 18.17.1 | cache-manager                    | 26.999702 msecs | 37.037   | V8 10.2.154.26-node.26 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)