| Node    | Option                | Msecs/op       | Ops/sec  | V8                     |
| ------- | --------------------- | -------------- | -------- | ---------------------- |
| 20.6.1  | cache-manager         | 0.323013 msecs | 3095.852 | V8 11.3.244.8-node.14  |
| 18.17.1 | cache-manager         | 0.334902 msecs | 2985.946 | V8 10.2.154.26-node.26 |
| 16.20.2 | cache-manager         | 0.337007 msecs | 2967.297 | V8 9.4.146.26-node.26  |
| 16.20.2 | layered-loader-many   | 0.342529 msecs | 2919.464 | V8 9.4.146.26-node.26  |
| 20.6.1  | layered-loader-many   | 0.343327 msecs | 2912.673 | V8 11.3.244.8-node.14  |
| 18.17.1 | layered-loader-many   | 0.343778 msecs | 2908.852 | V8 10.2.154.26-node.26 |
| 20.6.1  | async-cache-dedupe    | 1.396159 msecs | 716.251  | V8 11.3.244.8-node.14  |
| 18.17.1 | async-cache-dedupe    | 1.444643 msecs | 692.213  | V8 10.2.154.26-node.26 |
| 16.20.2 | async-cache-dedupe    | 1.445970 msecs | 691.577  | V8 9.4.146.26-node.26  |
| 18.17.1 | layered-loader-single | 1.480037 msecs | 675.659  | V8 10.2.154.26-node.26 |
| 20.6.1  | layered-loader-single | 1.484061 msecs | 673.827  | V8 11.3.244.8-node.14  |
| 16.20.2 | layered-loader-single | 1.508177 msecs | 663.052  | V8 9.4.146.26-node.26  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)