| Node     | Option               | Msecs/op       | Ops/sec      | V8                     |
| -------- | -------------------- | -------------- | ------------ | ---------------------- |
| 10.24.1  | mapHas               | 0.000022 msecs | 45966265.064 | V8 6.8.275.32-node.59  |
| 10.24.1  | directFieldAccess    | 0.000022 msecs | 45342841.979 | V8 6.8.275.32-node.59  |
| 12.22.12 | mapHas               | 0.000033 msecs | 30303103.958 | V8 7.8.279.23-node.57  |
| 16.19.1  | mapHas               | 0.000033 msecs | 30083034.368 | V8 9.4.146.26-node.24  |
| 19.8.1   | mapHas               | 0.000034 msecs | 29732265.147 | V8 10.8.168.25-node.12 |
| 18.15.0  | mapHas               | 0.000035 msecs | 28704407.659 | V8 10.2.154.26-node.25 |
| 18.15.0  | mapGet               | 0.000047 msecs | 21398000.116 | V8 10.2.154.26-node.25 |
| 10.24.1  | mapGet               | 0.000047 msecs | 21224619.079 | V8 6.8.275.32-node.59  |
| 19.8.1   | mapGet               | 0.000047 msecs | 21199476.972 | V8 10.8.168.25-node.12 |
| 16.19.1  | mapGet               | 0.000047 msecs | 21187234.257 | V8 9.4.146.26-node.24  |
| 12.22.12 | mapGet               | 0.000048 msecs | 21027631.584 | V8 7.8.279.23-node.57  |
| 14.21.3  | mapHas               | 0.000051 msecs | 19427159.080 | V8 8.4.371.23-node.88  |
| 10.24.1  | objectHasOwnProperty | 0.000059 msecs | 16809879.060 | V8 6.8.275.32-node.59  |
| 14.21.3  | mapGet               | 0.000065 msecs | 15278089.492 | V8 8.4.371.23-node.88  |
| 10.24.1  | hasOwnProperty       | 0.000067 msecs | 14986776.995 | V8 6.8.275.32-node.59  |
| 12.22.12 | hasOwnProperty       | 0.000070 msecs | 14262005.187 | V8 7.8.279.23-node.57  |
| 12.22.12 | objectHasOwnProperty | 0.000071 msecs | 14030262.399 | V8 7.8.279.23-node.57  |
| 16.19.1  | objectHasOwnProperty | 0.000073 msecs | 13694282.066 | V8 9.4.146.26-node.24  |
| 10.24.1  | in                   | 0.000073 msecs | 13678046.123 | V8 6.8.275.32-node.59  |
| 16.19.1  | hasOwnProperty       | 0.000073 msecs | 13665597.658 | V8 9.4.146.26-node.24  |
| 18.15.0  | objectHasOwnProperty | 0.000079 msecs | 12673207.448 | V8 10.2.154.26-node.25 |
| 18.15.0  | hasOwnProperty       | 0.000082 msecs | 12249291.138 | V8 10.2.154.26-node.25 |
| 12.22.12 | directFieldAccess    | 0.000082 msecs | 12171144.301 | V8 7.8.279.23-node.57  |
| 19.8.1   | objectHasOwnProperty | 0.000082 msecs | 12164561.144 | V8 10.8.168.25-node.12 |
| 18.15.0  | directFieldAccess    | 0.000083 msecs | 12115196.688 | V8 10.2.154.26-node.25 |
| 19.8.1   | directFieldAccess    | 0.000083 msecs | 11998661.618 | V8 10.8.168.25-node.12 |
| 16.19.1  | directFieldAccess    | 0.000085 msecs | 11812495.735 | V8 9.4.146.26-node.24  |
| 19.8.1   | hasOwnProperty       | 0.000087 msecs | 11452140.411 | V8 10.8.168.25-node.12 |
| 12.22.12 | in                   | 0.000093 msecs | 10793187.773 | V8 7.8.279.23-node.57  |
| 14.21.3  | objectHasOwnProperty | 0.000096 msecs | 10377472.538 | V8 8.4.371.23-node.88  |
| 14.21.3  | hasOwnProperty       | 0.000097 msecs | 10276056.115 | V8 8.4.371.23-node.88  |
| 19.8.1   | in                   | 0.000098 msecs | 10171165.992 | V8 10.8.168.25-node.12 |
| 18.15.0  | in                   | 0.000099 msecs | 10143901.143 | V8 10.2.154.26-node.25 |
| 16.19.1  | in                   | 0.000100 msecs | 9986502.714  | V8 9.4.146.26-node.24  |
| 14.21.3  | directFieldAccess    | 0.000101 msecs | 9926241.436  | V8 8.4.371.23-node.88  |
| 14.21.3  | in                   | 0.000101 msecs | 9925115.604  | V8 8.4.371.23-node.88  |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)