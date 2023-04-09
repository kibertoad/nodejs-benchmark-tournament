| Node    | Option                           | Msecs/op        | Ops/sec  | V8                     |
| ------- | -------------------------------- | --------------- | -------- | ---------------------- |
| 18.15.0 | layered-loader-two-layer-refresh | 0.680040 msecs  | 1470.501 | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader-refresh           | 6.322941 msecs  | 158.154  | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader                   | 8.286208 msecs  | 120.682  | V8 10.2.154.26-node.25 |
| 18.15.0 | async-cache-dedupe               | 10.564917 msecs | 94.653   | V8 10.2.154.26-node.25 |
| 18.15.0 | no-dedupe-redis                  | 21.683808 msecs | 46.117   | V8 10.2.154.26-node.25 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)