| Node    | Option                     | Msecs/op       | Ops/sec | V8                     |
| ------- | -------------------------- | -------------- | ------- | ---------------------- |
| 16.20.0 | dataloader                 | 1.994427 msecs | 501.397 | V8 9.4.146.26-node.26  |
| 18.15.0 | dataloader                 | 2.011744 msecs | 497.081 | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader-fifo-object | 2.023823 msecs | 494.114 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru-object  | 2.033008 msecs | 491.882 | V8 10.8.168.25-node.12 |
| 19.8.1  | dataloader                 | 2.042122 msecs | 489.687 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru-object  | 2.056121 msecs | 486.353 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-fifo-object | 2.089925 msecs | 478.486 | V8 10.8.168.25-node.12 |
| 19.8.1  | layered-loader-lru         | 2.141452 msecs | 466.973 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru         | 2.155178 msecs | 463.999 | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-lru-object  | 2.161059 msecs | 462.736 | V8 9.4.146.26-node.26  |
| 19.8.1  | layered-loader-fifo        | 2.164750 msecs | 461.947 | V8 10.8.168.25-node.12 |
| 16.20.0 | layered-loader-fifo-object | 2.219062 msecs | 450.641 | V8 9.4.146.26-node.26  |
| 18.15.0 | layered-loader-fifo        | 2.290198 msecs | 436.643 | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-lru         | 2.341597 msecs | 427.059 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-fifo        | 2.388052 msecs | 418.751 | V8 9.4.146.26-node.26  |
| 18.15.0 | async-cache-dedupe         | 3.533508 msecs | 283.005 | V8 10.2.154.26-node.25 |
| 19.8.1  | async-cache-dedupe         | 3.584101 msecs | 279.010 | V8 10.8.168.25-node.12 |
| 16.20.0 | async-cache-dedupe         | 3.653271 msecs | 273.727 | V8 9.4.146.26-node.26  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)