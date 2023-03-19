| Node     | Option               | Msecs/op       | Ops/sec      | V8                     |
| -------- | -------------------- | -------------- | ------------ | ---------------------- |
| 10.24.1  | mapHas               | 0.000022 msecs | 46132626.790 | V8 6.8.275.32-node.59  |
| 10.24.1  | directFieldAccess    | 0.000022 msecs | 45995933.681 | V8 6.8.275.32-node.59  |
| 12.22.12 | mapHas               | 0.000032 msecs | 31602642.024 | V8 7.8.279.23-node.57  |
| 18.15.0  | mapHas               | 0.000034 msecs | 29447492.424 | V8 10.2.154.26-node.25 |
| 16.19.1  | mapHas               | 0.000034 msecs | 29424559.768 | V8 9.4.146.26-node.24  |
| 10.24.1  | mapGet               | 0.000038 msecs | 26655780.424 | V8 6.8.275.32-node.59  |
| 19.8.1   | mapHas               | 0.000038 msecs | 26195293.416 | V8 10.8.168.25-node.12 |
| 16.19.1  | mapGet               | 0.000049 msecs | 20586855.910 | V8 9.4.146.26-node.24  |
| 19.8.1   | mapGet               | 0.000050 msecs | 19982618.064 | V8 10.8.168.25-node.12 |
| 18.15.0  | mapGet               | 0.000050 msecs | 19805964.088 | V8 10.2.154.26-node.25 |
| 14.21.3  | mapHas               | 0.000053 msecs | 19023580.470 | V8 8.4.371.23-node.88  |
| 12.22.12 | mapGet               | 0.000054 msecs | 18392378.175 | V8 7.8.279.23-node.57  |
| 10.24.1  | in                   | 0.000058 msecs | 17314869.396 | V8 6.8.275.32-node.59  |
| 10.24.1  | objectHasOwnProperty | 0.000061 msecs | 16485295.670 | V8 6.8.275.32-node.59  |
| 10.24.1  | hasOwnProperty       | 0.000061 msecs | 16453350.492 | V8 6.8.275.32-node.59  |
| 14.21.3  | mapGet               | 0.000067 msecs | 14852146.185 | V8 8.4.371.23-node.88  |
| 12.22.12 | objectHasOwnProperty | 0.000071 msecs | 14127294.640 | V8 7.8.279.23-node.57  |
| 12.22.12 | hasOwnProperty       | 0.000071 msecs | 14117460.801 | V8 7.8.279.23-node.57  |
| 12.22.12 | in                   | 0.000071 msecs | 14112153.267 | V8 7.8.279.23-node.57  |
| 16.19.1  | objectHasOwnProperty | 0.000071 msecs | 14072570.492 | V8 9.4.146.26-node.24  |
| 16.19.1  | hasOwnProperty       | 0.000072 msecs | 13877498.159 | V8 9.4.146.26-node.24  |
| 12.22.12 | directFieldAccess    | 0.000077 msecs | 13013849.328 | V8 7.8.279.23-node.57  |
| 16.19.1  | in                   | 0.000078 msecs | 12743151.582 | V8 9.4.146.26-node.24  |
| 16.19.1  | directFieldAccess    | 0.000080 msecs | 12509878.430 | V8 9.4.146.26-node.24  |
| 18.15.0  | hasOwnProperty       | 0.000081 msecs | 12310464.703 | V8 10.2.154.26-node.25 |
| 19.8.1   | hasOwnProperty       | 0.000081 msecs | 12298893.370 | V8 10.8.168.25-node.12 |
| 18.15.0  | in                   | 0.000084 msecs | 11931266.508 | V8 10.2.154.26-node.25 |
| 19.8.1   | directFieldAccess    | 0.000086 msecs | 11694460.622 | V8 10.8.168.25-node.12 |
| 18.15.0  | objectHasOwnProperty | 0.000087 msecs | 11554278.901 | V8 10.2.154.26-node.25 |
| 19.8.1   | in                   | 0.000088 msecs | 11332252.373 | V8 10.8.168.25-node.12 |
| 18.15.0  | directFieldAccess    | 0.000089 msecs | 11281617.719 | V8 10.2.154.26-node.25 |
| 19.8.1   | objectHasOwnProperty | 0.000089 msecs | 11246783.968 | V8 10.8.168.25-node.12 |
| 14.21.3  | in                   | 0.000096 msecs | 10370255.857 | V8 8.4.371.23-node.88  |
| 14.21.3  | objectHasOwnProperty | 0.000098 msecs | 10221281.090 | V8 8.4.371.23-node.88  |
| 14.21.3  | hasOwnProperty       | 0.000098 msecs | 10193104.949 | V8 8.4.371.23-node.88  |
| 14.21.3  | directFieldAccess    | 0.000100 msecs | 9953502.434  | V8 8.4.371.23-node.88  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)