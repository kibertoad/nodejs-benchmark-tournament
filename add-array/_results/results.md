| Node    | Option       | Msecs/op       | Ops/sec     | V8                     |
| ------- | ------------ | -------------- | ----------- | ---------------------- |
| 20.19.2 | pushDestruct | 0.000287 msecs | 3484740.491 | V8 11.3.244.8-node.26  |
| 22.15.1 | pushDestruct | 0.000288 msecs | 3471920.200 | V8 12.4.254.21-node.24 |
| 24.0.2  | pushDestruct | 0.000304 msecs | 3287548.437 | V8 13.6.233.8-node.10  |
| 18.20.8 | pushDestruct | 0.000326 msecs | 3067164.473 | V8 10.2.154.26-node.39 |
| 22.15.1 | pushForEach  | 0.000334 msecs | 2992510.586 | V8 12.4.254.21-node.24 |
| 22.15.1 | pushLoop     | 0.000341 msecs | 2936014.984 | V8 12.4.254.21-node.24 |
| 24.0.2  | pushLoop     | 0.000343 msecs | 2916256.348 | V8 13.6.233.8-node.10  |
| 24.0.2  | pushForEach  | 0.000351 msecs | 2847157.261 | V8 13.6.233.8-node.10  |
| 18.20.8 | pushLoop     | 0.000417 msecs | 2399049.340 | V8 10.2.154.26-node.39 |
| 20.19.2 | pushLoop     | 0.000422 msecs | 2369049.721 | V8 11.3.244.8-node.26  |
| 20.19.2 | pushForEach  | 0.000425 msecs | 2354071.495 | V8 11.3.244.8-node.26  |
| 18.20.8 | pushForEach  | 0.000425 msecs | 2353071.144 | V8 10.2.154.26-node.39 |

**Specs**: Gen Intel® Core™ i7-13650HX (2.60 GHz)