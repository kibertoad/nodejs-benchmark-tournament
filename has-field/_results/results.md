| Node     | Option               | Msecs/op       | Ops/sec      | V8                     |
| -------- | -------------------- | -------------- | ------------ | ---------------------- |
| 10.24.1  | directFieldAccess    | 0.000022 msecs | 45680157.371 | V8 6.8.275.32-node.59  |
| 10.24.1  | mapHas               | 0.000022 msecs | 45555097.430 | V8 6.8.275.32-node.59  |
| 12.22.12 | mapHas               | 0.000032 msecs | 31470461.970 | V8 7.8.279.23-node.57  |
| 16.19.1  | mapHas               | 0.000033 msecs | 30010546.991 | V8 9.4.146.26-node.24  |
| 19.8.1   | mapHas               | 0.000034 msecs | 29677114.139 | V8 10.8.168.25-node.12 |
| 18.15.0  | mapHas               | 0.000034 msecs | 29406908.360 | V8 10.2.154.26-node.25 |
| 14.21.3  | mapHas               | 0.000052 msecs | 19175609.374 | V8 8.4.371.23-node.88  |
| 10.24.1  | in                   | 0.000059 msecs | 17070049.489 | V8 6.8.275.32-node.59  |
| 10.24.1  | hasOwnProperty       | 0.000060 msecs | 16621296.350 | V8 6.8.275.32-node.59  |
| 10.24.1  | objectHasOwnProperty | 0.000060 msecs | 16551419.861 | V8 6.8.275.32-node.59  |
| 12.22.12 | objectHasOwnProperty | 0.000071 msecs | 14109030.489 | V8 7.8.279.23-node.57  |
| 12.22.12 | in                   | 0.000071 msecs | 14099730.792 | V8 7.8.279.23-node.57  |
| 12.22.12 | hasOwnProperty       | 0.000071 msecs | 14069826.968 | V8 7.8.279.23-node.57  |
| 16.19.1  | hasOwnProperty       | 0.000075 msecs | 13354979.230 | V8 9.4.146.26-node.24  |
| 16.19.1  | objectHasOwnProperty | 0.000075 msecs | 13325934.018 | V8 9.4.146.26-node.24  |
| 16.19.1  | in                   | 0.000076 msecs | 13172158.852 | V8 9.4.146.26-node.24  |
| 12.22.12 | directFieldAccess    | 0.000078 msecs | 12894528.359 | V8 7.8.279.23-node.57  |
| 18.15.0  | hasOwnProperty       | 0.000082 msecs | 12267403.760 | V8 10.2.154.26-node.25 |
| 18.15.0  | objectHasOwnProperty | 0.000082 msecs | 12166051.522 | V8 10.2.154.26-node.25 |
| 19.8.1   | objectHasOwnProperty | 0.000083 msecs | 12097414.599 | V8 10.8.168.25-node.12 |
| 19.8.1   | hasOwnProperty       | 0.000084 msecs | 11971264.187 | V8 10.8.168.25-node.12 |
| 16.19.1  | directFieldAccess    | 0.000084 msecs | 11937612.831 | V8 9.4.146.26-node.24  |
| 18.15.0  | in                   | 0.000087 msecs | 11441439.353 | V8 10.2.154.26-node.25 |
| 19.8.1   | directFieldAccess    | 0.000090 msecs | 11083692.721 | V8 10.8.168.25-node.12 |
| 19.8.1   | in                   | 0.000090 msecs | 11055919.117 | V8 10.8.168.25-node.12 |
| 18.15.0  | directFieldAccess    | 0.000091 msecs | 11031481.193 | V8 10.2.154.26-node.25 |
| 14.21.3  | in                   | 0.000097 msecs | 10297965.101 | V8 8.4.371.23-node.88  |
| 14.21.3  | hasOwnProperty       | 0.000097 msecs | 10264239.667 | V8 8.4.371.23-node.88  |
| 14.21.3  | objectHasOwnProperty | 0.000099 msecs | 10087136.091 | V8 8.4.371.23-node.88  |
| 14.21.3  | directFieldAccess    | 0.000101 msecs | 9888257.834  | V8 8.4.371.23-node.88  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)