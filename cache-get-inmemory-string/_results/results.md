| Node    | Option                     | Msecs/op       | Ops/sec | V8                     |
| ------- | -------------------------- | -------------- | ------- | ---------------------- |
| 21.5.0  | toad-cache-lru-map         | 1.352931 msecs | 739.136 | V8 11.8.172.17-node.18 |
| 20.10.0 | toad-cache-lru-map         | 1.443530 msecs | 692.746 | V8 11.3.244.8-node.25  |
| 18.19.0 | toad-cache-lru-map         | 1.451171 msecs | 689.099 | V8 10.2.154.26-node.28 |
| 16.20.2 | toad-cache-lru-map         | 1.593750 msecs | 627.451 | V8 9.4.146.26-node.26  |
| 20.10.0 | toad-cache-lru             | 2.108271 msecs | 474.322 | V8 11.3.244.8-node.25  |
| 16.20.2 | toad-cache-lru             | 2.118665 msecs | 471.995 | V8 9.4.146.26-node.26  |
| 21.5.0  | toad-cache-lru             | 2.145360 msecs | 466.122 | V8 11.8.172.17-node.18 |
| 18.19.0 | toad-cache-lru             | 2.152832 msecs | 464.504 | V8 10.2.154.26-node.28 |
| 16.20.2 | tiny-lru                   | 2.495314 msecs | 400.751 | V8 9.4.146.26-node.26  |
| 20.10.0 | tiny-lru                   | 2.513929 msecs | 397.784 | V8 11.3.244.8-node.25  |
| 18.19.0 | tiny-lru                   | 2.576196 msecs | 388.169 | V8 10.2.154.26-node.28 |
| 21.5.0  | tiny-lru                   | 2.581340 msecs | 387.396 | V8 11.8.172.17-node.18 |
| 21.5.0  | dataloader                 | 2.660240 msecs | 375.906 | V8 11.8.172.17-node.18 |
| 20.10.0 | dataloader                 | 2.693516 msecs | 371.262 | V8 11.3.244.8-node.25  |
| 18.19.0 | dataloader                 | 2.742111 msecs | 364.682 | V8 10.2.154.26-node.28 |
| 16.20.2 | dataloader                 | 2.785105 msecs | 359.053 | V8 9.4.146.26-node.26  |
| 18.19.0 | layered-loader-lru-map     | 6.300485 msecs | 158.718 | V8 10.2.154.26-node.28 |
| 18.19.0 | layered-loader-fifo-map    | 6.360716 msecs | 157.215 | V8 10.2.154.26-node.28 |
| 21.5.0  | layered-loader-fifo-map    | 6.510728 msecs | 153.593 | V8 11.8.172.17-node.18 |
| 21.5.0  | layered-loader-lru-map     | 6.511415 msecs | 153.576 | V8 11.8.172.17-node.18 |
| 20.10.0 | layered-loader-lru-map     | 6.520446 msecs | 153.364 | V8 11.3.244.8-node.25  |
| 20.10.0 | layered-loader-fifo-map    | 6.588144 msecs | 151.788 | V8 11.3.244.8-node.25  |
| 16.20.2 | layered-loader-fifo-map    | 6.724988 msecs | 148.699 | V8 9.4.146.26-node.26  |
| 16.20.2 | layered-loader-lru-map     | 6.867908 msecs | 145.605 | V8 9.4.146.26-node.26  |
| 20.10.0 | layered-loader-lru-object  | 7.307243 msecs | 136.851 | V8 11.3.244.8-node.25  |
| 20.10.0 | layered-loader-fifo-object | 7.345533 msecs | 136.137 | V8 11.3.244.8-node.25  |
| 18.19.0 | layered-loader-lru-object  | 7.346484 msecs | 136.120 | V8 10.2.154.26-node.28 |
| 18.19.0 | layered-loader-fifo-object | 7.413372 msecs | 134.891 | V8 10.2.154.26-node.28 |
| 21.5.0  | layered-loader-fifo-object | 7.591568 msecs | 131.725 | V8 11.8.172.17-node.18 |
| 21.5.0  | layered-loader-lru-object  | 7.730927 msecs | 129.351 | V8 11.8.172.17-node.18 |
| 16.20.2 | layered-loader-lru-object  | 7.881124 msecs | 126.885 | V8 9.4.146.26-node.26  |
| 18.19.0 | async-cache-dedupe         | 7.903356 msecs | 126.529 | V8 10.2.154.26-node.28 |
| 16.20.2 | layered-loader-fifo-object | 7.954195 msecs | 125.720 | V8 9.4.146.26-node.26  |
| 20.10.0 | async-cache-dedupe         | 8.181339 msecs | 122.229 | V8 11.3.244.8-node.25  |
| 21.5.0  | async-cache-dedupe         | 8.488960 msecs | 117.800 | V8 11.8.172.17-node.18 |
| 16.20.2 | async-cache-dedupe         | 8.732519 msecs | 114.514 | V8 9.4.146.26-node.26  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)