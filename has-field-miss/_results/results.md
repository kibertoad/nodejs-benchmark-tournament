| Node    | Option               | Msecs/op       | Ops/sec     | V8                     |
| ------- | -------------------- | -------------- | ----------- | ---------------------- |
| 20.19.1 | mapHas               | 0.000101 msecs | 9884563.549 | V8 11.3.244.8-node.26  |
| 22.15.0 | mapHas               | 0.000102 msecs | 9797321.156 | V8 12.4.254.21-node.24 |
| 22.15.0 | mapGet               | 0.000106 msecs | 9406553.599 | V8 12.4.254.21-node.24 |
| 20.19.1 | mapGet               | 0.000108 msecs | 9293998.626 | V8 11.3.244.8-node.26  |
| 18.20.8 | mapHas               | 0.000121 msecs | 8255439.543 | V8 10.2.154.26-node.39 |
| 20.19.1 | hasOwnProperty       | 0.000124 msecs | 8061543.595 | V8 11.3.244.8-node.26  |
| 22.15.0 | objectHasOwnProperty | 0.000129 msecs | 7764202.000 | V8 12.4.254.21-node.24 |
| 22.15.0 | hasOwnProperty       | 0.000130 msecs | 7680753.598 | V8 12.4.254.21-node.24 |
| 18.20.8 | mapGet               | 0.000132 msecs | 7577621.666 | V8 10.2.154.26-node.39 |
| 20.19.1 | objectHasOwnProperty | 0.000132 msecs | 7567135.764 | V8 11.3.244.8-node.26  |
| 16.20.2 | mapHas               | 0.000133 msecs | 7497936.030 | V8 9.4.146.26-node.26  |
| 18.20.8 | objectHasOwnProperty | 0.000136 msecs | 7366314.140 | V8 10.2.154.26-node.39 |
| 18.20.8 | hasOwnProperty       | 0.000137 msecs | 7309047.323 | V8 10.2.154.26-node.39 |
| 20.19.1 | directFieldAccess    | 0.000144 msecs | 6957668.331 | V8 11.3.244.8-node.26  |
| 16.20.2 | mapGet               | 0.000144 msecs | 6932113.117 | V8 9.4.146.26-node.26  |
| 22.15.0 | directFieldAccess    | 0.000150 msecs | 6647686.482 | V8 12.4.254.21-node.24 |
| 18.20.8 | directFieldAccess    | 0.000154 msecs | 6507247.302 | V8 10.2.154.26-node.39 |
| 22.15.0 | in                   | 0.000158 msecs | 6336335.932 | V8 12.4.254.21-node.24 |
| 16.20.2 | hasOwnProperty       | 0.000159 msecs | 6291637.798 | V8 9.4.146.26-node.26  |
| 16.20.2 | objectHasOwnProperty | 0.000161 msecs | 6192771.738 | V8 9.4.146.26-node.26  |
| 20.19.1 | in                   | 0.000162 msecs | 6183148.021 | V8 11.3.244.8-node.26  |
| 16.20.2 | directFieldAccess    | 0.000178 msecs | 5625034.944 | V8 9.4.146.26-node.26  |
| 18.20.8 | in                   | 0.000181 msecs | 5531340.186 | V8 10.2.154.26-node.39 |
| 16.20.2 | in                   | 0.000201 msecs | 4965257.669 | V8 9.4.146.26-node.26  |

**Specs**: Gen Intel® Core™ i7-13650HX (2.60 GHz)