| Node    | Option                     | Msecs/op       | Ops/sec  | V8                     |
| ------- | -------------------------- | -------------- | -------- | ---------------------- |
| 19.8.1  | layered-loader-fifo-object | 0.236073 msecs | 4235.984 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-fifo-object | 0.237687 msecs | 4207.206 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-fifo-map    | 0.245195 msecs | 4078.380 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-fifo-map    | 0.251831 msecs | 3970.919 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru-object  | 0.255175 msecs | 3918.872 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru-object  | 0.262796 msecs | 3805.234 | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-fifo-object | 0.267634 msecs | 3736.443 | V8 9.4.146.26-node.26  |
| 19.8.1  | layered-loader-lru-map     | 0.270130 msecs | 3701.927 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru-map     | 0.275549 msecs | 3629.119 | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-fifo-map    | 0.276548 msecs | 3616.014 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru-object  | 0.293313 msecs | 3409.330 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru-map     | 0.302308 msecs | 3307.880 | V8 9.4.146.26-node.26  |
| 18.15.0 | dataloader                 | 1.454260 msecs | 687.635  | V8 10.2.154.26-node.25 |
| 19.8.1  | dataloader                 | 1.464079 msecs | 683.023  | V8 10.8.168.25-node.12 |
| 16.20.0 | dataloader                 | 1.500711 msecs | 666.351  | V8 9.4.146.26-node.26  |
| 18.15.0 | async-cache-dedupe         | 2.223422 msecs | 449.757  | V8 10.2.154.26-node.25 |
| 16.20.0 | async-cache-dedupe         | 2.360582 msecs | 423.624  | V8 9.4.146.26-node.26  |
| 19.8.1  | async-cache-dedupe         | 2.426125 msecs | 412.180  | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)