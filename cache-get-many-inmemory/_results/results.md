| Node    | Option                     | Msecs/op       | Ops/sec | V8                     |
| ------- | -------------------------- | -------------- | ------- | ---------------------- |
| 18.17.1 | layered-loader-lru-object  | 1.678013 msecs | 595.943 | V8 10.2.154.26-node.26 |
| 18.17.1 | layered-loader-fifo-object | 1.835057 msecs | 544.942 | V8 10.2.154.26-node.26 |
| 20.6.1  | layered-loader-fifo-object | 1.887894 msecs | 529.691 | V8 11.3.244.8-node.14  |
| 20.6.1  | layered-loader-lru-object  | 1.952628 msecs | 512.130 | V8 11.3.244.8-node.14  |
| 16.20.2 | layered-loader-fifo-object | 1.966807 msecs | 508.438 | V8 9.4.146.26-node.26  |
| 16.20.2 | layered-loader-lru-object  | 2.050150 msecs | 487.769 | V8 9.4.146.26-node.26  |
| 20.6.1  | dataloader                 | 6.352666 msecs | 157.414 | V8 11.3.244.8-node.14  |
| 16.20.2 | dataloader                 | 6.799934 msecs | 147.060 | V8 9.4.146.26-node.26  |
| 18.17.1 | dataloader                 | 7.076751 msecs | 141.308 | V8 10.2.154.26-node.26 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)