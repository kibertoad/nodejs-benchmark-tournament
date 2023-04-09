| Node    | Option                     | Msecs/op       | Ops/sec | V8                     |
| ------- | -------------------------- | -------------- | ------- | ---------------------- |
| 19.8.1  | dataloader                 | 1.984842 msecs | 503.818 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru         | 1.991344 msecs | 502.173 | V8 10.2.154.26-node.25 |
| 18.15.0 | dataloader                 | 2.024040 msecs | 494.061 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-fifo        | 2.024362 msecs | 493.983 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-fifo        | 2.029660 msecs | 492.693 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-fifo-object | 2.030869 msecs | 492.400 | V8 10.8.168.25-node.12 |
| 19.8.1  | layered-loader-lru         | 2.040743 msecs | 490.018 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-lru-object  | 2.050654 msecs | 487.649 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru-object  | 2.053350 msecs | 487.009 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-fifo-object | 2.061906 msecs | 484.988 | V8 10.2.154.26-node.25 |
| 16.20.0 | dataloader                 | 2.095727 msecs | 477.161 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru-object  | 2.107608 msecs | 474.472 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-fifo        | 2.137069 msecs | 467.931 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-fifo-object | 2.139275 msecs | 467.448 | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru         | 2.196992 msecs | 455.168 | V8 9.4.146.26-node.26  |
| 18.15.0 | async-cache-dedupe         | 3.489815 msecs | 286.548 | V8 10.2.154.26-node.25 |
| 16.20.0 | async-cache-dedupe         | 3.534984 msecs | 282.887 | V8 9.4.146.26-node.26  |
| 19.8.1  | async-cache-dedupe         | 3.563013 msecs | 280.661 | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)