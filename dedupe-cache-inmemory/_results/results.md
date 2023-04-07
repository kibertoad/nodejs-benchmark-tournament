| Node    | Option              | Msecs/op       | Ops/sec  | V8                     |
| ------- | ------------------- | -------------- | -------- | ---------------------- |
| 19.8.1  | layered-loader-fifo | 0.254421 msecs | 3930.487 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-fifo | 0.254872 msecs | 3923.543 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru  | 0.274760 msecs | 3639.545 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru  | 0.276687 msecs | 3614.188 | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-fifo | 0.283347 msecs | 3529.243 | V8 9.4.146.26-node.26  |
| 14.21.3 | layered-loader-fifo | 0.316619 msecs | 3158.373 | V8 8.4.371.23-node.88  |
| 16.20.0 | layered-loader-lru  | 0.324490 msecs | 3081.763 | V8 9.4.146.26-node.26  |
| 14.21.3 | layered-loader-lru  | 0.328303 msecs | 3045.969 | V8 8.4.371.23-node.88  |
| 19.8.1  | dataloader          | 1.430641 msecs | 698.988  | V8 10.8.168.25-node.12 |
| 18.15.0 | dataloader          | 1.488720 msecs | 671.718  | V8 10.2.154.26-node.25 |
| 16.20.0 | dataloader          | 1.500860 msecs | 666.285  | V8 9.4.146.26-node.26  |
| 14.21.3 | dataloader          | 1.639195 msecs | 610.055  | V8 8.4.371.23-node.88  |
| 18.15.0 | async-cache-dedupe  | 2.255536 msecs | 443.354  | V8 10.2.154.26-node.25 |
| 19.8.1  | async-cache-dedupe  | 2.332808 msecs | 428.668  | V8 10.8.168.25-node.12 |
| 14.21.3 | async-cache-dedupe  | 2.384957 msecs | 419.295  | V8 8.4.371.23-node.88  |
| 16.20.0 | async-cache-dedupe  | 2.539152 msecs | 393.832  | V8 9.4.146.26-node.26  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)