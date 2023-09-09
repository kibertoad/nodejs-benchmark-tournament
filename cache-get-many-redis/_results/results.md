| Node    | Option                     | Msecs/op       | Ops/sec  | V8                     |
| ------- | -------------------------- | -------------- | -------- | ---------------------- |
| 20.6.1  | layered-loader-many        | 0.391906 msecs | 2551.631 | V8 11.3.244.8-node.14  |
| 16.20.2 | layered-loader-many        | 0.396933 msecs | 2519.315 | V8 9.4.146.26-node.26  |
| 18.17.1 | layered-loader-many        | 0.401093 msecs | 2493.185 | V8 10.2.154.26-node.26 |
| 20.6.1  | layered-loader-single      | 1.555008 msecs | 643.084  | V8 11.3.244.8-node.14  |
| 18.17.1 | layered-loader-single      | 1.569276 msecs | 637.237  | V8 10.2.154.26-node.26 |
| 16.20.2 | layered-loader-single      | 1.573884 msecs | 635.371  | V8 9.4.146.26-node.26  |
| 20.6.1  | async-cache-dedupe         | 1.592160 msecs | 628.077  | V8 11.3.244.8-node.14  |
| 16.20.2 | async-cache-dedupe         | 1.601779 msecs | 624.306  | V8 9.4.146.26-node.26  |
| 18.17.1 | async-cache-dedupe         | 1.602019 msecs | 624.212  | V8 10.2.154.26-node.26 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)