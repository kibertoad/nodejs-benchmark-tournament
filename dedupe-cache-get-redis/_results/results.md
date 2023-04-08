| Node   | Option                           | Msecs/op        | Ops/sec  | V8                     |
| ------ | -------------------------------- | --------------- | -------- | ---------------------- |
| 19.8.1 | layered-loader-two-layer-refresh | 0.735928 msecs  | 1358.829 | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader                   | 7.661450 msecs  | 130.524  | V8 10.8.168.25-node.12 |
| 19.8.1 | async-cache-dedupe               | 7.793476 msecs  | 128.312  | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader-refresh           | 10.395870 msecs | 96.192   | V8 10.8.168.25-node.12 |
| 19.8.1 | no-dedupe-redis                  | 22.132044 msecs | 45.183   | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)