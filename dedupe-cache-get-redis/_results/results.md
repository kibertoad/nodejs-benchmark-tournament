| Node   | Option                           | Msecs/op        | Ops/sec  | V8                     |
| ------ | -------------------------------- | --------------- | -------- | ---------------------- |
| 19.8.1 | layered-loader-two-layer-refresh | 0.709603 msecs  | 1409.239 | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader-refresh           | 6.724952 msecs  | 148.700  | V8 10.8.168.25-node.12 |
| 19.8.1 | async-cache-dedupe               | 7.721083 msecs  | 129.516  | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader                   | 9.974958 msecs  | 100.251  | V8 10.8.168.25-node.12 |
| 19.8.1 | no-dedupe-redis                  | 22.304474 msecs | 44.834   | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)