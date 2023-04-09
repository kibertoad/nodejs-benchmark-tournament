| Node    | Option                     | Msecs/op       | Ops/sec  | V8                     |
| ------- | -------------------------- | -------------- | -------- | ---------------------- |
| 19.8.1  | toad-cache-lru             | 0.265038 msecs | 3773.045 | V8 10.8.168.25-node.12 |
| 19.8.1  | tiny-lru                   | 0.275993 msecs | 3623.274 | V8 10.8.168.25-node.12 |
| 18.15.0 | toad-cache-lru             | 0.276069 msecs | 3622.283 | V8 10.2.154.26-node.25 |
| 16.20.0 | toad-cache-lru             | 0.291614 msecs | 3429.187 | V8 9.4.146.26-node.26  |
| 18.15.0 | tiny-lru                   | 0.296160 msecs | 3376.557 | V8 10.2.154.26-node.25 |
| 16.20.0 | tiny-lru                   | 0.298211 msecs | 3353.335 | V8 9.4.146.26-node.26  |
| 19.8.1  | layered-loader-fifo-object | 2.003438 msecs | 499.142  | V8 10.8.168.25-node.12 |
| 19.8.1  | dataloader                 | 2.005310 msecs | 498.676  | V8 10.8.168.25-node.12 |
| 18.15.0 | dataloader                 | 2.007324 msecs | 498.176  | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader-fifo-map    | 2.008334 msecs | 497.925  | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru-object  | 2.017881 msecs | 495.569  | V8 10.8.168.25-node.12 |
| 16.20.0 | dataloader                 | 2.020493 msecs | 494.929  | V8 9.4.146.26-node.26  |
| 18.15.0 | layered-loader-lru-object  | 2.021017 msecs | 494.800  | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader-lru-map     | 2.029107 msecs | 492.828  | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader-lru-map     | 2.039291 msecs | 490.367  | V8 10.8.168.25-node.12 |
| 19.8.1  | layered-loader-fifo-map    | 2.044856 msecs | 489.032  | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader-fifo-object | 2.055376 msecs | 486.529  | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader-fifo-map    | 2.109913 msecs | 473.953  | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru-map     | 2.134518 msecs | 468.490  | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-lru-object  | 2.182556 msecs | 458.178  | V8 9.4.146.26-node.26  |
| 16.20.0 | layered-loader-fifo-object | 2.227485 msecs | 448.937  | V8 9.4.146.26-node.26  |
| 18.15.0 | async-cache-dedupe         | 3.432545 msecs | 291.329  | V8 10.2.154.26-node.25 |
| 16.20.0 | async-cache-dedupe         | 3.484951 msecs | 286.948  | V8 9.4.146.26-node.26  |
| 19.8.1  | async-cache-dedupe         | 3.577512 msecs | 279.524  | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)