| Node   | Option                           | Msecs/op        | Ops/sec  | V8                     |
| ------ | -------------------------------- | --------------- | -------- | ---------------------- |
| 19.8.1 | layered-loader-two-layer-refresh | 0.698482 msecs  | 1431.676 | V8 10.8.168.25-node.12 |
| 19.8.1 | async-cache-dedupe               | 6.661397 msecs  | 150.119  | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader                   | 7.074234 msecs  | 141.358  | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader-refresh           | 9.829607 msecs  | 101.733  | V8 10.8.168.25-node.12 |
| 19.8.1 | no-dedupe-redis                  | 21.623674 msecs | 46.246   | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)