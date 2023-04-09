| Node    | Option                     | Msecs/op       | Ops/sec  | V8                     |
| ------- | -------------------------- | -------------- | -------- | ---------------------- |
| 19.8.1  | layered-loader-fifo-object | 0.236513 msecs | 4228.095 | V8 10.8.168.25-node.12 |
| 19.8.1  | toad-cache-lru             | 0.238591 msecs | 4191.279 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-fifo-object | 0.239630 msecs | 4173.106 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-fifo-map    | 0.240186 msecs | 4163.444 | V8 10.8.168.25-node.12 |
| 18.15.0 | toad-cache-lru             | 0.246717 msecs | 4053.227 | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader-fifo-map    | 0.257718 msecs | 3880.213 | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader-lru-object  | 0.260659 msecs | 3836.436 | V8 10.2.154.26-node.25 |
| 18.15.0 | tiny-lru                   | 0.261907 msecs | 3818.146 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru-map     | 0.264581 msecs | 3779.555 | V8 10.8.168.25-node.12 |
| 16.20.0 | toad-cache-lru             | 0.265917 msecs | 3760.576 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-fifo-object | 0.266964 msecs | 3745.825 | V8 9.4.146.26-node.26  |
| 18.15.0 | layered-loader-lru-map     | 0.272370 msecs | 3671.471 | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-fifo-map    | 0.275214 msecs | 3633.537 | V8 9.4.146.26-node.26  |
| 19.8.1  | tiny-lru                   | 0.277658 msecs | 3601.548 | V8 10.8.168.25-node.12 |
| 16.20.0 | tiny-lru                   | 0.284564 msecs | 3514.147 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru-object  | 0.292433 msecs | 3419.589 | V8 9.4.146.26-node.26  |
| 19.8.1  | layered-loader-lru-object  | 0.293081 msecs | 3412.022 | V8 10.8.168.25-node.12 |
| 16.20.0 | layered-loader-lru-map     | 0.302984 msecs | 3300.506 | V8 9.4.146.26-node.26  |
| 19.8.1  | dataloader                 | 1.393883 msecs | 717.420  | V8 10.8.168.25-node.12 |
| 18.15.0 | dataloader                 | 1.409819 msecs | 709.311  | V8 10.2.154.26-node.25 |
| 16.20.0 | dataloader                 | 1.500085 msecs | 666.629  | V8 9.4.146.26-node.26  |
| 18.15.0 | async-cache-dedupe         | 2.241417 msecs | 446.146  | V8 10.2.154.26-node.25 |
| 16.20.0 | async-cache-dedupe         | 2.284583 msecs | 437.717  | V8 9.4.146.26-node.26  |
| 19.8.1  | async-cache-dedupe         | 2.322577 msecs | 430.556  | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)