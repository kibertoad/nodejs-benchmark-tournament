| Node    | Option             | Msecs/op       | Ops/sec  | V8                     |
| ------- | ------------------ | -------------- | -------- | ---------------------- |
| 19.8.1  | layered-loader     | 0.498997 msecs | 2004.022 | V8 10.8.168.25-node.12 |
| 18.15.0 | layered-loader     | 0.499486 msecs | 2002.059 | V8 10.2.154.26-node.25 |
| 16.20.0 | layered-loader     | 0.552645 msecs | 1809.480 | V8 9.4.146.26-node.26  |
| 14.21.3 | layered-loader     | 0.591269 msecs | 1691.277 | V8 8.4.371.23-node.88  |
| 19.8.1  | data-loader        | 1.386932 msecs | 721.016  | V8 10.8.168.25-node.12 |
| 16.20.0 | data-loader        | 1.444097 msecs | 692.474  | V8 9.4.146.26-node.26  |
| 18.15.0 | data-loader        | 1.479649 msecs | 675.836  | V8 10.2.154.26-node.25 |
| 14.21.3 | data-loader        | 1.594376 msecs | 627.205  | V8 8.4.371.23-node.88  |
| 18.15.0 | async-cache-dedupe | 1.991713 msecs | 502.080  | V8 10.2.154.26-node.25 |
| 16.20.0 | async-cache-dedupe | 2.055603 msecs | 486.475  | V8 9.4.146.26-node.26  |
| 14.21.3 | async-cache-dedupe | 2.165637 msecs | 461.758  | V8 8.4.371.23-node.88  |
| 19.8.1  | async-cache-dedupe | 2.219303 msecs | 450.592  | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)