| Node    | Option       | Msecs/op       | Ops/sec     | V8                     |
| ------- | ------------ | -------------- | ----------- | ---------------------- |
| 21.5.0  | pushDestruct | 0.000438 msecs | 2282114.379 | V8 11.8.172.17-node.18 |
| 18.19.0 | pushDestruct | 0.000441 msecs | 2266312.979 | V8 10.2.154.26-node.28 |
| 16.20.2 | pushDestruct | 0.000454 msecs | 2200302.785 | V8 9.4.146.26-node.26  |
| 20.10.0 | pushDestruct | 0.000465 msecs | 2149905.260 | V8 11.3.244.8-node.25  |
| 20.10.0 | pushForEach  | 0.000618 msecs | 1618962.290 | V8 11.3.244.8-node.25  |
| 16.20.2 | pushForEach  | 0.000620 msecs | 1613579.588 | V8 9.4.146.26-node.26  |
| 16.20.2 | pushLoop     | 0.000628 msecs | 1592827.591 | V8 9.4.146.26-node.26  |
| 21.5.0  | pushLoop     | 0.000628 msecs | 1592148.018 | V8 11.8.172.17-node.18 |
| 20.10.0 | pushLoop     | 0.000630 msecs | 1586347.499 | V8 11.3.244.8-node.25  |
| 21.5.0  | pushForEach  | 0.000646 msecs | 1547552.187 | V8 11.8.172.17-node.18 |
| 18.19.0 | pushLoop     | 0.000651 msecs | 1535346.577 | V8 10.2.154.26-node.28 |
| 18.19.0 | pushForEach  | 0.000653 msecs | 1531988.843 | V8 10.2.154.26-node.28 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)