| Node    | Option                     | Msecs/op       | Ops/sec  | V8                     |
| ------- | -------------------------- | -------------- | -------- | ---------------------- |
| 21.5.0  | layered-loader-fifo-map    | 0.244508 msecs | 4089.848 | V8 11.8.172.17-node.18 |
| 20.10.0 | layered-loader-fifo-object | 0.248577 msecs | 4022.899 | V8 11.3.244.8-node.25  |
| 18.19.0 | toad-cache-lru             | 0.249837 msecs | 4002.616 | V8 10.2.154.26-node.28 |
| 21.5.0  | layered-loader-fifo-object | 0.250797 msecs | 3987.292 | V8 11.8.172.17-node.18 |
| 20.10.0 | layered-loader-fifo-map    | 0.252356 msecs | 3962.663 | V8 11.3.244.8-node.25  |
| 18.19.0 | layered-loader-fifo-map    | 0.252452 msecs | 3961.155 | V8 10.2.154.26-node.28 |
| 21.5.0  | toad-cache-lru-map         | 0.253036 msecs | 3952.011 | V8 11.8.172.17-node.18 |
| 21.5.0  | toad-cache-lru             | 0.254137 msecs | 3934.892 | V8 11.8.172.17-node.18 |
| 20.10.0 | toad-cache-lru             | 0.254989 msecs | 3921.740 | V8 11.3.244.8-node.25  |
| 18.19.0 | layered-loader-fifo-object | 0.255394 msecs | 3915.515 | V8 10.2.154.26-node.28 |
| 18.19.0 | toad-cache-lru-map         | 0.259701 msecs | 3850.585 | V8 10.2.154.26-node.28 |
| 20.10.0 | toad-cache-lru-map         | 0.260856 msecs | 3833.526 | V8 11.3.244.8-node.25  |
| 21.5.0  | layered-loader-lru-object  | 0.267005 msecs | 3745.253 | V8 11.8.172.17-node.18 |
| 18.19.0 | layered-loader-lru-object  | 0.270766 msecs | 3693.232 | V8 10.2.154.26-node.28 |
| 21.5.0  | layered-loader-lru-map     | 0.270918 msecs | 3691.152 | V8 11.8.172.17-node.18 |
| 20.10.0 | layered-loader-lru-object  | 0.271406 msecs | 3684.519 | V8 11.3.244.8-node.25  |
| 18.19.0 | tiny-lru                   | 0.274396 msecs | 3644.365 | V8 10.2.154.26-node.28 |
| 18.19.0 | layered-loader-lru-map     | 0.276539 msecs | 3616.131 | V8 10.2.154.26-node.28 |
| 20.10.0 | layered-loader-lru-map     | 0.278699 msecs | 3588.105 | V8 11.3.244.8-node.25  |
| 16.20.2 | layered-loader-fifo-object | 0.280341 msecs | 3567.083 | V8 9.4.146.26-node.26  |
| 20.10.0 | tiny-lru                   | 0.289458 msecs | 3454.735 | V8 11.3.244.8-node.25  |
| 16.20.2 | layered-loader-fifo-map    | 0.289995 msecs | 3448.334 | V8 9.4.146.26-node.26  |
| 21.5.0  | tiny-lru                   | 0.292972 msecs | 3413.297 | V8 11.8.172.17-node.18 |
| 16.20.2 | toad-cache-lru             | 0.295127 msecs | 3388.373 | V8 9.4.146.26-node.26  |
| 16.20.2 | toad-cache-lru-map         | 0.297620 msecs | 3359.989 | V8 9.4.146.26-node.26  |
| 16.20.2 | tiny-lru                   | 0.300968 msecs | 3322.614 | V8 9.4.146.26-node.26  |
| 16.20.2 | layered-loader-lru-object  | 0.303822 msecs | 3291.397 | V8 9.4.146.26-node.26  |
| 16.20.2 | layered-loader-lru-map     | 0.320472 msecs | 3120.395 | V8 9.4.146.26-node.26  |
| 21.5.0  | dataloader                 | 1.376198 msecs | 726.639  | V8 11.8.172.17-node.18 |
| 18.19.0 | dataloader                 | 1.456101 msecs | 686.766  | V8 10.2.154.26-node.28 |
| 20.10.0 | dataloader                 | 1.489126 msecs | 671.535  | V8 11.3.244.8-node.25  |
| 16.20.2 | dataloader                 | 1.505881 msecs | 664.063  | V8 9.4.146.26-node.26  |
| 18.19.0 | async-cache-dedupe         | 2.203365 msecs | 453.851  | V8 10.2.154.26-node.28 |
| 20.10.0 | async-cache-dedupe         | 2.337617 msecs | 427.786  | V8 11.3.244.8-node.25  |
| 21.5.0  | async-cache-dedupe         | 2.364978 msecs | 422.837  | V8 11.8.172.17-node.18 |
| 16.20.2 | async-cache-dedupe         | 2.366101 msecs | 422.636  | V8 9.4.146.26-node.26  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)