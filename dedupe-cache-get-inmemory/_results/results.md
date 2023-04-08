| Node    | Option                     | Msecs/op         | Ops/sec  | V8                     |
| ------- | -------------------------- | ---------------- | -------- | ---------------------- |
| 18.15.0 | layered-loader-fifo-object | 0.564974 msecs   | 1769.993 | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader-fifo        | 0.574608 msecs   | 1740.317 | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader-lru-object  | 0.592480 msecs   | 1687.821 | V8 10.2.154.26-node.25 |
| 18.15.0 | layered-loader-lru         | 0.603894 msecs   | 1655.920 | V8 10.2.154.26-node.25 |
| 18.15.0 | no-dedupe-lru              | 0.811336 msecs   | 1232.535 | V8 10.2.154.26-node.25 |
| 18.15.0 | async-cache-dedupe         | 1.528632 msecs   | 654.180  | V8 10.2.154.26-node.25 |
| 18.15.0 | dataloader                 | 827.402982 msecs | 1.209    | V8 10.2.154.26-node.25 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)