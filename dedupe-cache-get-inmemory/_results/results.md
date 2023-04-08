| Node   | Option                     | Msecs/op         | Ops/sec  | V8                     |
| ------ | -------------------------- | ---------------- | -------- | ---------------------- |
| 19.8.1 | layered-loader-lru         | 0.522358 msecs   | 1914.396 | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader-lru-object  | 0.529726 msecs   | 1887.768 | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader-fifo-object | 0.538470 msecs   | 1857.114 | V8 10.8.168.25-node.12 |
| 19.8.1 | layered-loader-fifo        | 0.540220 msecs   | 1851.098 | V8 10.8.168.25-node.12 |
| 19.8.1 | no-dedupe-lru              | 0.633366 msecs   | 1578.866 | V8 10.8.168.25-node.12 |
| 19.8.1 | async-cache-dedupe         | 1.514956 msecs   | 660.085  | V8 10.8.168.25-node.12 |
| 19.8.1 | dataloader                 | 245.707116 msecs | 4.070    | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)