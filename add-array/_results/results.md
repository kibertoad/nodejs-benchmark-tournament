| Node    | Option       | Msecs/op       | Ops/sec     | V8                     |
| ------- | ------------ | -------------- | ----------- | ---------------------- |
| 20.19.1 | pushDestruct | 0.000282 msecs | 3542639.826 | V8 11.3.244.8-node.26  |
| 22.15.0 | pushDestruct | 0.000283 msecs | 3532888.841 | V8 12.4.254.21-node.24 |
| 18.20.8 | pushDestruct | 0.000308 msecs | 3246481.853 | V8 10.2.154.26-node.39 |
| 16.20.2 | pushDestruct | 0.000325 msecs | 3073303.008 | V8 9.4.146.26-node.26  |
| 22.15.0 | pushForEach  | 0.000326 msecs | 3067419.258 | V8 12.4.254.21-node.24 |
| 22.15.0 | pushLoop     | 0.000329 msecs | 3034916.550 | V8 12.4.254.21-node.24 |
| 20.19.1 | pushForEach  | 0.000379 msecs | 2641558.796 | V8 11.3.244.8-node.26  |
| 20.19.1 | pushLoop     | 0.000379 msecs | 2641325.749 | V8 11.3.244.8-node.26  |
| 18.20.8 | pushLoop     | 0.000396 msecs | 2522507.823 | V8 10.2.154.26-node.39 |
| 18.20.8 | pushForEach  | 0.000405 msecs | 2466235.706 | V8 10.2.154.26-node.39 |
| 16.20.2 | pushForEach  | 0.000438 msecs | 2283206.872 | V8 9.4.146.26-node.26  |
| 16.20.2 | pushLoop     | 0.000442 msecs | 2264686.425 | V8 9.4.146.26-node.26  |

**Specs**: Gen Intel® Core™ i7-13650HX (2.60 GHz)