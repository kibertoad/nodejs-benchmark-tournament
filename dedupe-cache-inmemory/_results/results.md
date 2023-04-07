| Node    | Option             | Msecs/op       | Ops/sec  | V8                     |
| ------- | ------------------ | -------------- | -------- | ---------------------- |
| 18.15.0 | layered-loader     | 0.496887 msecs | 2012.530 | V8 10.2.154.26-node.25 |
| 19.8.1  | layered-loader     | 0.497191 msecs | 2011.298 | V8 10.8.168.25-node.12 |
| 16.20.0 | layered-loader     | 0.555701 msecs | 1799.528 | V8 9.4.146.26-node.26  |
| 14.21.3 | layered-loader     | 0.587005 msecs | 1703.563 | V8 8.4.371.23-node.88  |
| 19.8.1  | data-loader        | 1.402786 msecs | 712.867  | V8 10.8.168.25-node.12 |
| 16.20.0 | data-loader        | 1.444756 msecs | 692.159  | V8 9.4.146.26-node.26  |
| 18.15.0 | data-loader        | 1.473368 msecs | 678.717  | V8 10.2.154.26-node.25 |
| 14.21.3 | data-loader        | 1.615406 msecs | 619.039  | V8 8.4.371.23-node.88  |
| 16.20.0 | async-cache-dedupe | 3.590809 msecs | 278.489  | V8 9.4.146.26-node.26  |
| 14.21.3 | async-cache-dedupe | 3.758174 msecs | 266.087  | V8 8.4.371.23-node.88  |
| 18.15.0 | async-cache-dedupe | 4.082782 msecs | 244.931  | V8 10.2.154.26-node.25 |
| 19.8.1  | async-cache-dedupe | 4.125448 msecs | 242.398  | V8 10.8.168.25-node.12 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)