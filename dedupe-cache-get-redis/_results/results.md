| Node   | Option                           | Msecs/op        | Ops/sec  | V8                     |
| ------ | -------------------------------- | --------------- | -------- | ---------------------- |
| 19.8.1 | layered-loader-two-layer-refresh | 0.746171 msecs  | 1340.176 | V8 10.8.168.25-node.12 |
| 19.8.1 | async-cache-dedupe               | 7.894317 msecs  | 126.673  | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader                   | 10.350265 msecs | 96.616   | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader-refresh           | 10.444333 msecs | 95.746   | V8 10.8.168.25-node.12 |
| 19.8.1 | no-dedupe-redis                  | 22.639198 msecs | 44.171   | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)