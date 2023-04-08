| Node    | Option                    | Msecs/op       | Ops/sec  | V8                     |
| ------- | ------------------------- | -------------- | -------- | ---------------------- |
| 19.8.1  | layered-loader-fifo       | 0.253046 msecs | 3951.847 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-fifo       | 0.253208 msecs | 3949.328 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru-object | 0.268124 msecs | 3729.614 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru-object | 0.270028 msecs | 3703.317 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru        | 0.275407 msecs | 3630.984 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru        | 0.280722 msecs | 3562.241 | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-fifo       | 0.288197 msecs | 3469.845 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru-object | 0.304757 msecs | 3281.308 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru        | 0.317544 msecs | 3149.171 | V8 9.4.146.26-node.26  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)