| Node    | Option               | Msecs/op       | Ops/sec      | V8                     |
| ------- | -------------------- | -------------- | ------------ | ---------------------- |
| 24.0.2  | in                   | 0.000089 msecs | 11234362.349 | V8 13.6.233.8-node.10  |
| 24.0.2  | directFieldAccess    | 0.000093 msecs | 10787171.567 | V8 13.6.233.8-node.10  |
| 24.0.2  | mapHas               | 0.000102 msecs | 9833261.152  | V8 13.6.233.8-node.10  |
| 20.19.2 | mapHas               | 0.000102 msecs | 9800559.927  | V8 11.3.244.8-node.26  |
| 22.15.1 | mapHas               | 0.000103 msecs | 9754105.212  | V8 12.4.254.21-node.24 |
| 24.0.2  | mapGet               | 0.000103 msecs | 9689511.635  | V8 13.6.233.8-node.10  |
| 22.15.1 | mapGet               | 0.000107 msecs | 9316941.255  | V8 12.4.254.21-node.24 |
| 20.19.2 | mapGet               | 0.000109 msecs | 9181437.931  | V8 11.3.244.8-node.26  |
| 18.20.8 | mapHas               | 0.000115 msecs | 8725000.498  | V8 10.2.154.26-node.39 |
| 24.0.2  | objectHasOwnProperty | 0.000130 msecs | 7709679.882  | V8 13.6.233.8-node.10  |
| 24.0.2  | hasOwnProperty       | 0.000130 msecs | 7682406.714  | V8 13.6.233.8-node.10  |
| 20.19.2 | hasOwnProperty       | 0.000132 msecs | 7568495.049  | V8 11.3.244.8-node.26  |
| 22.15.1 | objectHasOwnProperty | 0.000133 msecs | 7528449.368  | V8 12.4.254.21-node.24 |
| 22.15.1 | in                   | 0.000134 msecs | 7441031.182  | V8 12.4.254.21-node.24 |
| 22.15.1 | hasOwnProperty       | 0.000135 msecs | 7425307.092  | V8 12.4.254.21-node.24 |
| 18.20.8 | mapGet               | 0.000135 msecs | 7415983.743  | V8 10.2.154.26-node.39 |
| 20.19.2 | in                   | 0.000136 msecs | 7366939.546  | V8 11.3.244.8-node.26  |
| 18.20.8 | hasOwnProperty       | 0.000137 msecs | 7297358.315  | V8 10.2.154.26-node.39 |
| 20.19.2 | objectHasOwnProperty | 0.000139 msecs | 7219651.741  | V8 11.3.244.8-node.26  |
| 20.19.2 | directFieldAccess    | 0.000139 msecs | 7195117.587  | V8 11.3.244.8-node.26  |
| 18.20.8 | objectHasOwnProperty | 0.000140 msecs | 7129557.293  | V8 10.2.154.26-node.39 |
| 18.20.8 | in                   | 0.000150 msecs | 6660142.975  | V8 10.2.154.26-node.39 |
| 22.15.1 | directFieldAccess    | 0.000150 msecs | 6653083.427  | V8 12.4.254.21-node.24 |
| 18.20.8 | directFieldAccess    | 0.000153 msecs | 6552873.439  | V8 10.2.154.26-node.39 |

**Specs**: Gen Intel® Core™ i7-13650HX (2.60 GHz)