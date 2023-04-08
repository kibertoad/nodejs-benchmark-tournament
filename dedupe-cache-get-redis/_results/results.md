| Node    | Option                           | Msecs/op        | Ops/sec  | V8                     |
| ------- | -------------------------------- | --------------- | -------- | ---------------------- |
| 18.15.0 | layered-loader-two-layer-refresh | 0.435399 msecs  | 2296.744 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-two-layer-refresh | 0.436637 msecs  | 2290.233 | V8 10.8.168.25-node.12 |
| 16.20.0 | layered-loader-two-layer-refresh | 0.458544 msecs  | 2180.814 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader                   | 14.684765 msecs | 68.098   | V8 9.4.146.26-node.26  |
| 19.8.1  | layered-loader                   | 14.994702 msecs | 66.690   | V8 10.8.168.25-node.12 |
| 19.8.1  | async-cache-dedupe               | 15.832482 msecs | 63.161   | V8 10.8.168.25-node.12 |
| 18.15.0 | async-cache-dedupe               | 15.939907 msecs | 62.736   | V8 10.2.154.26-node.25 |
| 16.20.0 | async-cache-dedupe               | 16.055007 msecs | 62.286   | V8 9.4.146.26-node.26  |
| 18.15.0 | layered-loader                   | 16.629763 msecs | 60.133   | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-refresh           | 25.515731 msecs | 39.192   | V8 9.4.146.26-node.26  |
| 19.8.1  | layered-loader-refresh           | 25.882438 msecs | 38.636   | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-refresh           | 26.154901 msecs | 38.234   | V8 10.2.154.26-node.25 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)