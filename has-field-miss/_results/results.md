| Node    | Option               | Msecs/op       | Ops/sec      | V8                     |
| ------- | -------------------- | -------------- | ------------ | ---------------------- |
| 24.0.2  | in                   | 0.000091 msecs | 11013847.016 | V8 13.6.233.8-node.10  |
| 24.0.2  | directFieldAccess    | 0.000095 msecs | 10505679.206 | V8 13.6.233.8-node.10  |
| 20.19.2 | mapHas               | 0.000101 msecs | 9936034.007  | V8 11.3.244.8-node.26  |
| 24.0.2  | mapHas               | 0.000101 msecs | 9902446.302  | V8 13.6.233.8-node.10  |
| 22.15.1 | mapHas               | 0.000101 msecs | 9859913.535  | V8 12.4.254.21-node.24 |
| 20.19.2 | mapGet               | 0.000102 msecs | 9792913.095  | V8 11.3.244.8-node.26  |
| 22.15.1 | mapGet               | 0.000102 msecs | 9774616.315  | V8 12.4.254.21-node.24 |
| 24.0.2  | mapGet               | 0.000108 msecs | 9295481.053  | V8 13.6.233.8-node.10  |
| 18.20.8 | mapHas               | 0.000110 msecs | 9128610.582  | V8 10.2.154.26-node.39 |
| 18.20.8 | mapGet               | 0.000123 msecs | 8143395.041  | V8 10.2.154.26-node.39 |
| 20.19.2 | hasOwnProperty       | 0.000124 msecs | 8032709.231  | V8 11.3.244.8-node.26  |
| 22.15.1 | hasOwnProperty       | 0.000126 msecs | 7927450.429  | V8 12.4.254.21-node.24 |
| 20.19.2 | objectHasOwnProperty | 0.000127 msecs | 7899254.855  | V8 11.3.244.8-node.26  |
| 22.15.1 | objectHasOwnProperty | 0.000128 msecs | 7839429.913  | V8 12.4.254.21-node.24 |
| 24.0.2  | objectHasOwnProperty | 0.000129 msecs | 7760361.518  | V8 13.6.233.8-node.10  |
| 24.0.2  | hasOwnProperty       | 0.000131 msecs | 7642421.996  | V8 13.6.233.8-node.10  |
| 18.20.8 | hasOwnProperty       | 0.000136 msecs | 7373782.130  | V8 10.2.154.26-node.39 |
| 18.20.8 | objectHasOwnProperty | 0.000139 msecs | 7202437.660  | V8 10.2.154.26-node.39 |
| 20.19.2 | directFieldAccess    | 0.000142 msecs | 7053829.869  | V8 11.3.244.8-node.26  |
| 22.15.1 | directFieldAccess    | 0.000148 msecs | 6734669.404  | V8 12.4.254.21-node.24 |
| 20.19.2 | in                   | 0.000152 msecs | 6572944.517  | V8 11.3.244.8-node.26  |
| 18.20.8 | directFieldAccess    | 0.000153 msecs | 6529917.403  | V8 10.2.154.26-node.39 |
| 22.15.1 | in                   | 0.000155 msecs | 6459852.736  | V8 12.4.254.21-node.24 |
| 18.20.8 | in                   | 0.000182 msecs | 5495920.741  | V8 10.2.154.26-node.39 |

**Specs**: Gen Intel® Core™ i7-13650HX (2.60 GHz)