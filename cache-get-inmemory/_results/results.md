| Node    | Option                     | Msecs/op       | Ops/sec  | V8                     |
| ------- | -------------------------- | -------------- | -------- | ---------------------- |
| 18.15.0 | layered-loader-fifo-object | 0.249790 msecs | 4003.361 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-fifo-object | 0.250651 msecs | 3989.612 | V8 10.8.168.25-node.12 |
| 19.8.1  | layered-loader-fifo        | 0.253988 msecs | 3937.192 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-fifo        | 0.254289 msecs | 3932.531 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru-object  | 0.266893 msecs | 3746.822 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru-object  | 0.268695 msecs | 3721.689 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru         | 0.276902 msecs | 3611.381 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru         | 0.281701 msecs | 3549.867 | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-fifo-object | 0.283692 msecs | 3524.949 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-fifo        | 0.292425 msecs | 3419.680 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru-object  | 0.307227 msecs | 3254.927 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru         | 0.318515 msecs | 3139.568 | V8 9.4.146.26-node.26  |
| 18.15.0 | dataloader                 | 1.468781 msecs | 680.837  | V8 10.2.154.26-node.25 |
| 19.8.1  | dataloader                 | 1.490166 msecs | 671.066  | V8 10.8.168.25-node.12 |
| 16.20.0 | dataloader                 | 1.541254 msecs | 648.822  | V8 9.4.146.26-node.26  |
| 18.15.0 | async-cache-dedupe         | 2.307129 msecs | 433.439  | V8 10.2.154.26-node.25 |
| 19.8.1  | async-cache-dedupe         | 2.339576 msecs | 427.428  | V8 10.8.168.25-node.12 |
| 16.20.0 | async-cache-dedupe         | 2.386505 msecs | 419.023  | V8 9.4.146.26-node.26  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)