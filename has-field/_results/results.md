| Node    | Option               | Msecs/op       | Ops/sec     | V8                     |
| ------- | -------------------- | -------------- | ----------- | ---------------------- |
| 20.19.1 | mapHas               | 0.000102 msecs | 9788095.071 | V8 11.3.244.8-node.26  |
| 22.15.0 | mapHas               | 0.000105 msecs | 9538934.096 | V8 12.4.254.21-node.24 |
| 18.20.8 | mapHas               | 0.000107 msecs | 9363388.712 | V8 10.2.154.26-node.39 |
| 22.15.0 | mapGet               | 0.000108 msecs | 9292209.002 | V8 12.4.254.21-node.24 |
| 20.19.1 | mapGet               | 0.000117 msecs | 8513338.650 | V8 11.3.244.8-node.26  |
| 20.19.1 | hasOwnProperty       | 0.000126 msecs | 7908424.562 | V8 11.3.244.8-node.26  |
| 18.20.8 | mapGet               | 0.000127 msecs | 7877348.316 | V8 10.2.154.26-node.39 |
| 22.15.0 | objectHasOwnProperty | 0.000133 msecs | 7531521.593 | V8 12.4.254.21-node.24 |
| 20.19.1 | objectHasOwnProperty | 0.000134 msecs | 7435659.802 | V8 11.3.244.8-node.26  |
| 22.15.0 | hasOwnProperty       | 0.000135 msecs | 7412985.146 | V8 12.4.254.21-node.24 |
| 18.20.8 | objectHasOwnProperty | 0.000135 msecs | 7380137.911 | V8 10.2.154.26-node.39 |
| 20.19.1 | in                   | 0.000137 msecs | 7321979.811 | V8 11.3.244.8-node.26  |
| 18.20.8 | hasOwnProperty       | 0.000137 msecs | 7298996.389 | V8 10.2.154.26-node.39 |
| 20.19.1 | directFieldAccess    | 0.000140 msecs | 7127889.666 | V8 11.3.244.8-node.26  |
| 22.15.0 | in                   | 0.000141 msecs | 7106070.022 | V8 12.4.254.21-node.24 |
| 18.20.8 | in                   | 0.000144 msecs | 6922769.872 | V8 10.2.154.26-node.39 |
| 16.20.2 | mapHas               | 0.000146 msecs | 6836528.677 | V8 9.4.146.26-node.26  |
| 18.20.8 | directFieldAccess    | 0.000147 msecs | 6779804.978 | V8 10.2.154.26-node.39 |
| 22.15.0 | directFieldAccess    | 0.000150 msecs | 6676154.621 | V8 12.4.254.21-node.24 |
| 16.20.2 | mapGet               | 0.000156 msecs | 6429889.312 | V8 9.4.146.26-node.26  |
| 16.20.2 | hasOwnProperty       | 0.000163 msecs | 6149399.805 | V8 9.4.146.26-node.26  |
| 16.20.2 | objectHasOwnProperty | 0.000163 msecs | 6131860.720 | V8 9.4.146.26-node.26  |
| 16.20.2 | in                   | 0.000169 msecs | 5926175.655 | V8 9.4.146.26-node.26  |
| 16.20.2 | directFieldAccess    | 0.000172 msecs | 5822156.989 | V8 9.4.146.26-node.26  |

**Specs**: Gen Intel® Core™ i7-13650HX (2.60 GHz)